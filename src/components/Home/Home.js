import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Movie from '../Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

const Home = () => {
    // const [user, setUser] = useState({
    //     'name': 'Justin'
    // });
    const [movies, setMovies] = useState([]);

    const [feed, setFeed] = useState([])
    const [count, setCount] = useState(5)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        fetchData();
    },[]);

    useEffect(() => {
      console.log('Count is now: ', count);
    },[count]);

    useEffect(() => {
      console.log('Index is now: ', index);
    },[index]);

    async function fetchData() {
        await axios.get('http://localhost:5000/getmovies')
          .then(function (response) {
            console.log("THIS IS MY RESPONSE: ", response.data);
            if (response.data.status_code === 200) {
                console.log(response.data)
                setMovies(response.data.data)
                setFeed(response.data.data.slice(0, 5))

            } else {
                //SHOULD POP UP ERROR OR INVALID
                console.log("dont work")
            }
          })
          .catch(function (error) {
            console.log(error.message);
          });
    };

    const handleClick = (event) => {
      if (count !== movies.length) {
        setCount(prevCount => prevCount + 1);
        setIndex(prevCount => prevCount + 1);
        setFeed(movies.slice(index, count))
      }
    };

    const handleLeftClick = (event) => {
      if (index !== 0) {
        setCount(prevCount => prevCount - 1);
        setIndex(prevCount => prevCount - 1);
        setFeed(movies.slice(index, count))
      }
    };
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Netflix</Navbar.Brand>
                <Nav className="me-auto">
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
                <button onClick={handleLeftClick}/>
                {feed.map((filteredItem) => {
                    return (
                      <Movie
                        title={filteredItem.title}
                        poster={filteredItem.poster}
                      />
                    )
                })}
                <button onClick={handleClick}/>
            </div>
        </>
    )
}

export default Home;