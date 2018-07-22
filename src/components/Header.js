import React from 'react';
import logo from '../logo.svg';
import logo2 from '../material-ui-logo.svg';
import logo3 from '../JSS.png';
import { withStyles } from '@material-ui/core/styles';

// import injectSheet, { jss, ThemeProvider } from 'react-jss';

const styles = theme => ({
  logo: {
    // animation: 'App-logo-spin infinite 20s linear',
    height: 80,
    marginTop: 10,
  },
  logo2: {
    height: 60,
    padding: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 100,
    padding: 20,
    color: 'white',
  },
  '@keyframes App-logo-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  code: {
    fontSize: '1.2em',
  },
});

const Comp = ({ classes }) => (
  <header className={classes.header}>
    <img src={logo} className={classes.logo} alt="logo" />
    <img src={logo2} className={classes.logo2} alt="Material-UI logo" />
    <img src={logo3} className={classes.logo2} alt="JSS logo" />
  </header>
);

const StyledComp = withStyles(styles)(Comp);

const theme = {
  backgroundColor: '#f7df1e',
  color: '#24292e',
};

const Header = () => <StyledComp />;

export default Header;
