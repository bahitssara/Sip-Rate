import React from 'react';
import './AddReview.css';

class AddReview extends React.Component{
    render() {
        return(
            <section classNameName='review-page'>
                <div className='add-review-description'>
                    <h3>Add your review here!</h3>
                </div>
                    <div>
                        <form className='add-review-form'>
                        <fieldset>
                            <legend>Review</legend>
                            <label>Beverage Type</label>
                            <select 
                            type='select'
                            id='note-folder-input'
                            value=''
                            >
                            <option value=''>Choose type:</option>
                            <option value='beer'>Beer</option>
                            <option value='wine'>Wine</option>
                            </select>

                            <label>Beverage name</label>
                            <input type='text' name='beverage' id='beverage-input' value='beverage name' />
                            <label>How did you like it?</label>
                            <textarea type='text' name='email' id='email-input' value='Write your thoughts here!'/> 
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <button className='add-review-button' value='add-review'>Submit Review</button>
                        </fieldset>
                        </form>
                    </div>
            </section>
        ) 
    }
}

export default AddReview;