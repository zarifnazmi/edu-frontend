import { Subject, Observable } from "rxjs";
import { Epic, StateObservable } from "redux-observable";
import { Action } from "redux";

export const testEpic = <ActionType extends Action, State, Dependencies = {}>(
  epic: Epic<ActionType, ActionType, State, Dependencies>,
  deps: Dependencies = {} as Dependencies
) => {
  const actionSubject = new Subject<ActionType>();
  const action$ = actionSubject.asObservable();
  const emitAction = actionSubject.next.bind(actionSubject);

  const stateSubject = new Subject<State>();
  const state$ = new StateObservable(stateSubject, {} as State);
  const emitState = stateSubject.next.bind(stateSubject);

  const epicEmissions: ActionType[] = [];
  epic(action$, state$, deps).subscribe(e => epicEmissions.push(e));

  return { emitAction, emitState, epicEmissions };
};