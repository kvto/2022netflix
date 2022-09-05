import React from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { NetflixButton } from '../styled/styledcomponents';

const Plans = ({cost, children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant='h5'>
      {children}  
      </Typography>
      <NetflixButton>Suscribe</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    // backgroundColor: "#111",

  }
}))


export default Plans