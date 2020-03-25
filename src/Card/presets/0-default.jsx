import * as React from "react";
import Card from "../Card";
import CardHeader from "../../CardHeader/CardHeader";
import CardMedia from "../../CardMedia/CardMedia";
import CardContent from "../../CardContent/CardContent";
import CardActions from "../../CardActions/CardActions";
import Avatar from "../../Avatar/Avatar";
import Typography from "../../Typography/Typography";
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";

export default (
  <Card uxpId="1">
    <CardHeader
      uxpId="1.1"
      avatar={<Avatar aria-label="Recipe" uxpId="1.1.1">R</Avatar>}
      action={<IconButton uxpId="1.1.2"><Icon uxpId="1.1.2.1">more_vert</Icon></IconButton>}
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia uxpId="1.2"
      image="https://www.platingsandpairings.com/wp-content/uploads/2016/01/Paella-1-Square.jpg"
      style={{"height": "200px"}}
    />
    <CardContent uxpId="1.3">
      <Typography component="p" uxpId="1.3.1">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableActionSpacing uxpId="1.4">
      <IconButton aria-label="Add to favorites" uxpId="1.4.1">
        <Icon uxpId="1.4.1.1">favorite</Icon>
      </IconButton>
      <IconButton aria-label="Share" uxpId="1.4.2">
        <Icon uxpId="1.4.2.1">share</Icon>
      </IconButton>
    </CardActions>
  </Card>
);
