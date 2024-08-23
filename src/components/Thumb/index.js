import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

import PropTypes from "prop-types";

const Thumb = ({ image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt="movie-thumb"/>
            </Link>
        ) : (
            <Image src={image} alt="movie-thumb"/>
        )
    }
    </div>
    

    
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
};

export default Thumb;