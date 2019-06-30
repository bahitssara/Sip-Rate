import React from 'react';
import './StarRating.css';

export default function Rating(props) {
  const stars = [0, 0, 0, 0, 0].map((_, i) =>
    (i < props.value)
      ? <span key={i}><i className="fas fa-star" /></span>
      : <span key={i}><i className="far fa-star" /></span>
  );
  return (
    <div className='star-rating'>
      {stars}
    </div>
  );
}
