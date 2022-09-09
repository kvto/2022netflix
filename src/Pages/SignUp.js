import { Typography } from '@mui/material'
import React from 'react'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents'
import useStyles from "../Pages/syles"


const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootSign}>
      <Typography variant='h5' align='left'>
         SignUp
      </Typography>
      <form className={classes.form}>
        <NetflixInput placeholder='Email' className={classes.email}/>
        <NetflixInput placeholder='Password' className={classes.password}/>
        <NetflixButton wide='medium'>Sign In</NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{" "}
          <span className={classes.signupLink} >
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
      </div>
  )
}



export default SignUp