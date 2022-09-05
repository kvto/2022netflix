import { Routes, Route } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Paypal from "./Pages/Paypal";
import Home from "./Pages/Home";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Routes>
        
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />} />,
        <Route path="/checkout" element={<Paypal />} />,
        <Route path="/" element={<Home />} />
          
      </Routes>
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
