import { React } from 'react';

const Movie = (props) => {
    console.log("this is props: ", props.genre)

    return (
        <div key={props.id}>
            {props.title}
            <img src={props.poster} alt="alternatetext" />      
        </div>
    )
};

export default Movie;