import React from 'react'
import { Typography } from '@mui/material';
import { NetflixButton } from '../styled/styledcomponents';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import useStyles from "../Pages/syles"

const Plans = ({cost, children}) => {
  const theme = createTheme();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.rooplans}>
      <Typography className={classes.standard} variant='h5'>
      {children}  
      </Typography>
      <NetflixButton>Suscribe</NetflixButton>
    </div>  
    </ThemeProvider>
    
  )
}




export default Plans