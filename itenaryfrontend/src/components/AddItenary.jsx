import * as React from 'react';
import { Button, Container, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate  } from "react-router-dom";

export default function AddItenary() {
    //Declare states for storing information
    const[errortext,seterrortext] = React.useState('');
    const[buten, setbuten] = React.useState(false);
    const[butentext, setbutentext] = React.useState('Save itinerary');

    //Asynchronous process to save itinerary 
    async function saveItenary(itenar){
        
        const url = "http://localhost:8080/itenary/add";
        await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(itenar)
            }).then(()=>{
                console.log("New itenary added");
                seterrortext("");
                setbuten(false);
                setbutentext("Save itinerary");
                navigate('/')
            }).catch((e)=>{
                console.log(e);
                seterrortext("Something happened");
                setbutentext("Save itinerary");
                setbuten(false);
            })
    }
    const[itenaryname,setItenary] = React.useState('');
    
    const paperStyle={padding:'20px 20px', margin: "2% 0% 0% 0%"}
    const navigate = useNavigate();
    //Handle submit button
    const handleClick=(e)=>{
        e.preventDefault()
        if(itenaryname !== ''){
            setbuten(true);
            setbutentext("Saving...")
            const itenar={itenaryname}
            console.log(itenar);
            saveItenary(itenar);
            setItenary("");
        }else{
            alert("Please fill all the fields");
        }
        
    }
    return (
        <div>
            <Container sx={{ textAlign: 'left' }}>
                <Button href="/" style={{margin: "2% 0% 0% 0%"}} underline="none" variant="contained">&lt;&nbsp;back to itineraries</Button>
                <Paper elevation={3} style={paperStyle}>
                    <form noValidate autoComplete="off" style={{margin: "2% 0% 0% 0%"}}>
                        <h3>Add Travel itinerary here</h3>
                        <TextField id="outlined-basic" label="Itenary name" variant="standard" fullWidth
                        value ={itenaryname}
                        
                        onChange={(e)=>setItenary(e.target.value)}
                        />
                        <Button disabled={buten} variant="contained" style={{margin:"2% 0% 0% 0%"}} onClick={handleClick}>{butentext}</Button>
                    </form>
                    {errortext}
                </Paper>
            </Container>
        </div>
    )
}
