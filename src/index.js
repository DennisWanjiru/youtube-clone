import React , { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/js/materialize.min.js';
import './app.css';

const API_KEY = 'AIzaSyDKj9H03tZWKm2crzpWb29ZVKy5vOeZ_HA'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] }

        YTSearch({key: API_KEY, term: "hayawani"}, videos => {
            this.setState({ videos })
        })
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <SearchBar />
                </div>

                <div className="container content">
                    <VideoList videos = { this.state.videos } />
                </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))