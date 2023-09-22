import {React,useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  let n=useNavigate();
  const change=()=>{
      n('/signup')
  }
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const save = async(e) => {
      e.preventDefault()
      if (uname == "") {
        alert("Please enter your username");
      } else if (pass == "") {
        alert("Please enter your password");
      } else {
        let result=await axios.post("http://localhost:8080/checkdata/"+uname+"/"+pass)
        if(result.data=="Success"){
          n('/home')
          localStorage.setItem("user",uname)
        }
        else{
          alert(result.data)
        }
         
      }
    };
  return (
  <div style={{paddingTop:"200px",paddingLeft:"40%",textAlign:"center"}}>
      <Box
    sx={{
      width: 300,
      height: 300,
    }}
  >
      <Stack spacing={2}>
          <h1>Welcome!    back</h1>
    <TextField id="outlined-basic" label="Username" variant="outlined" value={uname} onChange={(e)=>setUname(e.target.value)} />
    <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <Button variant="contained" onClick={save}>Login</Button>
    <p>Dont have an account <Link style={{cursor:"pointer"}} onClick={change}>Signup</Link></p>
    </Stack>
    </Box>
  </div>
  
)
}
