import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Movie from '../Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import MovieContext, { MovieProvider } from '../MovieContext/movieContext';
import GenreContext, { GenreProvider} from '../GenreContext/genreContext';


const MovieHomeWrapper = () => {
  return (
  <MovieProvider>
    <GenreProvider>
      <Home/>
    </GenreProvider>
  </MovieProvider>
  )
}



const Home = () => {
    const [movies, setMovies] = useState([]);
    const [feed, setFeed] = useState([])
    const [genres, setGenres] = useState([])
    const [genresLoaded, setGenresLoaded] = useState(false);

    const [count, setCount] = useState(5)
    const [index, setIndex] = useState(0)

    const allMovies = useContext(MovieContext)
    const allGenres = useContext(GenreContext)

    useEffect(() => {
      console.log("idk all movies")
      if (allMovies) {
        setFeed(allMovies.data.slice(0,5))
      }
    }, [allMovies])

    useEffect(() => {
      console.log("ALL GENRES AAHHHH")
      if (allGenres) {
        setGenres(allGenres)
        setGenresLoaded(true)
      }
    }, [allGenres])
    
    // console.log("does this work?", allMovies)
    // console.log("does this work!!!@!@!@", feed, allMovies )


    // useEffect(() => {
    //   console.log('Count is now: ', count);
    // },[count]);

    // useEffect(() => {
    //   console.log('Index is now: ', index);
    // },[index]);

    // async function fetchData() {
    //     await axios.get('http://localhost:5000/getmovies')
    //       .then(function (response) {
    //         console.log("THIS IS MY RESPONSE: ", response.data);
    //         if (response.data.status_code === 200) {
    //             console.log(response.data)
    //             setMovies(response.data.data)
    //             setFeed(response.data.data.slice(0, 5))
    //             setGenreFeed([])

    //         } else {
    //             //SHOULD POP UP ERROR OR INVALID
    //             console.log("dont work")
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error.message);
    //       });
    // };

    const handleClick = (event) => {
      if (count !== movies.length) {
        setCount(prevCount => prevCount + 1);
        setIndex(prevCount => prevCount + 1);
        setFeed(allMovies.data.slice(index, count))
      }
    };

    const handleLeftClick = (event) => {
      if (index !== 0) {
        setCount(prevCount => prevCount - 1);
        setIndex(prevCount => prevCount - 1);
        setFeed(allMovies.data.slice(index, count))
      }
    };

    console.log('asd', genres)

    return (
        <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto">
                  <Navbar.Brand href="#home">Netflix</Navbar.Brand>
                  <Nav.Link href="#">TV Shows</Nav.Link>
                  <Nav.Link href="#">Movies</Nav.Link>
                  <Nav.Link href="#">New & Popular</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <br />
                

            <div className="home-body">
                {/* {movies.map((m) => {
                    return (
                        <Movie 
                            key={m.imbd_id}
                            title={m.title}
                            poster={m.poster}
                            id={m.imbd_id}
                        />
                    );
                })} */}
                {/* asdasd */}
                <br />
                
                <div className="container">
                  {/* <div className="movie-container">
                    <button onClick={handleLeftClick}/>
                    {feed.map((filteredItem) => {
                        return (
                          <Movie
                            key={filteredItem.title}
                            title={filteredItem.title}
                            poster={filteredItem.poster}
                            genre={filteredItem.genre}
                          />
                        )
                    })}
                    <button onClick={handleClick}/>
                  </div> */}


                  <div className="genre-container">
                    { 
                      Object.keys(genres).map((header, i) => (
                          <div className="genre-container-container" key={i}>
                              <div className="genre-header"> 
                                {header}
                              </div>

                              <div className="genre-movies">
                                {Object.values(genres[header]).map((movie, k) => {
                                  console.log("this is item: ", genres[header], movie, k)
                                  return (
                                    <a href={'/watch/' + movie.imbd_id}>
                                      <Movie
                                      title={movie.title}
                                      poster={movie.poster}
                                      />
                                    </a>
                                  )
                                })} 
                              </div>
                          </div>
                      ))
                    }
                  </div>
                </div>


                {/* Genres: {genresLoaded && Object.entries(genres).forEach(([k, v]) => {
                    console.log('kv', k, v)
                    const genre = k;
                    const movies = v;
                    console.log('test:',genre, movies)
                    return (
                      <div>
                        <div className="genres-list">
                          Genre: {genre} {k}
                        </div>
                        <div className="movies-list">
                          Movie: {movies.map((m) => {
                            console.log('this is m!:', m.title)
                            return (
                              m.title
                            )
                            })}
                        </div>
                      </div>
                  )})} */}


                    
              </div>
        </>
    )
}

export default MovieHomeWrapper;