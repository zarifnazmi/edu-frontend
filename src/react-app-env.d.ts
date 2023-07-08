 /// <reference types="react-scripts" />

 declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SUGGESTIONS_API: string;
      REACT_APP_FEEDBACK_API: string;
    }
  }