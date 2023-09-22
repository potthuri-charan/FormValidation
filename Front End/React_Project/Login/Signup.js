import {React, useState }from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    let n=useNavigate();
   
    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const change=()=>{
        n('/')
            
    }
    const save = async(e) => {
      e.preventDefault()
      if (uname == "") {
        alert("Please enter your username");
      } else if (email == "") {
        alert("Please enter your email");
      } else if (pass == "") {
        alert("Please enter your password");
      } else {
        let mydat={
            username:uname,
          emailid:email,
          password:pass
        }
        let result=await axios.post("http://localhost:8080/postdata",mydat)
        if(result.data=="added"){
            n('/')
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
            <h1>Signup</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined"  value={uname} onChange={(e) => setUname(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange={(e) => setPass(e.target.value)}/>
      <Button variant="contained" onClick={save}>Signup</Button>
      <p>Already have an account <Link style={{cursor:"pointer"}} onClick={change}>Login</Link></p>
      </Stack>
      </Box>
    </div>
    
  )
}
