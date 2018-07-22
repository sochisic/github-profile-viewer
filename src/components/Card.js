import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import FaceIcon from './Faceicon';
import FaceIcon from '@material-ui/icons/Face';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    justifyContent: 'center',
  },
};

function SimpleMediaCard({ classes, data }) {
  return (
    <div>
      <Card className={classes.card}>
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
