import React from "react";

import { useParams } from "react-router-dom";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//hooks
import {useMovieFetch} from "../hooks/useMovieFetch";

//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

//image
import noImage from "../images/no_image.jpg";


const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if(loading) return <Spinner />;
    if(error) return <div>Something went wrong...</div>;

    // console.log(movie.directors);

    

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} /> 

            <MovieInfo movie={movie} />

            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />

            <Grid header="Actors">
                {Array.isArray(movie.actors) && movie.actors.map((actor) => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            (actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : noImage)
                        }
                    />
                ))}
            </Grid>
        </>
        
        
    );
};

export default Movie;