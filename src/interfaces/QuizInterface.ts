export interface Option {
  id: number;
  text: string;
  is_correct: boolean;
  explanation: string;
}

export interface Question {
  id: number;
  question_text: string;
  difficulty: string;
  options: Option[];
}

export interface Quiz {
  id: number;
  name: string;
  description: string;
  icon_name: string;
  questions: Question[];
}
