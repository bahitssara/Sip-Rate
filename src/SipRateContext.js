import React from 'react';

const SipRateContext = React.createContext({
    users: [],
    beverages: [],
    reviews: [],
    searchResults: [],
    error: null,
    deleteReview: () => {},
    addReview: () => {},
    editReview: () => {},
})

export default SipRateContext;