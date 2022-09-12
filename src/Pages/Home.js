import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Rows from '../Components/Rows'
import requests from '../Requests'
import useStyles from "../Pages/syles";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
const theme = createTheme();
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
        <Header />
        <Banner />
        <Rows title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
        <Rows title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
        <Rows title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
        <Rows title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
        <Rows title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
        <Rows title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
        <Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
        
    </div>

    </ThemeProvider>
    
  )
}

export default Home