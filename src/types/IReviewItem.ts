export interface ISuggestionItem {
    emoji: string;
    title: string;
    suggestions: { key: string, label: string }[];
}

export interface IFeedbackItem {
    email: string;
    type: string;
    comment: string;
}