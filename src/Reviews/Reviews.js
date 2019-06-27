import React from 'react';
import './Reviews.css';
import SipRateContext from '../SipRateContext';
import StarRating from '../StarRating/StarRating';
import { format } from 'date-fns'

class Reviews extends React.Component {

    static contextType = SipRateContext;

    render() {
        const { reviews=[] } = this.context;
        return(
            <section className='profile-page'>
                <div className='user-posted-reviews'>
                    <h2>Browse posted reviews</h2>
                    <ul className='all-reviews-list'>
                    {reviews.map(review => 
                         <li key={review.id} className='user-li-item'>
                         <h4>{review.bev_name}</h4>
                         <p>{review.bev_type}</p>
                         <p>{review.user_review}</p>
                         <span className='date-created'>Posted: {format(review.date_created, 'MM/DD/YYYY')}</span>
                         <StarRating value={review.rating} />
                         </li>                       
                    )}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Reviews;