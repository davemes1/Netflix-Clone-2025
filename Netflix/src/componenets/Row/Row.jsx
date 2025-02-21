import { React, useEffect, useState } from "react";
import instance from "../../Utility/Axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await instance.get(fetchUrl);
        console.log(fetchUrl);
        setMovie(request.data.results);
        console.log(request);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          if (!url){
            console.log("No Trailer Found");
            
          }
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          const videoID = urlParams.get("v");
          setTrailerUrl(videoID);
        }
      )
      .catch((error)=>{
        console.log("Sorru, we could't find a trailer",error);
        
      })
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      playsinline: 1,
    },
  };
  
  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
          {movie?.map((movie, index) => (
            <img
              
              key={movie.id ||index}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Row;
