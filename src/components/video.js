import React from 'react'

const BASE_URL="https://www.youtube.com/embed/";

const Video = ({videoId}) => {
    return <iframe src={`${BASE_URL}${videoId}`}/>
}

export default Video;