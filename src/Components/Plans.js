import React from 'react'
import { Typography } from '@mui/material';
import { NetflixButton } from '../styled/styledcomponents';
import useStyles from "../Pages/syles"
import {setPrice} from '../features/counter/priceSlice'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Plans = ({cost, children, color, wide}) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (cost) => {
    dispatch(setPrice(cost))
    history.push("/checkout")
  }
  return (

    <div className={classes.rooplans}>
      <Typography variant='h5' style={{fontSize: "1.2rem"}}>
      {children}  
      </Typography>
      <NetflixButton 
      color={color} 
      wide={wide}
      onClick={()=> handleClick(cost)}
      >Suscribe</NetflixButton>
    </div>  

    
  )
}




export default Plans