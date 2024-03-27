import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { fetchTrendingMovies } from "../data/movies";
import MoviesItems from "./MoviesItems";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies()
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <FlatList
            data={movies}
            renderItem={({ item: movi }) => (
                <MoviesItems props={movi} />
            )}
        />
    );
};

export default MoviesList;
