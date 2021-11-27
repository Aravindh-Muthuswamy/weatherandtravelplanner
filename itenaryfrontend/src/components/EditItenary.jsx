import React from 'react'
import { Button, Container, Link, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
export default function EditItenary() {
    const[traveldate,settraveldate] = React.useState('');
    const[cityname, setcityname] = React.useState('');
    const {id} = useParams();
    const count = 0;
    const itenid = id;
    const temp = 10.0;
    const {name} = useParams();
    const paperStyle={padding:'20px 20px'}
    // const marTop = {margin:}
    const handleClick=(e)=>{
        e.preventDefault()
        const city={itenid, cityname, traveldate, temp}
        console.log(city);
        const url = "http://localhost:8080/cities/add";
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(city)
            }).then(()=>{
                console.log("New City added");
            })
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=f0decf7fa8b30b2189213f9295f32408&units=metric`)
            .then(res=>res.json())
            .then((resx)=>{
                const dailyData = resx.list.filter(reading => reading.dt_txt.includes(traveldate))
                localStorage.setItem('rememberMe', JSON.stringify(dailyData));
                // setcityname(name);
                // var cityname = cityname;
                var dxjson = JSON.stringify(dailyData);
                if(dxjson != null && dxjson != 'undefined'){
                    const weather = JSON.stringify({cityname, dxjson});
                      const url = "http://localhost:8080/weather/add";
                      console.log((weather));
                      fetch(url,{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:weather
                        }).then(()=>{
                            // console.log(JSON.stringify(weather));
                            console.log("New weather added");
                        })
                  }
                })
        settraveldate("");
        setcityname("");
        // window.location.reload(false);
        // navigate('/')
    }
    const[cities, setcities] = React.useState([]);
    
    React.useEffect(()=>{
        fetch(`http://localhost:8080/cities/itenid?id=${id}`)
        .then(res=>res.json())
        .then((result)=>{
          setcities(result);
        }
      )
      },[id])
    return (
        <div>
            {/* <h1>iten id: {itenid}</h1> */}
            <h2>{name}</h2>
            <Container>
                <h3>Add Cities to Itenary here</h3>
                <Paper elevation={3} style={paperStyle}>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Itenary Name" variant="outlined" fullWidth
                        value={name} disabled
                        // onChange={(e)=>setItenary(e.target.value)}
                        />
                        <TextField id="outlined-basic" label="City Name" variant="outlined" fullWidth
                        value={cityname}
                        style={{margin:"2% 0% 0% 0%"}}
                        onChange={(e)=>setcityname(e.target.value)}
                        // onChange={(e)=>setItenary(e.target.value)}
                        />
                        <TextField
                            id="date"
                            label="Alarm clock"
                            type="date"
                            defaultValue="07:30"
                            fullWidth
                            style={{margin:"2% 0% 0% 0%"}}
                            value ={traveldate}
                            onChange={(e)=>settraveldate(e.target.value)}
                        />
                        <Button variant="outlined" style={{margin:"5%"}} onClick={handleClick}>Save Itenary</Button>
                    </form>
                    {cityname}<br />
                    {traveldate}
                    <Link href="/" underline="none">Back to Itenary</Link>
                </Paper>
            </Container>
            <Container  style={paperStyle}>
                
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
                                
                                // console.log(itenar)
                                <TableRow>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{itenar.cityname}</TableCell>
                                {/* {moment.locale('en')} */}
                                <TableCell>{moment(itenar.traveldate).format('DD/MM/YYYY')}</TableCell>
                                <TableCell>
                                    <Link href={`/weather/${itenar.id}/${itenar.cityname}/${itenar.traveldate}`}>View Weather</Link>
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
