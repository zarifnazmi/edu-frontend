import { combineEpics, Epic } from "redux-observable";
import { switchMap, map, startWith, catchError, filter } from "rxjs/operators";
import {
  ReviewAction,
  ReviewActionTypes,
  loadedSuggestions,
  loadingSuggestions,
  loadingSuggestionsFailed,
  addedFeedback,
  addingFeedback,
  addingFeedbackFailed
} from "./reviewAction";
import { from, of } from "rxjs";
import { isOfType } from "typesafe-actions";
import { loadSuggestions } from "../../api/reviewService";
import { addFeedback } from "../../api/reviewService";
import { IState } from "../../store/rootReducer";

const loadSuggestionsEpic: Epic<ReviewAction, ReviewAction, IState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isOfType(ReviewActionTypes.LOAD_SUGGESTIONS)),
    switchMap(action =>
      from(loadSuggestions()).pipe(
        map(response => loadedSuggestions(response)),
        startWith(loadingSuggestions()),
        catchError(() => of(loadingSuggestionsFailed()))
      )
    )
  );

const addedFeedbackEpic: Epic<ReviewAction, ReviewAction, IState> = (
  action$,
  state$
) => action$.pipe(
  filter(isOfType(ReviewActionTypes.ADD_FEEDBACK)),
  switchMap(action =>
    from(addFeedback(action.payload.feedback)).pipe(
      map(response => addedFeedback()),
      startWith(addingFeedback()),
      catchError(() => of(addingFeedbackFailed()))
    )  
  )
)

export default combineEpics(loadSuggestionsEpic, addedFeedbackEpic);