import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import SipRateContext from '../SipRateContext'
import StarRating from '../StarRating/StarRating'

class ProfilePage extends React.Component {

    static contextType = SipRateContext;
    
    render() {
        const { reviews=[] } = this.context;
        return(
            <section className="profile-page">
                <div className="user-reviews-main">
                    <h2>Your Posted Reviews:</h2>
                    <ul className="user-reviews-list">
                    {reviews.map(review => 
                         <li key={review.id} className="user-li-item">
                         <h4>{review.bev_name}</h4>
                         <p>{review.bev_type}</p>
                         <p>{review.user_review}</p>
                         <p>Posted: {review.date_created}</p>
                         <StarRating value={review.rating} />
                         <Link to={`/editreview`}>
                         <button className="edit-review-button">Edit</button>
                         </Link>
                         <button className="delete-review-button">Delete</button>
                         </li>                       
                    )}
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProfilePage;