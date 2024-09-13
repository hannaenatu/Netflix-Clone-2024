import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests'

const RowsList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="NetflixOriginals Now"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TopRatedMovies Now" fetchUrl={requests.TopRatedMovies} />
      <Row title="ActionMovies Now" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies Now" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies Now" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies Now" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Now" fetchUrl={requests.fetchDocumentaries} />
      <Row title="TvShow Now" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default RowsList