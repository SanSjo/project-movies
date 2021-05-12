import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from './Detail';
import {Pagination} from './Pagination'

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const api_key = 'dcb0caab506cac37c3f7dc479ca8aee2';
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, SetCurrentPage] = useState(1)


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        setMovies(json.results);
        setTotalResults(json.total_results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  const nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${pageNumber}`)
    .then(res => res.json())
      .then(json => {
        console.log(json);
        setMovies(json.results);
        SetCurrentPage(pageNumber)

      });
  }
 console.log(movies.results)
  const numberPages = Math.floor(totalResults / 20);

  return (
    <div className="main-container">
      
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Detail
            movie={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            title={movie.original_title}
            release={movie.release_date}
            alt="movies"
          />
        </Link>
      ))}

      <div className="button-container">
      {totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/> : ""}

      </div>
    </div>
  );
};

export default Home;
