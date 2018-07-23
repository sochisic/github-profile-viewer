import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Header from './components/Header';
import Card from './components/Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
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
  card: {
    margin: 50,
  },
  intro: {
    fontSize: 'large',
    textAlign: 'center',
  },
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleCardClose = this.handleCardClose.bind(this);
  }

  state = {
    value: '',
    isLoading: false,
    userData: null,
  };

  getUser(user) {
    this.setState({
      isLoading: true,
      errorMessage: null,
      userData: null,
    });

    let getUser = user =>
      fetch(`http://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => data)
        .catch(e => e);

    const getData = async () => {
      try {
        let data = await getUser(user);
        return data;
      } catch (e) {
        throw new Error(e);
      }
    };

    getData()
      .then(data => {
        if (data.message) {
          this.setState({
            isLoading: false,
            errorMessage: data.message,
          });
        }
        if (!data.message) {
          this.setState({
            isLoading: false,
            userData: data,
          });
        }
      })
      .catch(e => {
        console.log(e.message, 'Похоже такого пользователя нет');
      });
  }

  handleClick() {
    const { value } = this.state;
    this.getUser(value);
  }

  handleChange({ target: { value } }) {
    this.setState({
      value: value,
    });
  }

  handleCardClose() {
    this.setState({
      value: '',
      isLoading: false,
      userData: null,
      errorMessage: null,
    });
  }

  render() {
    const { classes } = this.props;
    const { isLoading, userData, errorMessage } = this.state;

    return (
      <div className={classes.root}>
        <Header />
        <Grid container spacing={24} alignItems={'center'} direction={'column'}>
          <Grid item xs={12}>
            <p className={classes.intro}>
              Проверим есть ли ты на <code className={classes.code}>Github</code>.
            </p>
            <Paper className={classes.paper}>
              <TextField
                id="search"
                label="Search git user"
                type="search"
                className={classes.textField}
                margin="normal"
                onChange={this.handleChange}
                value={this.state.value}
              />
              <Button
                variant="outlined"
                color="primary"
                disabled={!this.state.value}
                className={classes.button}
                onClick={this.handleClick}
              >
                Найти
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            {userData ? <Card data={userData} handleCardClose={this.handleCardClose} /> : null}
            {isLoading ? <CircularProgress className={classes.card} /> : null}
            {errorMessage ? <Typography component="p">{errorMessage}</Typography> : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Form);
