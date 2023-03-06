import { React } from 'react';

const Movie = (props) => {
    console.log("this is props: ", props.genre)

    return (
        <div key={props.id} className="movies">
            {/* {props.title} */}
            <img src={props.poster} alt="alternatetext" width="200" height="150" />      
        </div>
    )
};

export default Movie;