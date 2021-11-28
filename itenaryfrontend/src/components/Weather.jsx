import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import moment from 'moment';
export default function Weather() {
    //Declare states to store information
    const {id} = useParams();
    const {name} = useParams();
    const {traveldate} = useParams();
    const[temperature, setTemperature] = useState([]);
    const [message, setmessage] = useState();
    const[buten, setbuten] = React.useState(false);
    const[butentext, setbutentext] = React.useState('Get Weather Data');
    //Set and get cache using local storage
    function getWithExpiry(key) {
        const itemStr = localStorage.getItem(key)
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }
    function setWithExpiry(key, value, ttl) {
        const now = new Date()
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    //Get data from database
    async function getFromDB(){
        await fetch(`http://localhost:8080/weather/getweather?cityname=${name}`)
        .then(res=>res.json())
        .then((resx)=>{
            const dailyData = resx[0].dxjson;
            const clear = JSON.parse(dailyData);
            console.log(clear);
            setTemperature(clear);
            setbuten(false);
            setbutentext("Get Weather Data"); 
        }).catch((e)=>{
            console.log(e);
            setbuten(false);
            setbutentext("Get Weather Data"); 
        })
    }
    //Get data from API
    async function getFromAPI(){
        await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=f0decf7fa8b30b2189213f9295f32408&units=metric`)
        .then(res=>res.json())
        .then((resx)=>{
            const dailyData = resx.list.filter(reading => reading.dt_txt.includes(traveldate))
            setWithExpiry(name, "enabled", 3600000);
            setTemperature(dailyData);
            var cityname = name;
            var dxjson = JSON.stringify(dailyData);
            if(dxjson !== null && dxjson !== 'undefined'){
                const weather = JSON.stringify({id, cityname, dxjson});
                const url = "http://localhost:8080/weather/putdata";
                console.log((weather));
                fetch(url,{
                    method:"PUT",
                    headers:{"Content-Type":"application/json"},
                    body:weather
                    }).then(()=>{
                        console.log("New weather added");
                        setbuten(false);
                        setbutentext("Get Weather Data"); 
                    })
            }
        }).catch((e)=>{
            console.log(e)
            setmessage("Error no weather data found");
            setbuten(false);
            setbutentext("Get Weather Data"); 
        })
    }
   //Handle click event of the button to retrieve weather data from db or api
    const handleClick=(e)=>{
        e.preventDefault()
        setbuten(true);
        setbutentext("Loading...");
        const value = getWithExpiry(name)
        if(value != null){
            getFromDB()
        }else{
            getFromAPI()
        }
      
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    //Translate weather conditions
    function translateweather(feels){
        if(feels < 2){
            return "It will be freezing outside. Don't stay long outside";
        }else if(feels < 10 && feels > 2){
            return "It will be cold outside please take your coat";
        }else if(feels < 20 && feels > 10){
            return "It will not be freezing outside but always take your coat";
        }else{
            return "It will be warm outside watch out for rain";
        }
    }
    return (
        <div>
            <h2>Weather Data for {name} on {moment(traveldate).format("DD/MM/YYYY")}</h2>
            <Container>
            <Button variant="contained" disabled={buten} style={{margin:"2%"}} onClick={handleClick}>{butentext}</Button>
            {message}
                <Grid container spacing={2} columns={12}>            
                    {temperature.map((item, i)=>
                        <Grid item xs={3} key={i}>
                            <Item>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" /><br />
                                Temperature : {item.main.temp}&#8451;<br />
                                Feels Like : {item.main.feels_like}&#8451;<br />
                                Min : {item.main.temp_min}&#8451;<br />
                                Max : {item.main.temp_max}&#8451;<br />
                                Humidity : {item.main.humidity}% <br />
                                {moment(item.dt_txt).format('hh:mm A')}
                                <hr />
                                Condition : {item.weather[0].main} <br />
                                Description : {item.weather[0].description} <br />
                                {translateweather(item.main.feels_like)}
                            </Item>
                        </Grid>
                    )
                    }
                </Grid>
            </Container>
        </div>
    )
}
