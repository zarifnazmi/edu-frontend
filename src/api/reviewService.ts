import { IFeedbackItem } from "../types/IReviewItem";

export const loadSuggestions = () =>
  fetch(
    `http://localhost:8000/review/suggestions`
  ).then(response => response.json());

export const addFeedback = (feedback: IFeedbackItem) =>
  fetch(
    `http://localhost:8000/review/feedbacks`, {
        body: JSON.stringify(feedback),
          headers: {
            "content-Type": "application/json"
          },
          method: "POST"
    }
  ).then(response => response.json());