import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import instance from '../instance';
import requests from '../Requests'

const Banner = () => {
    const classes = useStyles();
    const [movie, setMovie] = useState([]);
    const truncate = (string, n) => string?.length > n ? `${string.substr(0, n-1)}...`: string

    useEffect(() => {
      const fetchData = async () =>{
    const request = await instance.get(requests.fetchNetflixOriginals)
    const random = Math.floor(Math.random() * request.data.results.length -1)
    setMovie(request.data.results[random])
    return request
      }
      fetchData();
    }, [])
  return (
    <div className={classes.root} style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      position: "relative",
      height: "440px",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff"
    }}>
      <div className={classes.content}>
        <Typography variant="h2" component="h1" style={{color:"#990099"}}>
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button style={{color:"black"}}>Play</Button>
          <Button style={{color:"black"}}>My List</Button>
        </div>
        <Typography variant="h6" className={classes.description} style={{color:"#990099", wordWrap: "break-word"}}>
          {
            truncate(movie?.overview, 80)
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
    }
  }))

  
export default Banner