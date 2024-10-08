import React from "react";

//Components
import Thumb from "../Thumb";

//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

//NoFoundImage
import NoImage from "../../images/no_image.jpg";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>


                <div className="rating-director">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{Array.isArray(movie.directors) && movie.directors.length > 1 ? 'S' : ''}:</h3>
                        {Array.isArray(movie.directors) && movie.directors.length > 0 ? movie.directors.map((director) => <p key={director.credit_id}>{director.name}</p>) : <p>N/A</p>}
                        
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

MovieInfo.prototypes = {
    movie: PropTypes.object
}

export default MovieInfo;