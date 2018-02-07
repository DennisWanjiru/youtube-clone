import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.medium.url

    return (
        <div className="row list">
            <div className="col m6 s12">
                <img
                    onClick = { () => onVideoSelect(video) }
                    src = { imageUrl } alt={ video.snippet.title }
                    className="responsive-img hoverable clickable" />
            </div>

            <div className="col m6 s12">
                <span
                onClick = { () => onVideoSelect(video) }
                className="clickable title">
                    { video.snippet.title }
                </span>
            </div>
        </div>
    )
}

export default VideoListItem