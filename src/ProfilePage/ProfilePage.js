import React from 'react';
import './ProfilePage.css';
import SipRateContext from '../SipRateContext';
import StarRating from '../StarRating/StarRating';
import config from '../config';
import { format } from 'date-fns'

class ProfilePage extends React.Component {

    static contextType = SipRateContext;
    
    handleClickDelete = e => {
        e.preventDefault();
        const reviewId= this.props.id
        fetch(config.API_ENDPOINT + `/reviews/${reviewId}`,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })

        .then(res => {
            if (!res.ok) return res.json().then(error => Promise.reject(error));
        })
        .then(() => {
            this.context.deleteNote(reviewId);
        })
        .catch(error => {
            console.error({error})
        })
    }

    render() {
        const { reviews=[] } = this.context;
        return(
            <section className='profile-page'>
                <div className='user-reviews-main'>
                    <h2>Your Posted Reviews:</h2>
                    <ul className='user-reviews-list'>
                    {reviews.map(review => 
                         <li key={review.id} className='user-li-item'>
                         <h4>{review.bev_name}</h4>
                         <p>{review.bev_type}</p>
                         <p>{review.user_review}</p>
                         <span className='date-created'>Posted: {format(review.date_created, 'MM/DD/YYYY')}</span>
                         <StarRating value={review.rating} />
                         <button className='delete-review-button' onClick={this.handleClickDelete}>Delete</button>
                         </li>                       
                    )}
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProfilePage;