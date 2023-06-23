export type Theme = {
  tQuestions: any;
  id: number;
  name: string;
  Questions: Question[];
};
export type Question = {
  id: number;
  theme_id: number;
  question: string;
  count: number;
  trueAnswer: string;
};
export type State = {
  themes: Theme[];
  questions: Question[];
};
