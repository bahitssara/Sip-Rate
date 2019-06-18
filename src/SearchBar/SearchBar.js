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

    updateState(ev) {
        ev.preventDefault()
        const value = this.input.value
        console.log(value)
        this.setState({
            query: value
        })
        this.handleSearch(value)
    }

    handleSearch(query) {
        console.log(query)
        const wineApi = `/beverages-api-data/${query}`;
        const url= config.API_ENDPOINT + `${wineApi}`
        console.log(url)
        fetch(url ,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
              }
              throw new Error(response.statusText);
        })
        .then(responseJson => {
            console.log(responseJson)
        })
        .catch(error => {
            console.error({error})
        })
    }

    render() {
        return(
            <form className='search-input-form' onSubmit={e => this.updateState(e)}>
                <input type='text' name='search_input' id='search_input'           ref={input => (this.input = input)}
                />
                    <button type='submit' className='search-button' >Search</button>
            </form>
        )
    }
}

export default SearchBar