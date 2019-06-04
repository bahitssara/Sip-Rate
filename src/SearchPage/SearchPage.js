import React from 'react';
import './SearchPage.css';

class SearchPage extends React.Component {
    render(){
        return(
            <section className="search-page">
                <h3>Search here, or manually add a beverage to review</h3>
                    <form className="search-input-form">
                        <label>Start searching!</label>
                            <input type="text" name="search" id="search-input" /*value="search here"*/ />
                        <button className="search-button" /*value="search"*/ >Search</button>
                    </form>
                <h3>OR</h3>
                    <button className="manual-review-button">Add Manual Review</button>
                <div className="search-results">**Results will display here**</div>
            </section>
        )
    }
}

export default SearchPage;