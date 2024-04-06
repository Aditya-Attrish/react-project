import { React } from 'react'
import './box.css'

function Box({result}) {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const imagePath = result.poster_path === null ? null : IMGPATH + result.poster_path;
  
  return (
    <div className="box">
      <img src={imagePath} alt="" />
      <div className="overlay">
        <div className="title">
          <h2> {result.original_title}  </h2>
          <span> {result.vote_average} </span>
        </div>
          <h3>Overview:</h3>
          <p>
            {result.overview}
          </p>
      </div>
    </div>
  )
}

export default Box;
