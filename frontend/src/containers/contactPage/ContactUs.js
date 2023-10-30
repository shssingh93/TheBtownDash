import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
            If you have any questions, please fill out the form below and we will get back to you as soon as possible.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="subject"
              label="Subject"
              type="text"
              id="subject"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              rows={6}
              name="message"
              label="Message"
              type="text"
              id="message"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color="primary">
            Address
          </Typography>
          <Typography>
            1234 Your Company Street<br />
            Bloomington, Indiana 12345
          </Typography>
          <Typography variant="h6" color="primary">
            Phone
          </Typography>
          <Typography>(123) 456-7890</Typography>
          <Typography variant="h6" color="primary">
            Email
          </Typography>
          <Typography>hi@example.com</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;