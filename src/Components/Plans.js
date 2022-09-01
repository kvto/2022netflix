import React from 'react'
import { makeStyles } from '@mui/styles';

const Plans = () => {
  const classes = useStyles();
  return (
    <div>Plans</div>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh"
  }
}))


export default Plans