import React from 'react'

const VideoListItem = props => {
    return (
        <div>
            <img src={props.video.snippet.thumbnails.medium.url} alt=""/>
            <li>{ props.video.snippet.title }</li>
            <br/>
        </div>
    )
}

export default VideoListItem