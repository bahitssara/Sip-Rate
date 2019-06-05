import React from 'react';

const SipRateContext = React.createContext({
    users: [],
    beverages: [],
    reviews: [],
    deleteReview: () => {},
    addReview: () => {},
    editReview: () => {},
})

export default SipRateContext;