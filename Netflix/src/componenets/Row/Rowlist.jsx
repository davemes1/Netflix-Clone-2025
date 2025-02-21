import React from 'react'
import Row from './Row'
import requests from '../../Utility/Request'

function Rowlist() {
  return (
    <div>
      <Row title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title="Popular"
      fetchUrl={requests.fetchPopular}
      />
      <Row title="Trending"
      fetchUrl={requests.fetchTrending}
      />
      <Row title="Top Rated"
      fetchUrl={requests.fetchTopRated}
      />
      <Row title="Action Movie"
      fetchUrl={requests.fetchActionMovie}
      />
      <Row title="Comedy Movie"
      fetchUrl={requests.fetchComedyMovie}
      />
      <Row title="Horror Movie"
      fetchUrl={requests.fetchHorrorMovie}
      />
      <Row title="Romance Movie"
      fetchUrl={requests.fetchRomanceMovie}
      />
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
     
     
    </div>
  )
}

export default Rowlist
