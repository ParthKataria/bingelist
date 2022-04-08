import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function CardList(props){
    const List=props.movieList;
    return (
        <Box sx={{ flexGrow: 1 }} style={{paddingRight:'20px',paddingTop:'20px',paddingBottom:'20px',paddingLeft:'20px'}} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {List.map((movie)=>{
            console.log(movie)
            return (<Grid item xs={2} sm={4} md={4}>
              <MultiActionAreaCard func={props.add} ops="Add to " name={movie.l} imgu={movie.i.imageUrl} actors={movie.s} key={movie.id} rank={movie.rank} id={movie.id}/>
            </Grid>)
          })}
        </Grid>
      </Box>);
}