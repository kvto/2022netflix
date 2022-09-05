import React from 'react'
import { makeStyles } from '@mui/styles';
import banne from  '../imagenes/HeaderBanner.jpg';
import { Button, Typography } from '@mui/material';

const Banner = () => {
    const classes = useStyles();
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...`: string

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1" style={{color:"#990099"}}>
          Movie Title
        </Typography>
        <div className={classes.buttons}>
          <Button style={{color:"black"}}>Play</Button>
          <Button style={{color:"black"}}>My List</Button>
        </div>
        <Typography variant="h6" className={classes.description} style={{color:"black", wordWrap: "break-word"}}>
          {
            truncate("Movie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie DescriptionMovie Description", 80)
          }
          
        </Typography>
        <div className={classes.fadeBottom}>
        </div>
      </div>
      </div>
  )
}


const useStyles = makeStyles((theme) =>({
    root: {
      // backgroundColor: "#111",
      backgroundImage: `url(${banne})`,
      opacity: 0.8,
      height: "550px",
      position: "relative",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    buttons: {
      "& button": {
        cursor: "pointer",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "5px",

        marginRight: "1rem",
        backgroundColor: "rgba(51,51,51,0.5)",
      },
      "& button:hover":{
        color: "#000",
        backgroundColor: "#e6e6e6"
      }
    },
    fadeBottom: {
      position: "absolute",
      top: "30vh",
      bottom: 0,
      left: 0, 
      right: 0, 
      zIndex: 99,
      backgroundImage: 
      "linear-gradient(160deg, transparent, rgba(37,37,37,0.61), #f0e0e3)",
    }
  }))

  
export default Banner