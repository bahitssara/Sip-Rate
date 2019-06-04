import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddReview from './AddReview';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddReview/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});