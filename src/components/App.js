import React,{useState,useEffect} from "react";
import CardList from "./CardList";
import {MDBContainer,MDBNavbar} from 'mdb-react-ui-kit';
import MyList from "./MyList";
import API_KEY from  "../apikey";
function App() {
  const [item,setItem]=useState("Avengers");
  const [searchbar,setSearchbar]=useState("");
  const [movies,setMovies]=useState([{i: {height: 2048, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', width: 1382},
  id: "tt4154796",
  l: "Avengers: Endgame"},{i: {height: 2048, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', width: 1382},
  id: "tt415496",
  l: "Avengers: Endgame"},{i: {height: 2048, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', width: 1382},
  id: "tt415479",
  l: "Avengers: Endgame"}]);
  const [watch,setWatch]=useState([{i: {height: 2048, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg', width: 1382},
  id: "tt4154796",
  l: "Avengers: Endgame"}]);
  const [curr,setcurr]=useState("Search");
  function changeMovies(event){
    const x=event.target.value;
    setSearchbar(x);
  }
  function searchMovies(){
    setItem(searchbar);
    setSearchbar("");
    // console.log(item);
  }
  function addtowatchlist(val)
  {
    console.log("Hi");
    setWatch(prev=>{
      return [...prev,val];
    })
  }
  function removefromwatchlist(id)
  {
    // console.log("here");
    setWatch(prev=>{
      return prev.filter(movie=>movie.id!==id)
    })
  }
useEffect(() => {
  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${item}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
		  "x-rapidapi-key": API_KEY
    }
  })
  .then(response=>response.json())
  .then(response => {
    setMovies(response.d);
    // console.log(response.d);
  })
  .catch(err => {
    console.error(err);
  });
}, [item]);
  if(curr==="Search")
  return (
      <div>
        <MDBNavbar dark bgColor='info'>
          <MDBContainer >
            <button className='btn btn-outline-white' onClick={()=>setcurr("List")}>BingeList</button>
            <div className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder="Search" onChange={changeMovies} value={searchbar} aria-label='Search' />
              <button className='btn btn-outline-white' type='button' onClick={searchMovies}>
                Search
              </button>
            </div>
          </MDBContainer>
        </MDBNavbar>
        {typeof movies!=="undefined" ? <CardList movieList={movies} add={addtowatchlist}/>:<h1>Too Many Requests</h1>}
      </div>
  );
  else
    return (<div><MDBNavbar dark bgColor='info'>
    <MDBContainer >
      <button className='btn btn-outline-white' onClick={()=>setcurr("Search")}>BingeList</button>
    </MDBContainer>
  </MDBNavbar>
  <MyList movieList={watch} remove={removefromwatchlist}/>
  </div>);
}

export default App;
