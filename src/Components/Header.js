import React from 'react'
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar>
      Header
      </AppBar>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh"
  }
}))


export default Header