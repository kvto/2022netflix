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
        minHeight: "100vh",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

      },
      details: {
        width: "100%",
        marginLeft: theme.spacing(),
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
        marginBottom: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
            marginBottom: theme.spacing(4),
            marginRight: theme.spacing(10),
            marginLeft: theme.spacing(10),
        }
      },
      standard: {
        fontSize: "1.2rem"
      },

      rootSign:{
        background: "rgba(0,0,0,65)",
        display: "flex",
        flexDirection: "column",
        opacity: 0.9,
        justifyContent: "space-evenly",
        alignItems: "center",
        "& h5":{
          marginTop: theme.spacing(2),
          width: "70%"
        }
      },
      form: {
        width: "80%"
      },
      email: {
        margin: "20px"
      },
      password: {
        margin: "20px"
      },
      signupLink: {
        color: "#fff",
        cursor: "pointer",
        "& hover": {
          TextDecoderation: "underline",
        }
      },

      rootRows:{
        marginLeft: theme.spacing(4),
      },

      posters: {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar":{
          display: 'none'
        }
      },
      poster: {
        maxHeight: "12rem",
        objectFit: "contain",
        marginRight: theme.spacing(1),
        transition: "transform 450ms",
        "&:hover": {
          transform: "scale(1.1)",
        }
      },
      posterLarge: {
        maxHeight: "15rem",
        "&:hover": {
          transform: "scale(1.15)"
        }
      }
}))