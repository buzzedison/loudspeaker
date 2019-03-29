import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import game from "./game.jpg";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 180
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Reviews"
          className={classes.media}
          image={game}
          title="Movie Reviews"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Movie Reviews from 28th April, 2019
          </Typography>
          <Typography component="p">
            In less than 30 days you will be able to review Movies, TV shows and
            documentaries on our website.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
