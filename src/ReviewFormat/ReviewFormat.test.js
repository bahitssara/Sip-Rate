import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ReviewFormat from './ReviewFormat';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ReviewFormat/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});