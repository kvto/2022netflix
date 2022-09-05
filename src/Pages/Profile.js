import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Header from '../Components/Header';
import profi from '../imagenes/profile.png';
import Plans from '../Components/Plans'
import { NetflixButton } from '../styled/styledcomponents';
import { createTheme, ThemeProvider  } from '@mui/material/styles';




const Profile = () => {
  const theme = createTheme();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Edit Profile</Typography>
      <div className={classes.body}>
       <div className={classes.info}>
      <img src={profi} alt='avatar' />
      <div className={classes.details}>
        <div className={classes.plans}>
            <Typography variant='h6'>
              email usuario
            </Typography>
            <Typography variant='h5' gutterBottom> Plans</Typography>
            <Plans cost={7.99}> Netflix standard</Plans>
            <Plans cost={11.99}> Netflix Basic</Plans>
            <Plans cost={14.99}> Netflix standard</Plans>
            <NetflixButton>Sign Out</NetflixButton>
        </div>
      </div>
      </div> 
      </div>
    </div>  
    </ThemeProvider>
    
  )
}

const useStyles = makeStyles((theme) =>({
  root:{
    color: "#990099",
    minHeight: "100vh",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  
}))
export default Profile