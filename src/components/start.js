import React from 'react';
import logo from '../logo.svg';
import logo2 from '../material-ui-logo.svg';
import logo3 from '../JSS.png';

import injectSheet, { jss, ThemeProvider } from 'react-jss';

console.log(jss.version);

const styles = theme => ({
  App: {
    textAlign: 'center',
  },
  'App-logo': {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80,
  },
  'App-logo2': {
    height: 60,
    padding: 20,
  },
  'App-header': {
    backgroundColor: '#fff',
    height: 150,
    padding: 20,
    color: 'white',
  },
  'App-intro': {
    fontSize: 'large',
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
  <div className={classes.App}>
    <header className={classes['App-header']}>
      <img src={logo} className={classes['App-logo']} alt="logo" />
      <img src={logo2} className={classes['App-logo2']} alt="Material-UI logo" />
      <img src={logo3} className={classes['App-logo2']} alt="JSS logo" />
    </header>
    <p className={classes['App-intro']}>
      Проверим есть ли ты на <code className={classes.code}>Github</code>.
    </p>
  </div>
);

const StyledComp = injectSheet(styles)(Comp);

const theme = {
  backgroundColor: '#f7df1e',
  color: '#24292e',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledComp />
  </ThemeProvider>
);

export default App;