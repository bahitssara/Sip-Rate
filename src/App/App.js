import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header';
import SignUpForm from '../SignUpForm/SignUpForm';
import SearchPage from '../SearchPage/SearchPage';
import EditReview from '../EditReview/EditReview';
import SipRateContext from '../SipRateContext';
import TokenService from '../services/token-service'
import config from '../config';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateOnlyRoute';
import ProfilePage from '../ProfilePage/ProfilePage';

class App extends React.Component {
  state = {
    users: [],
    beverages: [],
    reviews: [],
    searchResults: [],
    error: null
  };

  componentDidMount() {
    Promise.all([
      fetch(config.API_ENDPOINT + '/beverages', {
        method: 'GET',
        headers: {
          'authorization': `basic ${TokenService.getAuthToken()}`,
        },
      }),
      fetch(config.API_ENDPOINT + '/reviews', {
        method: 'GET',
        headers: {
          'authorization': `basic ${TokenService.getAuthToken()}`,
        },
      })
    ])
      .then(([bevRes, reviewRes]) => {
        if(!bevRes.ok)
          return bevRes.json().then(e => Promise.reject(e))
        if(!reviewRes.ok) 
          return reviewRes.json().then(e => Promise.reject(e))

          return Promise.all([
            bevRes.json(),
            reviewRes.json(),
          ])
        })
        .then(([beverages, reviews]) => {
          this.setState({
            beverages,
          })
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
      users: this.state.users,
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
            <PrivateRoute path='/editreview/:clickedBeverage' component={EditReview} />
          </main>
        </div>
      </SipRateContext.Provider>
    );
  }
}

export default App;
