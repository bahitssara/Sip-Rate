import React from 'react';
import './SearchBar.css';
import config from '../config';
import SipRateContext from '../SipRateContext';
import StarRating from '../StarRating/StarRating';
import AddReview from '../AddReviewPage/AddReview';
import BeveragesApiService from '../services/beverages-api-service'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            searchResults: [],
            id: '',
            bev_name: '',
            bev_type: '',
            user_review: '',
            rating: Number(),
            user_id: '',
            bev_id: '',
            date_added: new Date(),
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    static contextType = SipRateContext;

    updateState(ev) {
        ev.preventDefault()
        const value = this.input.value
        this.setState({
            query: value,
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

    handleReviewSubmit = ev => {
        ev.preventDefault();
        this.setState({ error: null })
        const { bev_id, bev_name, bev_type, rating, user_review } = ev.target

        BeveragesApiService.postReview({
            user_id: '7',
            bev_id: bev_id.value,
            bev_name: bev_name.value,
            bev_type: bev_type.value,
            rating: rating.value,
            user_review: user_review.value
        })
        .then(() => 
            bev_id.value='',
            bev_name.value='',
            bev_type.value='',
            rating.value='',
            user_review.value='',
        )
        .catch(res => {
            this.setState({ error: res.error })
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
                                <a href={beverage.link} className='beverage-link' rel='noopener noreferrer' target='_blank'>{beverage.name}</a>
                                <p className='bev_type'>{beverage.type}</p>
                                <p className='bev_description'>{beverage.varietal}</p>
                                <StarRating value={beverage.snoothrank} />
                                <AddReview 
                                    bev_id={beverage.code} 
                                    bev_name={beverage.name} 
                                    bev_type={beverage.type} 
                                    user_review={this.state.user_review} 
                                    rating={this.state.rating} 
                                    onAddReview={(e) => this.handleReviewSubmit(e)}
                                    />
                            </li>
                        )}
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchBar;