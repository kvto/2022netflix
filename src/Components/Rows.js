import React, { useEffect } from 'react'
import { Typography } from '@mui/material';
import { useState } from 'react';
import instance from '../instance';
import useStyles from "../Pages/syles";
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const Rows = ({title, fetchUrl, isLargeRow}) => {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();
  const theme = createTheme();
  const base_url= "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
  const fetchData = async () => {
    const request = await instance.get(fetchUrl)
    setMovies(request.data.results)
    return request
  };
  fetchData();
  }, [fetchUrl])


  return (
    <ThemeProvider theme={theme}>
    <div className={classes.rootRows}>
      <Typography variant='h4'>{title}</Typography>
      <div className={classes.posters}>
        {
            movies.map((movie) =>
            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && (
              <img 
              className={`${classes.poster} ${
                isLargeRow && classes.posterLarge}
              `}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.name}
              />
            )) 
        }
      </div>
    </div>  
    </ThemeProvider>
  )
}

export default Rows