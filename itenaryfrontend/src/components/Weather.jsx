import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import moment from 'moment';
export default function Weather() {
    const {id} = useParams();
    const {name} = useParams();
    const {traveldate} = useParams();
    const[temperature, setTemperature] = useState([]);
    const [cityname, setcityname] = useState();
    const[dxjson, setdxjson] = useState([]);
    const[date, setDate] = useState('');
    var i=0;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=f0decf7fa8b30b2189213f9295f32408&units=metric`)
        .then(res=>res.json())
        .then((resx)=>{
            const dailyData = resx.list.filter(reading => reading.dt_txt.includes(traveldate))
            localStorage.setItem('rememberMe', JSON.stringify(dailyData));
            setTemperature(dailyData);
        })
    // React.useEffect(()=>{
        
    //   )
    //   },[id, traveldate, name])
    //   console.log(JSON.parse(dxjson));
    // const handleClick=(e)=>{
    //     e.preventDefault()
        
    //         // setcityname(name);
    //         var cityname = name;
    //         var dxjson = JSON.stringify(dailyData);
    //         if(dxjson != null && dxjson != 'undefined'){
    //             const weather = JSON.stringify({cityname, dxjson});
    //               const url = "http://localhost:8080/weather/add";
    //               console.log((weather));
    //               fetch(url,{
    //                 method:"POST",
    //                 headers:{"Content-Type":"application/json"},
    //                 body:weather
    //                 }).then(()=>{
    //                     // console.log(JSON.stringify(weather));
    //                     console.log("New weather added");
    //                 })
    //           }
    //         // setdxjson(JSON.stringify(dailyData));
    //     })
      
    // }
    // fetch("http://api.openweathermap.org/data/2.5/forecast?q=Moscow &appid=f0decf7fa8b30b2189213f9295f32408&units=metric")
    //         .then(res=>res.json())
    //         .then(data =>{
    //             // alert("hello");
    //             console.log(data);
    //             setTemperature([...temperature, data.list[0].main.temp]);
    //             setDate(data.list[0].dt_txt)
    //         })
    const fetchWather = async()=>{
        try{
            
            // const res = await axios.get(
            //     "http://api.openweathermap.org/data/2.5/forecast?q=Moscow &appid=f0decf7fa8b30b2189213f9295f32408&units=metric"
            // );
            // console.log(res);
            // setTemperature(res.data.list[0].main.temp);
        }catch(err){
            console.error(err);
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    //   {temperature.map((item, i)=>{
    //     // setTemp(item.main.temp);
    //     // setCityName(name);
    //     fetch("http://localhost:8080/weather/add",{
    //         method:"POST",
    //         headers:{"Content-Type":"application/json"},
    //         body:JSON.stringify(item.main.temp, name)
    //         }).then(()=>{
    //             console.log("New city added");
    //         })
    //     }
    // )
    // }
    return (
        <div>
            <h2>Weather Data for {name} on {moment(traveldate).format("DD/MM/YYYY")}</h2>
            <Container>
            {/* <Button variant="outlined" style={{margin:"5%"}} onClick={handleClick}>Get Weather</Button> */}
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
                                Description : {item.weather[0].description}
                            </Item>
                        </Grid>
                    )
                    }
                </Grid>
            </Container>
            <h4>{date}</h4>
        </div>
    )
}
