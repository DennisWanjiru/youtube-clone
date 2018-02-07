import React from 'react'

const VideoDetail = ({video}) => {
    if(!video) {
        return `
        <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
        `
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="row">
            <div className="col m9 s12">
                <div className="card hoverable">
                    <div className="card-image">
                        <div className="video-container">
                            <iframe width="853" height="480" src={ url } frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="card-content">
                        <h5 className="title">{ video.snippet.title }</h5>
                        <div className="desc grey-text">{ video.snippet.description }</div>
                    </div>
                </div>
            </div>

            <div className="col m4 s12">

            </div>
        </div>
    )
}

export default VideoDetail