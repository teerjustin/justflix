import { React } from 'react';

const Movie = (props) => {
    return (
        <div key={props.id}>
            {props.title}
        </div>
    )
};

export default Movie;