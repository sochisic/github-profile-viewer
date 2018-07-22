import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import SvgIcon from '@material-ui/core/SvgIcon';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit,
  },
  iconHover: {
    margin: theme.spacing.unit,
    '&:hover': {
      color: red[800],
    },
  },
});

function SvgIcons({ classes }) {
  return (
    <div className={classes.root}>
      <FaceIcon className={classes.icon} color="primary" />
    </div>
  );
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);
