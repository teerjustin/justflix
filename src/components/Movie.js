import { React } from 'react';

const Movie = (props) => {
    // console.log("this is props: ", props)

    return (
        <div key={props.id}>
            {props.title}
            <img src={props.poster} alt="alternatetext" />
        </div>
    )
};

export default Movie;