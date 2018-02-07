import React , { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/js/materialize.min.js';
import './app.css';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDKj9H03tZWKm2crzpWb29ZVKy5vOeZ_HA'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [], selectedVideo: null }

        YTSearch({key: API_KEY, maxResults: 25, term: "edsheeran"}, videos => {
            this.setState({ videos, selectedVideo: videos[0] })
        })
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <SearchBar />
                </div>

                <div className="container content">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
                        videos = { this.state.videos }
                    />
                </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))