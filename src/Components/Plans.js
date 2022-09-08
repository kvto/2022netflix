import React from 'react'
import { Typography } from '@mui/material';
import { NetflixButton } from '../styled/styledcomponents';
import useStyles from "../Pages/syles"

const Plans = ({cost, children, color, wide}) => {

  const classes = useStyles();
  return (

    <div className={classes.rooplans}>
      <Typography variant='h5' style={{fontSize: "1.2rem"}}>
      {children}  
      </Typography>
      <NetflixButton color={color} wide={wide}>Suscribe</NetflixButton>
    </div>  

    
  )
}




export default Plans