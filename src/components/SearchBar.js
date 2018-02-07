import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: "" }
    }
    render() {
        return (
            <nav className="white">
                <div className="nav-wrapper">
                <form className="black-text">
                    <div className="input-field">
                    <input type="search"
                    value = { this.state.term }
                    onChange = { e => this.setState({term: e.target.value }) }
                     required />
                    <label className="label-icon"><i className="material-icons black-text">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>
        )
    }
}

export default SearchBar;