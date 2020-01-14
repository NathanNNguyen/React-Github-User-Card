import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const { infos } = props;
  // console.log(props)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img width="200" src={infos.avatar_url} alt='user-img' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {infos.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {infos.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {infos.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Followers: {infos.followers}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Following: {infos.following}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {infos.html_url}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
