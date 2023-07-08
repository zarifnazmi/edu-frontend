import { IFeedbackItem } from "../types/IReviewItem";

export const loadSuggestions = () =>
  fetch(
    process.env.REACT_APP_SUGGESTIONS_API
  ).then(response => response.json());

export const addFeedback = (feedback: IFeedbackItem) =>
  fetch(
    process.env.REACT_APP_FEEDBACK_API, {
        body: JSON.stringify(feedback),
          headers: {
            "content-Type": "application/json"
          },
          method: "POST"
    }
  ).then(response => response.json());