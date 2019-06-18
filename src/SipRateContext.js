import React from 'react';

const SipRateContext = React.createContext({
    users: [],
    beverages: [],
    reviews: [],
    searchResults: [],
    deleteReview: () => {},
    addReview: () => {},
    editReview: () => {},
})

export default SipRateContext;