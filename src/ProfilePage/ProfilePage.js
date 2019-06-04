import React from 'react';
import './ProfilePage.css';
import {Link} from 'react-router-dom';

class ProfilePage extends React.Component {
    render() {
        return(
            <section className="profile-page">
                <div className="user-reviews-main">
                    <h2>Posted Reviews:</h2>
                        <ul className="user-reviews-list">
                            <li className="user-reviews">
                            <h4>Example Review Title</h4>
                            <p>Example review description!! ******</p>
                            <button className="edit-review">Edit</button>
                            <button className="delete-review">Delete</button>
                            </li>

                            <li className="user-reviews">
                            <h4>Example Review Title</h4>
                            <p>Example review description!! ******</p>
                            <button className="edit-review">Edit</button>
                            <button className="delete-review">Delete</button>
                            </li>
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