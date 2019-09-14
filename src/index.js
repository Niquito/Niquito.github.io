import React from 'react';
import { render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.paper}>Resumen</Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={3}>
          	<Grid item xs={12}>
	          <Paper className={classes.paper}><WorkIcon></WorkIcon>xs=12 sm=6</Paper>
	        </Grid>
	        <Grid item xs={12}>
	          <Paper className={classes.paper}>xs=12 sm=6</Paper>
	        </Grid>
	        <Grid item xs={12}>
	          <Paper className={classes.paper}>xs=12 sm=6</Paper>
	        </Grid>
	      </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

render (<Layout />, document.getElementById("root"))