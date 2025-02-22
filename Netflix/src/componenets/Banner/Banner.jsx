import React, { useEffect, useState } from "react";
import requests from "../../Utility/Request";
import instance from "../../Utility/Axios";
import './Banner.css'

export default function Banner() {

    
  const [movie,setMovie]= useState({});
  
  useEffect(()=>{
    (async()=>{
        try{
            const request = await instance.get(requests.fetchDocumentaries)
            console.log(request)
            setMovie(request.data.results?.[Math.floor(Math.random()*request.data.results.length)])
          
        } catch (error){
            console.log( 'error',error);
        }
    })()

 },[]);

 const truncate = ( (text,length=200) =>{
    if(text?.length <= length){
        return text;
     } else{
      return text?.slice(0,length) + '...';
     }
     

 });
 


  return (
    <div
      className="banner_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
       
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div className="banner_container_content">
        <h1>{movie.title || movie.name || movie.originalname}</h1>
        <div className="banner_button">
          <button >Play</button>
          <button >My List</button>
        </div>
        <div>
        {/* <p {truncate(movie?.overview,150)} </p> */}
        <p>{truncate(movie?.overview)}</p>
        </div>
        
      </div>
      < div className = "shadow"/>
    </div>
  );
}


