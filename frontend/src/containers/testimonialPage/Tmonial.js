import React from 'react';
import {
  makeStyles,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 'auto',
  },
}));

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Example Company',
    avatar: 'https://via.placeholder.com/150',
    content: 'This service is amazing! It has completely changed the way we manage deliveries.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Manager, XYZ Corporation',
    avatar: 'https://via.placeholder.com/150',
    content: "I've been using this service for months now and it's been a game-changer for my business. The customer support is fantastic and the platform is easy to use.",
  },
  {
    name: 'Tom Johnson',
    role: 'Owner, Johnson Enterprises',
    avatar: 'https://via.placeholder.com/150',
    
    content: "I was skeptical at first, but after trying this service out, I can say without a doubt that it's one of the best decisions I've made for my business. The features are comprehensive and the pricing is reasonable. Highly recommended.",
    
  },
  // Add more testimonials objects here
];

function Testimonials() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container justify="center" spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index}>
            <Card className={classes.card}>
              <CardContent>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.avatar}
                  className={classes.avatar}
                />
                <Typography variant="h6" align="center">
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {testimonial.role}
                </Typography>
                <Typography variant="body1" align="center">
                  {testimonial.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
