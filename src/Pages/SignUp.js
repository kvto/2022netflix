import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents'
import useStyles from "../Pages/syles"
import firebaseApp from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useHistory } from 'react-router-dom';
const auth = getAuth(firebaseApp)


const SignUp = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).
    then((authUser)=> history.push("/"))
    .catch(err=>alert(err.message))
  }

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser)=> history.push("/"))
    .catch(err=>alert(err.message))
  }

  return (
    <div className={classes.rootSign}>
      <Typography variant='h5' align='left'>
         SignUp
      </Typography>
      <form className={classes.form}>
        <NetflixInput 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email' 
        type="email"
        className={classes.email}/>

        <NetflixInput 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' 
        type="password"
        className={classes.password}/>

        <NetflixButton onClick={signIn}
        type="submit"
        wide='medium'>Sign In</NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix ?{" "}
          <span 
          className={classes.signupLink} 
          onClick={register}>
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
      </div>
  )
}



export default SignUp