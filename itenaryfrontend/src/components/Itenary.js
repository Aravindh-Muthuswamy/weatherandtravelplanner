import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Itenary() {
    const[itenaryname,setItenary] = React.useState('');
    const[itenaries, setItenaries] = React.useState([]);
    const paperStyle={padding:'20px 20px', width: "500px"}
    const handleClick=(e)=>{
        e.preventDefault()
        const itenar={itenaryname}
        console.log(itenar);
        const url = "http://localhost:8080/itenary/add";
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(itenar)
            }).then(()=>{
                console.log("New itenary added");
            })
    }
    React.useEffect(()=>{
        fetch("http://localhost:8080/itenary/getall")
        .then(res=>res.json())
        .then((result)=>{
          setItenaries(result);
        }
      )
      },[])
return (
    <Container  style={paperStyle}>
        <h3>Add Travel Itenary here</h3>
        <Paper elevation={3} style={paperStyle}>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Itenary name" variant="outlined" fullWidth
                value ={itenaryname}
                onChange={(e)=>setItenary(e.target.value)}
                />
                <Button variant="outlined" style={{margin:"5%"}} onClick={handleClick}>Save Itenary</Button>
            </form>
        </Paper>
        <h3>Saved itenaries</h3>
        {itenaries.map(itenar=>(
            // console.log(itenar)
            
            <Paper elevation={3} style={{padding: "5% 5% 5% 5%", margin: "5% 5% 5% 5%"}} key={itenar.id}>
             id:{itenar.id}<br />
             itenary name:{itenar.itenaryname}
            </Paper>

        ))}
        
    </Container>
        
);
}
