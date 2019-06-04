import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import EditReview from './EditReview';


it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <EditReview/>
        </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});