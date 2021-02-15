import React, { useState} from "react";
import MovieList from "./Components/MovieList";
import FilterMovie from "./Components/FilterMovie";
import AddMovie from './Components/AddMovie';
import "./App.css";


function App () {
  const [ Movies, setMovies ] = useState (
     [
      {
        title: "Zone hostile",
        description:
          "Dans le futur, un pilote de drone est déployé dans une zone militarisée meurtrière où il va travailler pour un officier androïde chargé d'empêcher une attaque nucléaire.",
        posterUrl:
          "https://imgsrc.cineserie.com/2021/01/zone-hostile-c-est-quoi-ce-film-netflix-avec-anthony-mackie.png?ver=1",
        rate: 3,
      },
      {
        title: "Sniper: Ghost Shooter",
        description:
          "Des tireurs d'élite chargés de protéger un gazoduc contre des terroristes soupçonnent une faille de sécurité quand un tireur invisible les prend pour cible.",
        posterUrl:
          "https://www.themoviedb.org/t/p/w780/uAntGC8ywRsHyL3RIsQIi6LZvJn.jpg",
        rate: 5,
      },
      {
        title: "La Guerre des mondes",
        description:
          "Un horloger divorcé est contraint de devenir le père protecteur qu'il n'a jamais été quand des vaisseaux spatiaux envahissent la Terre et que le danger est à son comble.",
        posterUrl:
          "https://i.ytimg.com/vi/QD0whiJYRU4/maxresdefault.jpg",
        rate: 2,
      },
    ],
  )

  // message warning for impty input AddMovie
  const [warning,setWarning]=useState(false);

  // Function AddMovie
const addNewMovie=(newMovie)=>{
  if(newMovie.title !== '' && newMovie.posterUrl !== '' && newMovie.rate !== '' ){
    setMovies([...Movies, newMovie]);
    setWarning(false);
  }
  else{
    setWarning(true);
  }
 }
const warningMsg = warning && <div className='alert alert-danger mt-1' role='alert'>Empty box you have to complete !!!!!!!!!!! 
</div>

// Search Movies 

const [searchTitle,setSearchTitle]=useState('');
const [rateSearch, setRateSearch] = useState(1);
    return (
      <div className='App'>
        {warningMsg}
        <div style={{display:'flex',flexDirection:'column'}}>
        <FilterMovie setSearchTitle={setSearchTitle} titleInput={searchTitle} setRateSearch={setRateSearch} rateInput={rateSearch}/>
        <MovieList Movies={Movies} titleInput={searchTitle} rateInput={rateSearch}/>
        </div>
        <AddMovie addNewMovie={addNewMovie}/>
      </div>
    );
}

export default App;
