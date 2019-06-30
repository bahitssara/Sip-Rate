import React from 'react';
import './Reviews.css';
import SipRateContext from '../SipRateContext';
import ReviewFormat from '../ReviewFormat/ReviewFormat';

class Reviews extends React.Component {

    static contextType = SipRateContext;

    render() {
        const { reviews=[] } = this.context;
        return(
            <section className='reviews-page'>
                    <h2>Browse posted reviews:</h2>
                    {reviews.map(review => 
                         <ReviewFormat 
                         key={review.id}
                         id={review.id}
                         bev_name={review.bev_name}
                         user_review={review.user_review}
                         date_created={review.date_created}
                         rating={review.rating}
                         />
                    )}
            </section>
        )
    }
}

export default Reviews;