import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const styles = muiBaseTheme => ({
  card: {
    margin: 20,
    width: 420,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    "@media (max-width: 1000px)": {
      width: 250
    },
    "@media (max-width: 768px)": {
      width: 190,
      margin: 0,
    },
    "@media (min-width: 1200px)": {
      width: 400
    },
    "@media (max-width: 458px)": {
      width: 150
    },
  },
  media: {
    paddingTop: "100.25%",
    objectFit: 'cover'
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
    "@media (max-width: 768px)": {
      padding: muiBaseTheme.spacing.unit * 1,

    },
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold",

  },
  subheading: {
    lineHeight: 1.8
  },

});

function CardFlex({ classes, imageUrl, title, text }) {
  return (
    <div className="App">
      <Card className={`${classes.card} cards`}>
        <CardMedia
          className={classes.media}
          image={
            imageUrl
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export const WrappedApp = withStyles(styles)(CardFlex);

