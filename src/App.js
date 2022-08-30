import { Routes, Route } from "react-router-dom";
import { styled} from '@mui/material/styles';

function App() {
  const classes = useStyles();
  const user = null;
  return (
    <div className={classes.root}>
       <Routes>
        {
          !user ? (<Login />) : (
            <Route path="/profile" element={<Profile />} />,
            <Route path="/checkout" element={<Paypal />} />,
            <Route path="/" element={<Home />} />
          )
        }
      </Routes>
    </div>
  );
}

const useStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh"
  }
}))

export default App;
