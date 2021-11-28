import * as React from 'react';
import { Button, Container} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Itenary() {
    //Declare states for storing information
    const[itenaries, setItenaries] = React.useState([]);
    const paperStyle={padding:'20px 20px'}
    //Asynchronous process to get itineraries
    async function getValues(){
        await fetch("http://localhost:8080/itenary/getall")
        .then(res=>res.json())
        .then((result)=>{
          setItenaries(result);
        }).catch((e)=>{
            console.log("Something wrong when retrieving data");
        })
    }
    React.useEffect(()=>{
        getValues();
      
      },[])
return (
    <Container  style={paperStyle} sx={{ textAlign: 'left' }}>
        <Button href="/additenar" underline="none" variant="contained">+ Add itinerary</Button>
        <h3  style={{margin: "5% 0% 2% 0%"}}>Saved itineraries</h3>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>SL.NO</TableCell>
                        <TableCell>Itinerary Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>    
                    {itenaries.map((itenar, i)=>(
                        // console.log(itenar)
                        <TableRow key={i}>
                        <TableCell>{itenar.id}</TableCell>
                        <TableCell>{itenar.itenaryname}</TableCell>
                        <TableCell>
                            <Button href={`/edititenary/${itenar.id}/${itenar.itenaryname}`} variant="contained">Add Cities</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
        
);
}
