import React from 'react';
import { Button } from 'antd';
import EmojiDropdownPopup from '../components/EmojiDropdownPopup';
import { ReviewPopupContainer } from '../features/reviews/containers/ReviewPopupContainer';

function Review() : JSX.Element {
  return (
    <div>
      <ReviewPopupContainer />
    </div>
  );
}

export default Review;
