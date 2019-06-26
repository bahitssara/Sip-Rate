import React from 'react';
import './ProfilePage.css';
import config from '../config';
import TokenService from '../services/token-service'
import SipRateContext from '../SipRateContext'
import ReviewFormat from '../ReviewFormat/ReviewFormat'


class ProfilePage extends React.Component {

    state = {
        reviews: []
    }

    static contextType = SipRateContext

    componentDidMount() {
        const user = TokenService.getUserId()
        fetch(`${config.API_ENDPOINT}/myreviews/${user}`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            }).then(userReviews => {
                this.setState({
                    reviews: userReviews
                })
            }).catch(err =>
                console.error({ err }))
    };

    render() {
        const { reviews = [] } = this.state;
        return (
            <section className='profile-page'>
                <div className='user-reviews-main'>
                    <h2>Your Posted Reviews:</h2>
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
                </div>
            </section>
        )
    }
}

export default ProfilePage;