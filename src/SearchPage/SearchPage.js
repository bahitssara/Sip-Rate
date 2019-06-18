import React from 'react';
import './SearchPage.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'

class SearchPage extends React.Component {
    render(){
        return(
            <section className="search-page">
                <h3 className='search-page-header'>Search here, and add your review!</h3>
                <SearchBar />
                <SearchResults />
            </section>
        )
    }
}

export default SearchPage;

