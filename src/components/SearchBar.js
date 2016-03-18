import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        );
    }
    onInputChange(e) {
        this.setState({
            term: e.target.value
        });
    }
}

export default SearchBar