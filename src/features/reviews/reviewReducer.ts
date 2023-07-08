import { produce } from 'immer'
import { ApiStatus } from '../../types/ApiStatus';
import { IFeedbackItem, ISuggestionItem } from '../../types/IReviewItem';
import { ReviewAction, ReviewActionTypes } from './reviewAction';

export interface IReviewState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  suggestions: ISuggestionItem[];
  feedback: IFeedbackItem;
}

export const initialReviewState: IReviewState = {
  loadingStatus: ApiStatus.LOADED,
  addingStatus: ApiStatus.LOADED,
  suggestions: [],
  feedback: {
    email: '',
    type: '',
    comment: ''
  }
};

export default function reviewReducer(state: IReviewState = initialReviewState, action: ReviewAction) {
  return produce(state, draft => {
    switch (action.type) {
      case ReviewActionTypes.LOAD_SUGGESTIONS:
      case ReviewActionTypes.LOADING_SUGGESTIONS:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case ReviewActionTypes.LOADING_SUGGESTIONS_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case ReviewActionTypes.LOADED_SUGGESTIONS:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.suggestions = action.payload.suggestions
        break;
      case ReviewActionTypes.ADD_FEEDBACK:
        return { ...state, feedback: action.payload.feedback };
      case ReviewActionTypes.ADDING_FEEDBACK:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case ReviewActionTypes.ADDING_FEEDBACK_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case ReviewActionTypes.ADDED_FEEDBACK:
        draft.loadingStatus = ApiStatus.LOADED;
        break;
    }
  });
}