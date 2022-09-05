import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import { Avatar, IconButton, Toolbar } from '@mui/material';
import logo from '../imagenes/logo.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const user = null;

  const handleAuthProfile = () =>{
      navigate("/profile");

  }

  const handleAuthHome = () =>{
    navigate("/");

}

  return (
    <AppBar position='sticky' elevation={0} 
    style={{top:0, left:0, right:0, height: "70px",background: 'transparent', boxShadow: 'none'}}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={handleAuthHome}>
        <img src={logo} alt="logo" className={classes.image}/>  
        </IconButton>
        <strong>
          {user ? "Sign Out" : <Avatar variant="square" style={{cursor: "pointer"}}
          onClick={handleAuthProfile}/>
          }
    </strong>
    
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: "red",
    top: 0,
    left: 0,
    right: 0,
  }, 
  transparent:{
    backgroundColor: "transparent"
  },
  image: {
    width: "80px",
    cursor: "pointer"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}))


export default Header