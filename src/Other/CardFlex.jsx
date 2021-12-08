import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const style = {
  padding: '12px',
  // Adding media querry..
  '@media (max-width: 500px)': {
   
  },
};
const styleHeading = {
  marginTop: '10px',
 
  // Adding media querry..
  '@media (max-width: 500px)': {
    fontSize: '10px',
  },
};
const styleHeading1 = {
  marginTop: '0',
 fontSize:'17px',
 fontWeight:'bold',
  // Adding media querry..
  '@media (max-width: 500px)': {
    fontSize: '10px',
  },
};



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
      width: 110,
      margin: 0,
      marginLeft:'10px'
    },
  },
  media: {
    paddingTop: "100.25%",
    objectFit: 'cover',
    borderRadius:'50%',
    "@media (max-width: 768px)": {
      width: 150,
      marginLeft: '10px',
    },
    "@media (max-width: 458px)": {
      height: 50 ,
      width: 100,
    },
  
  },
  content: {
    textAlign: "center",
    padding:0,
    
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
    lineHeight: 1.1,
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
        <CardContent className={classes.content} style={style}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
           style={styleHeading1}
          >
            {title}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
            style={styleHeading}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export const WrappedApp = withStyles(styles)(CardFlex);


