import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.medium.url

    return (
        <div onClick = { () => onVideoSelect(video) } className="row">
            <div className="col m4 s12">
                <img src = { imageUrl } alt={ video.snippet.title } className="responsive-img" />
            </div>

            <div className="col m8 s12">
                <h5>{ video.snippet.title }</h5>
            </div>
        </div>
    )
}

export default VideoListItem