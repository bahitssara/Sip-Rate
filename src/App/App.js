import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header';
import SignUpForm from '../SignUpForm/SignUpForm';
import SearchPage from '../SearchPage/SearchPage';
import SipRateContext from '../SipRateContext';
import TokenService from '../services/token-service'
import config from '../config';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateOnlyRoute';
import ProfilePage from '../ProfilePage/ProfilePage';

class App extends React.Component {
  state = {
    user: '',
    beverages: [],
    reviews: [],
    searchResults: [],
    error: null
  };

  componentDidMount() {
    Promise.all([
      fetch(config.API_ENDPOINT + '/reviews', {
        method: 'GET',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
    ])
      .then(([reviewRes]) => {
        if(!reviewRes.ok) 
          return reviewRes.json().then(e => Promise.reject(e))

          return Promise.all([
            reviewRes.json(),
          ])
        })
        .then(([reviews]) => {
          this.setState({
            reviews,
          })
        })
  
        .catch(error => {
          console.error({error})
        })
      }

  handleDeleteReview = reviewId => {
    this.setState({
      reviews: this.state.reviews.filter(review => review.id !== reviewId)
    })
  }

  handleEditReview = reviewId => {
    this.setState({
      reviews:
      [...this.state.reviews, reviewId]
    }) 
  }

  handleAddReview = review => {
    this.setState({
      reviews:
      [...this.state.reviews, review]
    })
  }

  handleBevSearch = (beverages) => {
    this.setState({
      beverages: beverages
    })
  }

  setError = (error) => {
    console.error(error)
    this.setState({ 
      error 
    })
  }



  render(){
    const contextValue = {
      user: this.state.user,
      beverages: this.state.beverages,
      reviews: this.state.reviews,
      searchResults: this.state.searchResults,
      deleteReview: this.handleDeleteReview,
      editreview: this.handleEditReview,
      addReview: this.handleAddReview,
      error: this.state.error
    }
    return (
      <SipRateContext.Provider value={contextValue}>
        <div className='App'>
          <main className='App'>
            <Route path='/' component={Header} />
            <Route path='/' exact component={HomePage} />
            <PublicOnlyRoute path='/signup' component={SignUpForm} />
            <PrivateRoute path='/searchpage' exact component={SearchPage} />
            <PrivateRoute path='/profilepage' exact component={ProfilePage} />
          </main>
        </div>
      </SipRateContext.Provider>
    );
  }
}

export default App;
