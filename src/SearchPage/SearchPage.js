import React from 'react';
import './SearchPage.css';

class SearchPage extends React.Component {
    render(){
        return(
            <section class="search-page">
                <h3>Search here, or manually add a beverage to review</h3>
                    <form class="search-input-form">
                        <label>Start searching!</label>
                            <input type="text" name="search" id="search-input" value="search here"/>
                        <button class="search-button" value="search">Search</button>
                    </form>
                <h3>OR</h3>
                    <button class="manual-review-button">Add Manual Review</button>
                <div class="search-results">**Results will display here**</div>
            </section>
        )
    }
}

export default SearchPage;