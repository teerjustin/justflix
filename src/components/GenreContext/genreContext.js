import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

const GenreContext = React.createContext({genres:{}});
export const GenreProvider = props => {
    const [allGenres, setAllGenres] = useState();

    // const [comedyMovies, setComedyMovies] = useState();
    // const [animationMovies, setAnimationMovies] = useState();
    // const [adventureMovies, setAdventureMovies] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios('http://localhost:5000/getmovies')

            console.log("this is results.data: ", results.data.data)

            //temp is going to be my genre object that i will set allGenres to after getting info
            var temp = {}
            
            for (var movie in results.data.data) {
                const movieGenres = results.data.data[movie]['genre'].split("|")
                for (var i = 0; i < movieGenres.length; i++) {
                    //if the genre doesnt exist, create key of genre and push each movie obj into it -> array?

                    console.log('this is movie genre:', movieGenres[i])

                    if (!temp[movieGenres[i]]) {
                        console.log('doesnt exist lets make one')
                        temp[movieGenres[i]] = [results.data.data[movie]]
                    }
                    else {
                        temp[movieGenres[i]].push(results.data.data[movie])
                    }
                }      
            }

            console.log("THIS IS TEMP: aaSDASHUIDAHSUDHUASUHIDSAUHI", temp)
            setAllGenres(temp)
        }
        fetchData();
    }, [])
    return (

        <GenreContext.Provider value={allGenres}>{props.children}</GenreContext.Provider>
    );
};
export const GenreConsumer = GenreContext.Consumer;
export default GenreContext;
GenreProvider.propTypes = {
    children: PropTypes.node.isRequired,
};