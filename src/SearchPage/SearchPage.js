import React from 'react';
import './SearchPage.css';
import SipRateContext from '../SipRateContext';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating'
import config from '../config'

class SearchPage extends React.Component {
    componentDidMount() {
        fetch(config.API_ENDPOINT + `/beverages`, {
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
        .then(([beverages]) => {
            this.setState({
                beverages
            })
        })
        .catch(error => {
            console.error({error})
        })
    }
    static contextType = SipRateContext;
    render(){
        const { beverages=[] } = this.context;
        return(
            <section className="search-page">
                <h3>Search here, or manually add a beverage to review</h3>
                    <form className="search-input-form">
                        <label>Start searching!</label>
                            <input type="text" name="search" id="search-input" /*value="search here"*/ />
                        <button className="search-button" /*value="search"*/ >Search</button>
                    </form>
                <h3>OR</h3>
                    <Link to='/addreview'>
                    <button className="manual-review-button">Add Manual Review</button>
                    </Link>
                <div className="search-results">
                    <ul className='results-li'>
                        {beverages.map(beverage =>
                            <li className='search-li-item' key={beverage.id}>
                                <Link to='/addreview'>
                                    {beverage.bev_name}
                                </Link> 
                                <p>{beverage.type}</p>
                                <p>{beverage.description}</p>
                                <StarRating value={beverage.overall_rating}/>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        )
    }
}

export default SearchPage;

