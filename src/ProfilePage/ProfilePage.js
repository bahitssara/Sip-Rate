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
                    <h2>Posted Reviews:</h2>
                    <ul className="user-reviews-list">
                    {reviews.map(review => 
                         <li key={review.id} className="user-reviews">
                         <h4>{review.bev_name}</h4>
                         <p>{review.user_review}</p>
                         <StarRating value={review.rating} />
                         <Link to='/editreview'>
                         <button className="edit-review">Edit</button>
                         </Link>
                         <button className="delete-review">Delete</button>
                         </li>                       
                    )}
                    </ul>
                </div>

                <div className="account-info">
                    <h3>Account info:</h3>
                        <h4>FakeUser101</h4>
                        <Link to='/profilepage'>fakeuser101@EMAIL.COM</Link>
                        <button className="edit-user-info">Edit Info</button>
                </div>
            </section>
        )
    }
}

export default ProfilePage;