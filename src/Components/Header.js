import React from 'react'
import { makeStyles } from '@mui/styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div>Header</div>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh"
  }
}))


export default Header