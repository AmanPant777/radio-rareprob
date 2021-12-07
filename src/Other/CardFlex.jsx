import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = muiBaseTheme => ({
  card: {
    backgroundColor:'rgba(0,0,0,0.0)',
    margin: 20,
    maxWidth:220,
    width: 220,
    borderRadius:20 ,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.06)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.1)"
    },
    "@media (max-width: 1000px)": {
      width: 200
    },
    "@media (max-width: 768px)": {
      width: 190,
      margin: 10,
    },
    "@media (min-width: 1200px)": {
      width: 200
    },
    "@media (max-width: 458px)": {
      width: 130,
      margin: 0,
    },
  },
  media: {
    paddingTop: "100.25%",
    objectFit: 'cover',
    borderRadius:'50%',
    "@media (max-width: 458px)": {
      width: 100,
      margin: 0,
    },
  },
  content: {
    textAlign: "center",
    padding: muiBaseTheme.spacing.unit * 1,
    "@media (max-width: 768px)": {
      padding: muiBaseTheme.spacing.unit * 1,
    },
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 1}px 0`
  },
  heading: {
    fontWeight: "bold",
    "@media (max-width: 458px)": {
      fontSize:'5px'
    },
  },
  subheading: {
    lineHeight: 1.4,
    "@media (max-width: 488px)": {
      lineHeight:1.2,
      fontSize:5
    },
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


