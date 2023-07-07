import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reviewEpic from '../features/reviews/reviewEpic';
import { IState } from './rootReducer';
import { Action } from 'redux';

export const rootEpic = combineEpics(reviewEpic);

export default createEpicMiddleware<Action, Action, IState>();