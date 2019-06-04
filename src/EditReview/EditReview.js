import React from 'react';
import './EditReview.css';

class EditReview extends React.Component{
    render() {
        return(
            <section className='edit-review-page'>
                <div className='add-review-description'>
                    <h3>Edit your review here!</h3>
                </div>
                <div>
                    <form className='add-review-form'>
                        <fieldset>
                            <legend>Edit Review</legend>
                            <h5>Beverage Name</h5>
                            <label>Change your mind?</label>
                            <textarea type='text' name='review' id='edit-review' defaultValue='Write your thoughts here!'/>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <button className='edit-review-button' /*value='edit-review'*/>Submit Review</button>
                        </fieldset>
                    </form>
                </div>
        </section>
        )
    }
}

export default EditReview;