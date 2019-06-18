import React from 'react';
import './SearchBar.css';
import config from '../config';
import SipRateContext from '../SipRateContext';
import StarRating from '../StarRating/StarRating';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            searchResults: [],
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    static contextType = SipRateContext;

    updateState(ev) {
        ev.preventDefault()
        const value = this.input.value
        this.setState({
            query: value
        })
        this.handleSearch(value)
    }

    handleSearch(query) {
        const wineApi = `/beverages-api-data/${query}`;
        const url = config.API_ENDPOINT + `${wineApi}`
        fetch(url, {
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
                this.setState({
                    searchResults: responseJson
                })
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div className='search'>
                <form className='search-input-form' onSubmit={e => this.updateState(e)}>
                    <input type='text' name='search_input' id='search_input' ref={input => (this.input = input)} />
                    <button type='submit' className='search-button' >Search</button>
                </form>
                <div className="search-results">
                    <ul className='results-li'>
                        <h3>Click on your wine choice to add a review</h3>
                        {this.state.searchResults.map(beverage =>
                            <li className='search-li-item' key={beverage.code}>
                                <Link to='/addreview' className='beverage-link'>
                                    {beverage.name}
                                </Link>
                                <p className='bev_type'>{beverage.type}</p>
                                <p className='bev_description'>{beverage.varietal}</p>
                                <StarRating value={beverage.snoothrank} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchBar;