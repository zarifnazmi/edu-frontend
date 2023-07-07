// import { testEpic } from './testHelpers'; // import the helper
// import { SuggestionActionTypes } from '../actions/suggestionsAction';
// import { loadSuggestions, addFeedback } from '../../../api/reviewService';
// import { FeedbackActionTypes } from '../actions/feedbackAction';
// import { of } from 'rxjs';
// import { loadSuggestionsEpic, addFeedbackEpic } from '../epics/reviewEpics';
// import { mocked } from 'jest-mock';

// jest.mock('../../../api/reviewService');

// describe('loadSuggestionsEpic', () => {
//   it('should dispatch loadingSuggestions, then loadedSuggestions on successful API call', () => {
//     mocked(loadSuggestions).mockImplementation(() => Promise.resolve({ suggestions: {
//       okaySuggestions: [
//         'I felt bored a few times.',
//         'I can only understand some parts.',
//         'I can only do some of the activities.',
//         'I wish to interact more with my tutor.',
//         'I wish to interact more with my classmates',
//     ],
//       awesomeSuggestions: [
//         'I did not feel bored at all.',
//         'I understood almost everything.',
//         'I can do all the activities.',
//         'I enjoyed interacting with my tutor.',
//         'I enjoyed interacting with my classmates',
//     ]
//     }}));

//     const { emitAction, epicEmissions } = testEpic(loadSuggestionsEpic);

//     console.log('epicEmissions 1', epicEmissions, [
//       { type: SuggestionActionTypes.LOADING_SUGGESTIONS },
//       { type: SuggestionActionTypes.LOADED_SUGGESTIONS, payload: { suggestions: {
//         okaySuggestions: [
//           'I felt bored a few times.',
//           'I can only understand some parts.',
//           'I can only do some of the activities.',
//           'I wish to interact more with my tutor.',
//           'I wish to interact more with my classmates',
//       ],
//         awesomeSuggestions: [
//           'I did not feel bored at all.',
//           'I understood almost everything.',
//           'I can do all the activities.',
//           'I enjoyed interacting with my tutor.',
//           'I enjoyed interacting with my classmates',
//       ]
//       } } }
//     ]);
//     emitAction({ type: SuggestionActionTypes.LOAD_SUGGESTIONS });

//     expect(epicEmissions).toEqual([
//       { type: SuggestionActionTypes.LOADING_SUGGESTIONS },
//       { type: SuggestionActionTypes.LOADED_SUGGESTIONS, payload: { suggestions: {
//         okaySuggestions: [
//           'I felt bored a few times.',
//           'I can only understand some parts.',
//           'I can only do some of the activities.',
//           'I wish to interact more with my tutor.',
//           'I wish to interact more with my classmates',
//       ],
//         awesomeSuggestions: [
//           'I did not feel bored at all.',
//           'I understood almost everything.',
//           'I can do all the activities.',
//           'I enjoyed interacting with my tutor.',
//           'I enjoyed interacting with my classmates',
//       ]
//       } } }
//     ]);
//   });

//   it('should dispatch loadingSuggestions, then loadingSuggestionsFailed on failed API call', () => {
//     mocked(loadSuggestions).mockImplementation(() => Promise.reject());

//     const { emitAction, epicEmissions } = testEpic(loadSuggestionsEpic);

//     console.log('epicEmissions 2', epicEmissions);
//     emitAction({ type: SuggestionActionTypes.LOAD_SUGGESTIONS });

//     expect(epicEmissions).toEqual([
//       { type: SuggestionActionTypes.LOADING_SUGGESTIONS },
//       { type: SuggestionActionTypes.LOADING_SUGGESTIONS_FAILED }
//     ]);
//   });
// });

// describe('addFeedbackEpic', () => {
//   it('should dispatch addingFeedback, then addedFeedback on successful API call', () => {
//     mocked(addFeedback).mockImplementation(() => Promise.resolve());

//     const { emitAction, epicEmissions } = testEpic(addFeedbackEpic);

//     emitAction({ type: FeedbackActionTypes.ADD_FEEDBACK, payload: { feedback: { email: 'zarifnazmi@gmail.com', type: 'Test', comment: 'This is a test' }}});

//     expect(epicEmissions).toEqual([
//       { type: FeedbackActionTypes.ADDING_FEEDBACK },
//       { type: FeedbackActionTypes.ADDED_FEEDBACK }
//     ]);
//   });

//   it('should dispatch addingFeedback, then addingFeedbackFailed on failed API call', () => {
//     mocked(addFeedback).mockImplementation(() => Promise.reject());

//     const { emitAction, epicEmissions } = testEpic(addFeedbackEpic);

//     emitAction({ type: FeedbackActionTypes.ADD_FEEDBACK, payload: { feedback: { email: 'zarifnazmi@gmail.com', type: 'Test', comment: 'This is a test' }}});

//     expect(epicEmissions).toEqual([
//       { type: FeedbackActionTypes.ADDING_FEEDBACK },
//       { type: FeedbackActionTypes.ADDING_FEEDBACK_FAILED }
//     ]);
//   });
// });
