import * as React from 'react';
import { Button, Container, Link, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate  } from "react-router-dom";

export default function AddItenary() {
    const[itenaryname,setItenary] = React.useState('');
    const paperStyle={padding:'20px 20px'}
    const navigate = useNavigate();
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
        setItenary("");
        // navigate('/')
    }
    return (
        <div>
            <Container>
                <h3>Add Travel Itenary here</h3>
                <Paper elevation={3} style={paperStyle}>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Itenary name" variant="outlined" fullWidth
                        value ={itenaryname}
                        onChange={(e)=>setItenary(e.target.value)}
                        />
                        <Button variant="outlined" style={{margin:"5%"}} onClick={handleClick}>Save Itenary</Button>
                    </form>
                    <Link href="/" underline="none">Back to Itenary</Link>
                </Paper>
            </Container>
        </div>
    )
}
