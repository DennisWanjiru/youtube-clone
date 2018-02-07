import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = props => {
    const videos = props.videos.map( video => {
        return <VideoListItem key = { video.id.videoId } video = { video } />
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col m4">
                    <ul>
                        {videos}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoList;