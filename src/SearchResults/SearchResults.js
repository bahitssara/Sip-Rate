import React from 'react'
import { Link } from 'react-router-dom'
import './SearchResults.css'
import StarRating from '../StarRating/StarRating'
import SipRateContext from '../SipRateContext';

class SearchResults extends React.Component {
    static contextType = SipRateContext;
    render() {
        const { beverages=[] } = this.context;

        return(
            <div className="search-results">
            <ul className='results-li'>
                <h3>Click on your wine choice to add a review</h3>
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
        )
    }
}

export default SearchResults