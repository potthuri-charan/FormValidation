import axios from 'axios'
import React, { useState } from 'react'
import SvgIcon from '@mui/material/SvgIcon';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Home.css'

export default function Home() {
    const [r,setR]=useState([])

    const getData= async()=>{
        let un=localStorage.getItem("user")
        let result=await axios.get("http://localhost:8080/login/data/"+un)
        setR(result.data)
    }
    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }
  
  return (
    <div>
        <nav>
            <ul>
            <li> <HomeIcon />Home</li>
            <li><InfoIcon/>About</li>
            <li><CallIcon/>Contact</li>
            <li onClick={getData}><AccountCircleIcon/>Profile</li>
            </ul>
        </nav>
        
        {
            r.map((k)=>{
                return <h1>{k.name}</h1>
            })
        }
    </div>
  )
}
