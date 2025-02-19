


// / export default function Banner() {

    // const [movie,setMovie]= useState({});
      
    //   useEffect(()=>{
    //     (async()=>{
    //         try{
    
    // const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA3YzI0MjA2Nzk5OTcwZjlhMzAyZTc2MzBjY2I4MiIsIm5iZiI6MTczOTU2MTI1Mi4xMzUsInN1YiI6IjY3YWY5OTI0ZjEyY2VjNmUzMDFjZDJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T43_y7UedJff5gcbwMpvlSdMvaWxwBGmSFsF4OsGH_o'
    //   }
    // };
    
    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error(err))}}
    
    // ()
    
    //  },[]);

    
// const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yjc1MTVjMDMzMjY4MjUwOTFiODYxNzUzMTE1MmVhNiIsIm5iZiI6MTczOTU2MTI1Mi4xMzUsInN1YiI6IjY3YWY5OTI0ZjEyY2VjNmUzMDFjZDJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SzaOab6kpaFdJ8aEQtBd3Wmv7AY2Z_93X6SjOrg1U1U'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

// import React, { useEffect, useState } from "react";

// export default function Banner() {
//   const [genres, setGenres] = useState([]); // Store genres in an array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchGenres() {
//       try {
//         const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
//         const options = {
//           method: 'GET',
//           headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer YOUR_API_KEY', // Replace with your actual key
//           },
//         };

//         const response = await fetch(url, options);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const json = await response.json();
//         setGenres(json.genres); // Set the genres state
//         console.log("Genres:", json.genres); // Log the genres
//       } catch (err) {
//         console.error("Error fetching genres:", err);
//         setError(err.message || "An error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchGenres();
//   }, []);

//   if (loading) {
//     return <div>Loading genres...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Movie Genres</h1>
//       <ul>
//         {genres.map((genre) => (
//           <li key={genre.id}>{genre.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";

// export default function Banner() {
//     const [movie, setMovie] = useState({}); // Initialize as null
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState({});
  
//     useEffect(() => {
//       async function fetchMovie() {
//         try {
//           const movieId = 213; // Example movie ID - Replace with dynamic ID if needed
//           const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`; // Correct endpoint
//           const options = {
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA3YzI0MjA2Nzk5OTcwZjlhMzAyZTc2MzBjY2I4MiIsIm5iZiI6MTczOTU2MTI1Mi4xMzUsInN1YiI6IjY3YWY5OTI0ZjEyY2VjNmUzMDFjZDJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T43_y7UedJff5gcbwMpvlSdMvaWxwBGmSFsF4OsGH_o', // Replace with your actual key
//             },
//           };
  
//           const response = await fetch(url, options);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const movieData = await response.json();
//           setMovie(movieData);
//           console.log("Movie Data:", movieData);
//         } catch (err) {
//           console.error("Error fetching movie:", err);
//           setError(err.message || "An error occurred.");
//         } finally {
//           setLoading(false);
//         }
//       }
  
//       fetchMovie();
//     }, []);
  
//     if (loading) {
//       return <div>Loading movie...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error}</div>;
//     }
  
//     if (!movie) {
//         return <div>No movie data available.</div>;
//     }
  
//     const imageUrl = movie.backdrop_path
//       ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
//       : ""; // Handle missing backdrop_path
  
//     return (
//       <div
//         className="banner"
//         style={{
//           backgroundSize: "cover",
//           backgroundImage: `url('${imageUrl}')`, // Correct usage of imageUrl
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* ... rest of your banner content */}
//         <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>
//         <p className="banner_description">{movie.overview}</p>
//       </div>
//     );
//   }
    
{
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
  }