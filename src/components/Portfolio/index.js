import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Dbz from "./images/DBZ.jpg";
import Gif from "./images/gif.jpg";
import Click from "./images/clickgame.png";
import Train from "./images/train.jpg";
import Trivia from "./images/trivia.jpg"
import "./portfolio.css"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    flexGrow: 1,
  }
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Game" className={classes.avatar}>
                DBZ
              </Avatar>
            }
            action={<IconButton aria-label="Settings" />}
            title="DBZ Hangman"
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image={Dbz}
            title="DBZ Hangman"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Dragon Ball Z themed word guess game. Guess a random letter to try and figure out the name of the Character.
            </Typography>
            <br/>
            <a href="https://jp172010.github.io/wordGuessGame/"><button>Play Now!</button></a>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Game" className={classes.avatar}>
                
              </Avatar>
            }
            action={<IconButton aria-label="Settings" />}
            title="DBZ Memory Game"
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image={Click}
            title="DBZ Memory Game"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Memorization game where the player attempts to click each image only once.
            </Typography>
            <br/>
            <a href="https://clickygamejp17.herokuapp.com/"><button>Play Now!</button></a>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Game" className={classes.avatar}>
                DBZ
              </Avatar>
            }
            action={<IconButton aria-label="Settings" />}
            title="DBZ Trivia"
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image={Trivia}
            title="DBZ Trivia"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Dragon Ball Z themed trivia game. Only the most elite fans will score 100%.
            </Typography>
            <br/>
            <a href="https://jp172010.github.io/TriviaGame/"><button>Play Now!</button></a>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Tool" className={classes.avatar}>
                GIF
              </Avatar>
            }
            action={<IconButton aria-label="Settings" />}
            title="Gif Off With Giphy"
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image={Gif}
            title="Gif Off With Giphy"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Looking for the coolest gifs? Look no further! Just enter a search, and see the top 10 Gifs of that subject.
            </Typography>
            <br/>
            <a href="https://jp172010.github.io/gifSearch/"><button>Check It Out!</button></a>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Tool" className={classes.avatar}>
                TT
              </Avatar>
            }
            action={<IconButton aria-label="Settings" />}
            title="Train Time"
            subheader=""
          />
          <CardMedia
            className={classes.media}
            image={Train}
            title="Train Time"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            Train scheduler. Check arrivals/departures now! Or schedule your own Train :)
            </Typography>
            <br/>
            <a href="https://jp172010.github.io/trainTime/"><button>Check It Out!</button></a>
          </CardContent>
        </Card>
        </Grid>
      </Grid>
    </div>
  );
}
