import { IFeedbackItem, ISuggestionItem } from '../../types/IReviewItem';

export enum ReviewActionTypes {
    LOAD_SUGGESTIONS = 'suggestions/load',
    LOADING_SUGGESTIONS = 'suggestions/loading',
    LOADED_SUGGESTIONS = 'suggestions/loaded',
    LOADING_SUGGESTIONS_FAILED = 'suggestions/loading_failed',

    ADD_FEEDBACK = 'feedback/add',
    ADDING_FEEDBACK = 'feedback/adding',
    ADDED_FEEDBACK = 'feedback/added',
    ADDING_FEEDBACK_FAILED = 'feedback/adding_failed',
}

export interface ILoadSuggestionsAction {
    type: ReviewActionTypes.LOAD_SUGGESTIONS,
    // payload: {
    //     input: string;
    //   };
}

export interface ILoadingSuggestionsAction {
    type: ReviewActionTypes.LOADING_SUGGESTIONS
}

export interface ILoadedSuggestionsAction {
    type: ReviewActionTypes.LOADED_SUGGESTIONS,
    payload: {
        suggestions: ISuggestionItem;
    }
}

export interface ILoadingSuggestionsFailedAction {
    type: ReviewActionTypes.LOADING_SUGGESTIONS_FAILED
}

export function loadSuggestions(): ILoadSuggestionsAction {
    return {
        type: ReviewActionTypes.LOAD_SUGGESTIONS
    }
}

export function loadingSuggestions(): ILoadingSuggestionsAction {
    return {
        type: ReviewActionTypes.LOADING_SUGGESTIONS
    }
}

export function loadedSuggestions(suggestions: ISuggestionItem): ILoadedSuggestionsAction {
    return {
        type: ReviewActionTypes.LOADED_SUGGESTIONS,
        payload: {
            suggestions
        }
    }
}

export function loadingSuggestionsFailed(): ILoadingSuggestionsFailedAction {
    return {
        type: ReviewActionTypes.LOADING_SUGGESTIONS_FAILED
    }
}

export interface IAddFeedbackAction {
    type: ReviewActionTypes.ADD_FEEDBACK,
    payload: {
        feedback: IFeedbackItem;
      };
}

export interface IAddingFeedbackAction {
    type: ReviewActionTypes.ADDING_FEEDBACK
}

export interface IAddedFeedbackAction {
    type: ReviewActionTypes.ADDED_FEEDBACK,
    // payload: {
    //     feedback: IFeedbackItem;
    // }
}

export interface IAddingFeedbackFailedAction {
    type: ReviewActionTypes.ADDING_FEEDBACK_FAILED
}

export function addFeedback(feedback: IFeedbackItem): IAddFeedbackAction {
    return {
        type: ReviewActionTypes.ADD_FEEDBACK,
        payload: {
            feedback
        }
    }
}

export function addingFeedback(): IAddingFeedbackAction {
    return {
        type: ReviewActionTypes.ADDING_FEEDBACK
    }
}

export function addedFeedback(): IAddedFeedbackAction {
    return {
        type: ReviewActionTypes.ADDED_FEEDBACK
    }
}

export function addingFeedbackFailed(): IAddingFeedbackFailedAction {
    return {
        type: ReviewActionTypes.ADDING_FEEDBACK_FAILED
    }
}

export type ReviewAction = IAddFeedbackAction | IAddingFeedbackAction | IAddedFeedbackAction | IAddingFeedbackFailedAction | ILoadSuggestionsAction | ILoadingSuggestionsAction | ILoadedSuggestionsAction | ILoadingSuggestionsFailedAction;