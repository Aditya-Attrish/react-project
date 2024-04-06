import { useState, useEffect, useRef } from 'react'
import Box from './components/box.jsx'
import './App.css'

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function App() {
  const [data, setData] = useState([])
  const errRef = useRef();
  const getMovies = async (url) => {
    try{
      const response = await fetch(url)
      if(!response.ok)
        throw new Error('API request failed');
        
      const data = await response.json()
      setData(data.results);
    }
    catch(err){
      errRef.current.textContent = err.message;
    }
  }

  const inputRef = useRef()
  function searchMovies() {
    if (inputRef.current.value != "") {
      getMovies(SEARCHAPI + inputRef.current.value);
    } else {
      getMovies(APIURL);
    }
  }

  useEffect(() => {
    //Runs only on the first render
    getMovies(APIURL);
  }, []);

  return (
    <div className="main">
      <div className="header column">
        <div className="column">
          <input ref={inputRef} type="search" id="search" autofocus autocomplete="off" placeholder="Search here..." />
          <button type="button" className="btn" onClick={searchMovies}>Search</button>
        </div>
      </div>
      <div className="row">
        {data ? data.map((result) => {
          return <Box key={result.id} result={result} />
        }) : <div ref={errRef} className="error"></div> }
      </div>
    </div>
  )
}

export default App
