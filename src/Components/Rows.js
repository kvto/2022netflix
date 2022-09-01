import React from 'react'
import { makeStyles } from '@mui/styles';

const Rows = () => {
  const classes = useStyles();
  return (
    <div>Rows</div>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh"
  }
}))

export default Rows