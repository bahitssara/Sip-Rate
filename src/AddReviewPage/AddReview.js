import React from 'react';
import './AddReview.css';

function AddReview (props) {
    return (
        <section className='review-page'>
            <div className='add-review-description'>
                <h3>Add your review here!</h3>
            </div>
            <div>
                <form className='add-review-form' onSubmit={(e) => props.onAddReview(e)}>
                    <fieldset>
                        <legend>Review</legend>
                        <div className='field'>
                            <input type='hidden' id='bev_id' name='bev_id' value={props.bev_id} />
                            <input type='hidden' id='bev_name' name='bev_name' value={props.bev_name} />
                            <input type='hidden' id='bev_type' name='bev_type' value={props.bev_type} />
                           
                            <label>How did you like it?</label>
                            <textarea
                                type='text'
                                name='user_review'
                                id='user_review'
                            />
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
    )}

export default AddReview;
