import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  function handleClick()
  {
    console.log("Clicked");
    // console.log(props.func);
    // props.ops==="Remove from"?props.func(props.id):null;
    if(props.ops==="Remove from")
      props.func(props.id);
    else 
      props.func({l:props.name,id:props.id,i:{imageUrl:props.imgu},s:props.actors,rank:props.rank});
  }
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea style={{paddingRight:'20px',paddingTop:'20px',paddingBottom:'20px',paddingLeft:'20px'}}>
        <CardMedia
          component="img"
          height="140"
          src={props.imgu}
          alt="Get some internet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actors:{props.actors}
          </Typography>
          <Typography variant="body2" color="text.secondary">Rank:{props.rank}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          {props.ops} Watchlist
        </Button>
      </CardActions>
    </Card>
  );
}
