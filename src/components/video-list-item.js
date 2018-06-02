import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = ({movie}) => {
    return <li>
                <img width="100px" height="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                <h2>{movie.title}</h2>
           </li>
}

export default VideoListItem;