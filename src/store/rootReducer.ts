import { combineReducers } from 'redux';
import reviewReducer, { IReviewState, initialReviewState} from '../features/reviews/reviewReducer';

export interface IState {
    review: IReviewState;
}

export const initialState: IState = {
    review: initialReviewState
};

const rootReducer = combineReducers({
    review: reviewReducer
});

export default rootReducer;
