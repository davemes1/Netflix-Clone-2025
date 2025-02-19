import {React,useEffect,useState }from "react";
import instance from "../../Utility/Axios";
import requests from "../../Utility/Request";
import  './RowModule.css'

function Row() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    instance
      .get(requests.fetchNetflixOriginals)
      .then((res) => setMovie(res.data.results));
  }, []);

  const BaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className="movie_row">
        <div></div>
        {movie?.map((singleMovie) => (
          
            <div>
              <img style={{width:"300px",height:"250px",marginLeft:'10px',marginTop:'30px',display:'flex'}}src={BaseUrl + singleMovie.poster_path} alt="" />
            </div>
          
        ))}
      </div>
    </>
  );
}

export default Row;
