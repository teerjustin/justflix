import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Home.css'
import Movie from '../Movie';

const Home = () => {
    const [user, setUser] = useState({
        'name': 'Justin'
    });
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchData()
    },[]);

    // useEffect(() => {
    // const getMovies = async () => {
    //     // let response = await fetch("http://localhost:5000/getmovies");
    //     // console.log("this is response.data", response.data);
    //     const promise3  = await fetch("http://localhost:5000/getmovies")
    //     const results = await Promise.allSettled([promise3])
    //     console.log(results)
    //     setMovies(results.data)
    // }
    // getMovies(); // run it, run it

    // // return () => {};
    // }, []);

    // useEffect(() => {
    //     const moviePromises = (() => {
    //         fetch("http://localhost:5000/getmovies")
    //     })
    //     Promise.all(moviePromises)
    //     .then((data) => { 
    //         console.log(data)
    //         setMovies(data) 
    //     });
    // }, [])

    async function fetchData() {
        await axios.get('http://localhost:5000/getmovies')
          .then(function (response) {
            console.log("THIS IS MY RESPONSE: ", response.data);
            if (response.data.status_code === 200) {
                console.log(response.data)
                setMovies(response.data.data)
            } else {
                //SHOULD POP UP ERROR OR INVALID
                console.log("dont work")
            }
          })
          .catch(function (error) {
            console.log(error.message);
          });

    }

    return (
        <>
            <div className="home-header">
                <div className="header-left">
                    Netflix
                    <a href="/somewhere" id="Home"> Home </a>
                    <a href="/somewhere"> TV Shows </a>
                    <a href="/somewhere"> Movies </a>
                    <a href="/"> New & Popular </a>
                    <a href="/"> My List </a>
                    <a href="/"> Browse by Languages </a>
                </div>
                <div className="header-right">
                    searchbar
                    <a href="/"> Kids </a>
                    <a href="/"> DVD </a>
                    <a href="/profile"> {user.name} </a>
                </div>
            </div>

            <div className="home-body">
                {movies.map((m) => {
                    return (
                        <Movie 
                            key={m.imbd_id}
                            title={m.title}
                            id={m.imbd_id}
                        />
                    );
                })}
            </div>
        </>
    )
}

export default Home;