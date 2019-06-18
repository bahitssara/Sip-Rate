import React from 'react';
import './EditReview.css';
import SipRateContext from '../SipRateContext';
import ValidationError from '../ValidationError/ValidationError'
import config from '../config'


class EditReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bev_id: '',
            bev_name: '',
            bev_type: '',
            id: '',
            rating: '',
            user_id: '',
            user_review: '',
            ratingValid: false,
            user_reviewValid: false,
            formValid: false,
            validationMessages: {
                bev_name: '',
                bev_type: '',
                rating: '',
                user_review: ''
            }
        }
    }

    static contextType = SipRateContext;

    editRating(rating) {
        this.setState({rating})
    }

    editUserReview(user_review) {
        this.setState({user_review}, () => {this.validateUserReview(user_review)})
    }

    cancelEdit = e => {
        this.props.history.push('/profilepage')
    }


    handleReviewSubmit = e => {
        e.preventDefault();
        // const newReview = {bev_id, bev_name, bev_type, id, rating, user_id, user_review} = this.state;
        console.log('note sumbitted')
        // this.context.addReview(newReview)
        this.props.history.push('/profilepage')

    }

    validateUserReview(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;
    
        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
          fieldErrors.user_review = 'Beverage review is required';
          hasError = true;
        } else {
          if (fieldValue.length < 10) {
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
        }, this.formValid );
    
    }

    render() {
        return(
            <section className='edit-review-page'>
                <div className='add-review-description'>
                    <h3>Edit your review here!</h3>
                </div>
                <div>
                    <form className='add-review-form' onSubmit={e => this.handleReviewSubmit(e)}>
                        <fieldset>
                            <legend>Edit Review</legend>
                            <h5>Beverage Name</h5>
                            <div className='field'>
                                <label>Change your mind?</label>
                                <textarea 
                                    type='text' 
                                    name='user_review' 
                                    id='user-review' 
                                    value={this.state.user_review}
                                    onChange={e => this.editUserReview(e.target.value)}
                                />
                                <ValidationError hasError={!this.state.user_reviewValid} message={this.state.validationMessages.user_review}/>

                            </div> 
                            <div className='field'>
                                <label htmlFor='rating'>Rating{' '}</label>
                                    <input
                                    type='number'
                                    name='rating'
                                    id='rating'
                                    value={this.state.rating}
                                    onChange={e => this.editRating(e.target.value)}
                                    min='1'
                                    max='5'
                                    required
                                />
                            </div>  
                            <button className='edit-review-button' /*value='edit-review'*/>Submit Review</button>
                            <button className='cancel-review-button' onClick={e => this.cancelEdit()}>Cancel</button>

                        </fieldset>
                    </form>
                </div>
        </section>
        )
    }
}

export default EditReview;