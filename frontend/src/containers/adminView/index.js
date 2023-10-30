import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core'; 
import NavBar from '../../components/admin/NavBar'
import Grid from '../../components/admin/Grid'
import { Footer } from '../../components/footer'
import { Link } from "react-router-dom";

//changes to imports 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';

// import your video file 
import video from '../../videos/video1.mp4';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  videoContainer: {
    position: 'relative',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
  buttonContainer: {
    paddingTop: '20rem',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '2rem',
    padding: '1rem 2rem',
    borderRadius: '30px',
    margin: '1rem',
  }
})

export function AdminHome(props){
    const classes = styles(); 

  return (
    <div className="App">
      
      <ThemeProvider theme={theme}>
        <NavBar/>
        <video autoPlay muted loop id="bg-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className={classes.buttonContainer}>
        
        <Button href="/about" className={classes.button} variant="contained">
          Learn More
        </Button>
        <Button component={Link} to="/contact" className={classes.button} variant="contained">
          Contact Us
        </Button>

        </div>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            At B-Town Dash, we make delivery management simple.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<ShoppingCartIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Orders" btnTitle="Show me More" />
          <Link to="/customer-details" style={{textDecoration: 'none'}}>
          <Grid icon={<PeopleIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Customers" btnTitle="Show me More"/>
          </Link>
          <Link to="/delivery-details" style={{textDecoration: 'none'}}>
          <Grid icon={<LocalShippingIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Deliveries" btnTitle="Show me More"/>
          </Link>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<DriveEtaIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Vehicles/Drivers" btnTitle="Show me More"/>
          <Grid icon={<SettingsIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Settings" btnTitle="Show me More"/>
          <Grid icon={<WorkIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Employees" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}
