import { Router, Route, Switch} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Login from "./Pages/Login";
import {login, logout, selectUser} from "../src/features/counter/UserSlice"
import Profile from "./Pages/Profile";
import Paypal from "./Pages/Paypal";
import firebaseApp from './firebase';
import Home from "./Pages/Home";
import {getAuth} from "firebase/auth"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const auth = getAuth(firebaseApp)

function App() {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        return unsubscribe;
      }
      else {
        dispatch(logout())
      }
    })
  }, [dispatch])


  return (
    <div className={classes.root}>
       <Router history={history}>      
          <Switch>
          <Route path='/login'> 
            <Login />
           </Route>
           <Route path='/profile'> 
            <Profile />
           </Route>
           <Route path='/checkout'> 
            <Paypal />
           </Route>
           <Route path='/'> 
            <Home />
           </Route>
          </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: "#3333",
    minHeight: "100vh"
  
  }
}))

export default App;
