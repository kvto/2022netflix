import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import logo from '../imagenes/logo.png';
import SignUp from '../Pages/SignUp';
import banne from  '../imagenes/HeaderBanner.jpg';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [signIn, setSignIn] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <IconButton>
        <img onClick={()=> history.push("/")} src={logo} alt="logo" className={classes.image}/>  
        </IconButton>
       <NetflixButton className={classes.session}> Iniciar sesion</NetflixButton>
      </Toolbar>
        <div className={classes.info}>
          {
            !signIn ? (<SignUp />) :(
              <>
          <Typography variant='h4' gutterBottom>
            Unlimited films, TV programmes and more.
          </Typography>
          <Typography variant='h5'>
            Watch anywhere, Cancel at any time.
          </Typography>
          <Typography variant='h6'>
            Ready to watch ? Enter your email to create or restart your
            membership.
          </Typography>
          <div className={classes.inputBlock}>
          <NetflixInput />
          <NetflixButton>Get Started</NetflixButton>
          </div>              
          </>
            )} 
        </div>
    </div>
  )
}


const useStyles = makeStyles((theme) =>({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${banne})`,
    opacity: 0.8,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  image: {
    position: "fixed",
    top: 0, 
    left: 20,
    width: "150px",
    cursor: "pointer"
  },
  session:{
    position: "relative",
    left: 0, 
      right: 0, 
      xIndex: 99,
      top: 40,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info:{
    color: "#990099",
    zIndex: 15,
    textAlign: "center",
    marginTop: 190,
      "& h4":{
        fontWeight: 800,
      },
      "& h5": {
        fontWeight: 400,
      }
  }
}))


export default Login