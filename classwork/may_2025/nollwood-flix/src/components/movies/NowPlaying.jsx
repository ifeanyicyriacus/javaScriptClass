import React from 'react';
import {useGetNowPlayingMoviesQuery} from "../../service/movieAPI.jsx";
import MovieCard from "../MovieCard";

const NowPlaying = () => {
    const data = useGetNowPlayingMoviesQuery();
    
    return (
        <div>
            NowPlaying
        </div>
    )
}

export default NowPlaying