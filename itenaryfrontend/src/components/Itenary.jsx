import * as React from 'react';
import { Container, Link} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Itenary() {
    
    const[itenaries, setItenaries] = React.useState([]);
    const paperStyle={padding:'20px 20px'}
    
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
        
        <h3>Saved itenaries</h3>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>SL.NO</TableCell>
                        <TableCell>Itenary Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>    
                    {itenaries.map(itenar=>(
                        // console.log(itenar)
                        <TableRow>
                        <TableCell>{itenar.id}</TableCell>
                        <TableCell>{itenar.itenaryname}</TableCell>
                        <TableCell>
                            <Link href={`/edititenary/${itenar.id}/${itenar.itenaryname}`}>Add Cities</Link>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
        
);
}
