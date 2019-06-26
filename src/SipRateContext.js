import React from 'react';

const SipRateContext = React.createContext({
    beverages: [],
    reviews: [],
    searchResults: [],
    error: null,
    user: '',
    deleteReview: () => {},
    addReview: () => {},
    editReview: () => {},
})

export default SipRateContext;