import React from 'react'
import './ReviewFormat.css'
import StarRating from '../StarRating/StarRating'
import SipRateContext from '../SipRateContext'
import TokenService from '../services/token-service'
import config from '../config'
import { format } from 'date-fns'



class ReviewFormat extends React.Component {

    static contextType = SipRateContext

    renderDeleteButton() {
        if (TokenService.hasAuthToken()) {
            return (
                <button className='delete-review-button' onClick={this.handleClickDelete}>Delete</button>
            )
        }
    }

    handleClickDelete = e => {
        e.preventDefault();
        const reviewId = this.props.id
        fetch(config.API_ENDPOINT + `/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })

            .then(res => {
                if (!res.ok) return res.json().then(error => Promise.reject(error));
            })
            .then(() => {
                this.context.deleteReview(reviewId);
                window.location = '/profilepage'
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        const { id, bev_name, bev_type, user_review, rating, date_created } = this.props;
        return (
            <ul className='user-reviews-list'>
                    <li key={id} className='user-review-item'>
                        <h4>{bev_name}</h4>
                        <p>{bev_type}</p>
                        <p>{user_review}</p>
                        <span className='date-created'>Posted: {format(date_created, 'MM/DD/YYYY')}</span>
                        <StarRating value={rating} />
                        {this.renderDeleteButton()}
                    </li>
            </ul>
        )
    }
}

export default ReviewFormat