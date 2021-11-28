import React from 'react'
import { Button, Container, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
export default function EditItenary() {
    //Declare states to store information
    const[traveldate,settraveldate] = React.useState('');
    const[cityname, setcityname] = React.useState('');
    const {id} = useParams();
    const itenid = id;
    const temp = 10.0;
    const {name} = useParams();
    const paperStyle={padding:'20px 20px', margin: "2% 0% 0% 0%"}
    const[errortext,seterrortext] = React.useState('');
    const[buten, setbuten] = React.useState(false);
    const[butentext, setbutentext] = React.useState('Save city to itinerary');
    //Set cache expiry i am using local storage as cache
    function setWithExpiry(key, value, ttl) {
        const now = new Date()
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }
    async function saveValues(url, city){
            await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=f0decf7fa8b30b2189213f9295f32408&units=metric`)
            .then(res=>res.json())
            .then((resx)=>{
                const dailyData = resx.list.filter(reading => reading.dt_txt.includes(traveldate))
                setWithExpiry(cityname, "enabled", 3600000);
                var dxjson = JSON.stringify(dailyData);
                if(dxjson !== null && dxjson !== 'undefined'){
                    const weather = JSON.stringify({cityname, dxjson});
                      const url = "http://localhost:8080/weather/add";
                      console.log((weather));
                      fetch(url,{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:weather
                        }).then(()=>{
                            console.log("New weather added");
                            const url1 = "http://localhost:8080/cities/add"
                            fetch(url1,{
                                method:"POST",
                                headers:{"Content-Type":"application/json"},
                                body:JSON.stringify(city)
                                }).then(()=>{
                                    console.log("New City added");
                                    window.location.reload(false);
                                    setbuten(false);
                                    setbutentext('Save city to itinerary');
                                }).catch((e)=>{
                                    console.log(e);
                                })
                        })
                        
                  }

                  
                }).catch((e)=>{
                    console.log(e);
                    seterrortext("Something happened or no city in the name exists");
                    setbuten(false);
                    setbutentext('Save city to itinerary');
                })
    }
    //Handle Click for submit button
    const handleClick=(e)=>{
        e.preventDefault()
        seterrortext('');
        var today = new Date();
        var varDate = new Date(traveldate);
        varDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        if(cityname !== '' && traveldate !== ''){
            if(varDate >= today){
            const city={itenid, cityname, traveldate, temp}
            console.log(city);
            const url = "";
            setbuten(true);
            setbutentext("Saving...");
            saveValues(url, city);
            settraveldate("");
            setcityname("");
            }else{
                alert("Travel Date should be above today");
                setbuten(false);
                setbutentext('Save city to itinerary');
            }
        }else{
            alert("please fill all the fields");
        }
    }
    const[cities, setcities] = React.useState([]);

    //Get cities    
    React.useEffect(()=>{
        async function getCities(){
            await fetch(`http://localhost:8080/cities/itenid?id=${id}`)
            .then(res=>res.json())
            .then((result)=>{
              setcities(result);
              seterrortext("");
            }).catch((e)=>{
                console.log(e);
                seterrortext("Something happened");
            })
        }
        
        getCities();
      },[id])
    return (
        <div>
            <h2>{name}</h2>
            <Container sx={{ textAlign: 'left' }}>
                <Button href="/" underline="none" variant="contained">&lt;&nbsp;back to itineraries</Button>
                <Paper elevation={3} style={paperStyle}>
                    <h3>Add Cities to Itenary here</h3>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="City Name" variant="standard" fullWidth
                        value={cityname}
                        style={{margin:"2% 0% 0% 0%"}}
                        onChange={(e)=>setcityname(e.target.value)}
                        />
                        <TextField
                            id="date"
                            type="date"
                            fullWidth
                            style={{margin:"2% 0% 0% 0%"}}
                            value ={traveldate}
                            variant="standard"
                            onChange={(e)=>settraveldate(e.target.value)}
                        />
                        <Button disabled={buten} variant="contained" style={{margin:"5% 0% 2% 0%"}} onClick={handleClick}>{butentext}</Button><br />
                        {errortext}
                    </form>
                    
                </Paper>
            </Container>
            <Container>
                
                <h3>Saved Cities</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SL.NO</TableCell>
                                <TableCell>City Name</TableCell>
                                <TableCell>Travel Date</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>   
                             
                            {cities.map((itenar, i)=>(
                                <TableRow key={i}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{itenar.cityname}</TableCell>
                                <TableCell>{moment(itenar.traveldate).format('DD/MM/YYYY')}</TableCell>
                                <TableCell>
                                    <Button href={`/weather/${itenar.id}/${itenar.cityname}/${itenar.traveldate}`} variant="contained">View Weather</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}
