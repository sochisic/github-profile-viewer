import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  card: {
    margin: 50,
  },
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  state = {
    value: '',
    isLoading: false,
    userData: null,
  };

  componentWillMount() {
    this.setState({ isLoading: true });

    console.log(
      JSON.stringify({
        Authorization: 'Token token=cf4bd909fb411b8210f7dff87db1713da28649cd',
      }),
    );

    let getDefaultUser = () =>
      fetch('http://api.github.com/users/sochisic')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          return json;
        })
        .catch(e => console.log(`getDefaultUser Promise: ${e}`));

    const getData = async () => {
      try {
        let data = await getDefaultUser();
        return data;
      } catch (e) {
        console.log(`Kek err ${e}`);
      }
    };

    getData()
      .then(data => {
        console.log(data);
        this.setState({
          userData: data,
          isLoading: false,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  getUser(user) {
    let getUser = user =>
      fetch(`http://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          return json;
        })
        .catch(e => console.log(`getDefaultUser Promise: ${e}`));

    const getData = async () => {
      try {
        let data = await getUser(user);
        return data;
      } catch (e) {
        console.log(`Kek err ${e}`);
      }
    };
  }

  handleClick() {
    const { value } = this.state;
    console.log('click!', value);

    console.log(this.getUser(value));
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    const { isLoading, userData } = this.state;

    return (
      <div className={classes.root}>
        <Start />
        <Grid container spacing={24} alignItems={'center'} direction={'column'}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                id="search"
                label="Search git user"
                type="search"
                className={classes.textField}
                margin="normal"
                onChange={this.handleChange}
              />
              <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClick}>
                Найти
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            {isLoading ? <CircularProgress className={classes.card} /> : <Card data={userData || {}} />}
          </Grid>
        </Grid>
      </div>
    );
  }
}

// function FullWidthGrid(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Start />
//       <Grid container spacing={24} alignItems={'center'} direction={'column'}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>
//             <TextField id="search" label="Поиск тут" type="search" className={classes.textField} margin="normal" />
//             <Button variant="outlined" color="primary" className={classes.button}>
//               Найти
//             </Button>
//           </Paper>
//         </Grid>
//         <Grid item xs={8}>
//           <Card />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// FullWidthGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(FullWidthGrid);
export default withStyles(styles)(Form);
