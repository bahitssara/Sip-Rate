import React from 'react';
import './AddReview.css';
import SipRateContext from '../SipRateContext';
import ValidationError from '../ValidationError/ValidationError'
import BeveragesApiService from '../services/beverages-api-service';

class AddReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            bev_name: '',
            bev_type: '',
            user_review: '',
            rating: Number(),
            user_id: '',
            bev_id: '',
            date_added: new Date(),
            bev_nameValid: false,
            user_reviewValid: false,
            formValid: false,
            validationMessages: {
                bev_name: '',
                user_review: ''
            }
        }
    }

    static contextType = SipRateContext;

    handleReviewSubmit = ev => {
        ev.preventDefault();
        this.setState({ error: null })
        const { bev_id, bev_name, bev_type, rating, user_review } = ev.target

        BeveragesApiService.postReview({
            user_id: '6',
            bev_id: bev_id.value,
            bev_name: bev_name.value,
            bev_type: bev_type.value,
            rating: rating.value,
            user_review: user_review.value
        })
        .then(review => 
            bev_id.value='',
            bev_name.value='',
            bev_type.value='',
            rating.value='',
            user_review.value='',
        )
        .catch(res => {
            this.setState({ error: res.error })
        })
    }


    validateBevName(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages };
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.bev_name = 'Beverage name is required';
            hasError = true;
        } else {
            if (fieldValue.length < 10) {
                fieldErrors.bev_name = 'Beverage name must be at least 3 characters long';
                hasError = true;
            } else {
                fieldErrors.bev_name = '';
                hasError = false;
            }
        }

        this.setState({
            validationMessages: fieldErrors,
            bev_nameValid: !hasError
        }, this.formValid);

    }

    validateUserReview(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages };
        let hasError = false;

        fieldValue = fieldValue.trim();
        if (fieldValue.length === 0) {
            fieldErrors.user_review = 'Beverage review is required';
            hasError = true;
        } else {
            if (fieldValue.length < 3) {
                fieldErrors.user_review = 'Beverage review must be at least 10 characters long';
                hasError = true;
            } else {
                fieldErrors.user_review = '';
                hasError = false;
            }
        }

        this.setState({
            validationMessages: fieldErrors,
            user_reviewValid: !hasError
        }, this.formValid);

    }

    render() {
        return (
            <section className='review-page'>
                <div className='add-review-description'>
                    <h3>Add your review here!</h3>
                </div>
                <div>
                    <form className='add-review-form' onSubmit={this.handleReviewSubmit}>
                        <fieldset>
                            <legend>Review</legend>
                            <div className='field'>
                                <input type='hidden' id='bev_id' value={this.context.bev_id} />
                                <input type='hidden' id='bev_name' value={this.context.bev_name} />
                                <input type='hidden' id='bev_type' value={this.context.bev_type} />
                                <label>How did you like it?</label>
                                <textarea
                                    type='text'
                                    name='user_review'
                                    id='user_review'
                                />
                                <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.user_review} />

                            </div>
                            <div className='field'>
                                <label htmlFor='rating'>Rating{' '}</label>
                                <select
                                    type='select'
                                    id='rating'
                                    name='rating'
                                    aria-label='Rate your bev!'
                                >
                                    <option value='1' >1</option>
                                    <option value='2' >2</option>
                                    <option value='3' >3</option>
                                    <option value='4' >4</option>
                                    <option value='5' >5</option>
                                </select>
                            </div>
                            <button type='submit' className='add-review-button'>Submit Review</button>
                        </fieldset>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddReview;
