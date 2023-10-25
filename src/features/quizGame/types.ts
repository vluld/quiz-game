export type QuizAnswer = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  answers: QuizAnswer[];
  correctAnswerId: string;
  value: number;
};
