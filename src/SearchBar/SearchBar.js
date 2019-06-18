import React from 'react';
import './SearchBar.css';
import config from '../config';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });
        this.handleSearch(value)
    };

    handleSearch(query) {
        const wineApi = `/beverages-api-data/search=${query}`;
        fetch(config.API_ENDPOINT + `${wineApi}` ,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(error =>
                    Promise.reject(error));
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error({error})
        })
    }

    render() {
        return(
            <form className='search-input-form' onSubmit={this.handleSearch}>
                        {/* <label className='search-label'>Start searching!</label> */}
                            <input type='text' name='searchbar' id='search-input' onChange={(e) => this.onChange(e)} />
                        <button className='search-button' >Search</button>
            </form>
        )
    }
}

export default SearchBar