import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../HomePage/LoginForm';
import SearchPage from '../SearchPage/SearchPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import AddReview from '../AddReviewPage/AddReview';
import EditReview from '../EditReview/EditReview';

function App() {
  return (
    <div className='App'>
      <main className='App'>
        <Route path='/' component={Header} />
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/signin' exact component={LoginForm} />
        <Route path='/searchpage' exact component={SearchPage} />
        <Route path='/profilepage' component={ProfilePage} />
        <Route path='/addreview' component={AddReview} />
        <Route path='/editreview' component={EditReview} />
      </main>
    </div>
  );
}

export default App;
