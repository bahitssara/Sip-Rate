import React from 'react';
import './Reviews.css';
import SipRateContext from '../SipRateContext';
import { format } from 'date-fns'
import StarRating from '../StarRating/StarRating'

class Reviews extends React.Component {

    static contextType = SipRateContext;

    render() {
        const { reviews=[] } = this.context;
        return(
            <section className='reviews-page'>
                    <h2>Browse posted reviews:</h2>
                    {reviews.map(review => 
                        <ul className='user-reviews-list'>
                        <li key={review.id} className='user-review-item'>
                            <h4>{review.bev_name}</h4>
                            <p>{review.bev_type}</p>
                            <p>{review.user_review}</p>
                            <span className='date-created'>Posted: {format(review.date_created, 'MM/DD/YYYY')}</span>
                            <StarRating value={review.rating} />
            </li>
    </ul>
                    )}
            </section>
        )
    }
}

export default Reviews;