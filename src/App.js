import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Start from './components/start';
import Card from './components/Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minWidth: 313,
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Start />
      <Grid container spacing={24} alignItems={'center'} direction={'column'}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <TextField id="search" label="Search field" type="search" className={classes.textField} margin="normal" />
            <Button variant="outlined" color="primary" className={classes.button}>
              Найти
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
