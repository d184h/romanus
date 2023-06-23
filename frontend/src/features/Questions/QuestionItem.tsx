import React, { useState } from 'react';
import { Question } from '../Themes/type/type';
import Modal from '../Modal/Modal';

function QuestionItem({ question }: { question: Question }): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Modal show={show} setShow={setShow} question={question} />
      <button type="button" className="open-btn" onClick={() => setShow(!show)}>
        <h1>{question.count}</h1>
      </button>
    </div>
  );
}

export default QuestionItem;
