import React from "react";
import { Question } from "../Themes/type/type";

function QuestionItem({ question }: { question: Question }): JSX.Element {
  return (
    <div>
      <h1>{question.count}</h1>
    </div>
  );
}

export default QuestionItem;
