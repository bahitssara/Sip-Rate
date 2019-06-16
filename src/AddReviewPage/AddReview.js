import React from 'react';
import './AddReview.css';
import SipRateContext from '../SipRateContext';
import ValidationError from '../ValidationError/ValidationError'
import config from '../config'

class AddReview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            bev_name: '',
            bev_type: '',
            user_review: '',
            rating: '',
            user_id: '',
            bev_code: '',
            date_added: new Date(),
            bev_nameValid: false,
            bev_typeValid: false,
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

    componentDidMount() {
        const { id } = this.props.match.params
        fetch(config.API_ENDPOINT + `/beverages/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(error =>
                    Promise.reject(error));
        })
        .then(responseData => {
            this.setState({
                id: responseData.id,
                bev_name: responseData.bev_name, 
            })
        })
        .catch(error => {
            console.error({error})
        })
    }

    addBevName(bev_name) {
        this.setState({bev_name}, () => {this.validateBevName(bev_name)})
    }

    addBevType(bev_type) {
        this.setState({bev_type})
    }

    addRating(rating) {
        this.setState({rating})
    }

    addUserReview(user_review) {
        this.setState({user_review}, () => {this.validateUserReview(user_review)})
    }


    handleReviewSubmit = e => {
        e.preventDefault();
        const newReview = (({bev_id, bev_name, bev_type, id, rating, user_id, user_review}) => ({bev_id, bev_name, bev_type, id, rating, user_id, user_review}))(this.state);

        fetch(config.API_ENDPOINT + `/reviews`,{
            method: 'POST',
            body:JSON.stringify(newReview),
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong please try again later');
                 }
                  return res.json();
            })
            .then(() => {
                this.setState({
                    id: '',
                    bev_name: '',
                    bev_type: '',
                    user_review: '',
                    rating: '',
                    bev_id: '',
                    user_id: '',
                    date_added: new Date()
                });
                this.context.AddReview(newReview);
                this.props.history.push('/profilepage')
            })
            .catch(error => {
                console.error({error})
            })        

    }

    validateBevName(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;
    
        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
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
        }, this.formValid );
    
    }

    validateUserReview(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;
    
        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
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
        }, this.formValid );
    
    }

    render() {
        return(
            <section className='review-page'>
                <div className='add-review-description'>
                    <h3>Add your review here!</h3>
                </div>
                    <div>
                        <form className='add-review-form' onSubmit={e => this.handleReviewSubmit(e)}>
                        <fieldset>
                            <legend>Review</legend>
                            <div className='field'>
                                <label>Beverage Type</label>
                                <select 
                                type='select'
                                id='beverage-input'
                                >
                                <option value=''>Choose type:</option>
                                    <option 
                                        value='wine'>wine</option>
                                    <option 
                                        value='beer'>beer</option>
                                </select>
                            </div>
                            <div className='field'>
                            <label>Beverage name</label>
                                <input 
                                    type='text'
                                    name='beverage'
                                    id='beverage-input'
                                    value={this.state.bev_name}
                                    onChange={e => this.addBevName(e.target.value)}
                                />
                                <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.bev_name}/>

                            </div>
                            <div className='field'>
                                <label>How did you like it?</label>
                                <textarea 
                                    type='text' 
                                    name='email' 
                                    id='email-input' 
                                    value={this.state.user_review}
                                    onChange={e => this.addUserReview(e.target.value)}
                                />
                                <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.user_review}/>

                            </div> 
                            <div className='field'>
                                <label htmlFor='rating'>Rating{' '}</label>
                                <select 
                                    type='select'
                                    id='note-folder-input'
                                >
                                <option value={this.state.rating}>Choose rating:</option>
                                    <option value='1' >1</option>
                                    <option value='2' >2</option>
                                    <option value='3' >3</option>
                                    <option value='4' >4</option>
                                    <option value='5' >5</option>
                                </select>
                            </div>  
                            <button className='add-review-button'>Submit Review</button>
                        </fieldset>
                        </form>
                    </div>
            </section>
        ) 
    }
}

export default AddReview;