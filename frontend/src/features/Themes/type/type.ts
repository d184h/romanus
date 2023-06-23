export type Theme = {
  tQuestions: any;
  id: number;
  name: string;
  Questions: Questions[];
};
export type Questions = {
  id: number;
  theme_id: number;
  text: string;
  count: number;
  trueAnswer: string;
};
export type State = {
  themes: Theme[];
  questions: Questions[];
};
