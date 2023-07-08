import React from 'react';
import '../index.css'
import { ReviewPopupContainer } from '../features/reviews/containers/ReviewPopupContainer';

function Review() : JSX.Element {
  return (
    <div className="center-screen">
      <ReviewPopupContainer />
    </div>
  );
}

export default Review;
