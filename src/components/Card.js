import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import Close from '@material-ui/icons/Close';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
};

function SimpleMediaCard({ classes, data, handleCardClose }) {
  console.log(handleCardClose);

  return (
    <div>
      <Card className={classes.card}>
        <Button mini variant="fab" color="primary" aria-label="Add" className={classes.close} onClick={handleCardClose}>
          <Close />
        </Button>
        <CardMedia className={classes.media} image={data.avatar_url} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {data.name}
          </Typography>
          <Typography component="p">{data.bio}</Typography>
          <Typography component="p">{data.company}</Typography>
          <Typography component="p">{data.location}</Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            fullWidth
            size="small"
            color="primary"
            onClick={() => {
              window.open(data['html_url']);
            }}
          >
            Перейти на Git<FaceIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
