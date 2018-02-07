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

        this.videoSearch('edsheeran')

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, maxResults: 25, term}, videos => {
            this.setState({ videos, selectedVideo: videos[0] })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="navbar-fixed">
                    <SearchBar onSearchTermChange = { term => this.videoSearch(term) } />
                </div>

                <div className="container content">
                    <div className="col m8 s12">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>

                    <div className="col m4 s12">
                        <VideoList
                            onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
                            videos = { this.state.videos }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))