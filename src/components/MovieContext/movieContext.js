import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

const MovieContext = React.createContext({movies:{}});
export const MovieProvider = props => {
    const [allMovies, setAllMovies] = useState();
    const [comedyMovies, setComedyMovies] = useState();
    const [animationMovies, setAnimationMovies] = useState();
    const [adventureMovies, setAdventureMovies] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios('http://localhost:5000/getmovies')

            console.log("1", results)
            console.log("2", results.data)
            console.log("3", results.data.data)



            setAllMovies(results.data);

            console.log("this is results.data: ", results.data.data)
            var comedyMovies = []
            var adventureMovies = []
            var animationMovies = []

            // for (var movie in results.data.data) {
            //     const movieGenres = results.data.data[movie]['genre'].split("|")
            //     for (var i = 0; i < movieGenres.length; i++) {
            //         if (movieGenres[i] === 'Comedy') {
            //             comedyMovies.push(results.data.data[movie])
            //             continue
            //         }
                    
            //         if (movieGenres[i] === 'Adventure') {
            //             adventureMovies.push(results.data.data[movie])
            //             continue
            //         }

            //         if (movieGenres[i] === 'Animation') {
            //             animationMovies.push(results.data.data[movie])
            //             continue
            //         }
            //     }      
            // }
            // setComedyMovies(comedyMovies)
            // setAdventureMovies(adventureMovies)
            // setAnimationMovies(adventureMovies)
            // console.log("my comedy movies:", comedyMovies)
            // console.log("my adv movies:", adventureMovies)
            // console.log("my anim movies:", animationMovies)
        }
        fetchData();
    }, [])
    return (

        <MovieContext.Provider value={allMovies}>{props.children}</MovieContext.Provider>
    );
};
export const MovieConsumer = MovieContext.Consumer;
export default MovieContext;
MovieProvider.propTypes = {
    children: PropTypes.node.isRequired,
};