import React from 'react'
import { Typography } from '@mui/material';
import Header from '../Components/Header';
import profi from '../imagenes/profile.png';
import Plans from '../Components/Plans'
import { NetflixButton } from '../styled/styledcomponents';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import useStyles from "../Pages/syles"


const Profile = () => {
  const theme = createTheme();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <div className={classes.root}>
      <Typography variant='h3'>Edit Profile</Typography>
      <div className={classes.body}>
       <div className={classes.info}>
      <img src={profi} alt='avatar' />
      <div className={classes.details}>
        <div className={classes.plans}>
            <Typography variant='h6'>
              email usuario
            </Typography>
            <Typography variant='h5' gutterBottom className={classes.plansText}> Plans</Typography>
            <Plans cost={7.99}> Netflix standard  </Plans>
            <Plans cost={11.99}> Netflix Basic  </Plans>
            <Plans wide="medium" color= "gray" cost={14.99}> Netflix Premium  </Plans>
            <NetflixButton wide='fullWidth'>Sign Out</NetflixButton>
        </div>
      </div>
      </div> 
      </div>
    </div>  
    </ThemeProvider>
    
  )
}


export default Profile