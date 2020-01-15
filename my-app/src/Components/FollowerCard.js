import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './FollowerCard.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 5,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const { followers } = props;
  // console.log(props)

  return (
    <div className="Follower">
      {followers.map(follower => (
        <Card className={classes.card}>
          <CardActionArea>
            <img width="150" src={follower.avatar_url} alt='follower-img' />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {follower.login}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {follower.html_url}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
