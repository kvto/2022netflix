import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
export default makeStyles(() => ({

    info: {
        width: "80%",
        display: "flex",
        "& img": {
            height: "100px",
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        }
    },
    root:{
        color: "#990099",
        minHeight: "100vh",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

      },
      details: {
        width: "100%",
        marginLeft: theme.spacing(3),
        "& h6":{
            backgroundColor: "yellow",
            padding: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontSize: "18px"
        }
      },
      plans:{
        width: "100%"
      },

      plansText: {
        borderBottom: "1px solid blue"
      },

      rooplans:{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginRight: theme.spacing(5),
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
            marginBottom: theme.spacing(4),
        }
      }

    
}))