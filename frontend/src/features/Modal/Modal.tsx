import React, { useState } from 'react';
import './modal.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ThemesItem from '../Themes/ThemeItem';
import QuestionItem from '../Questions/QuestionItem';
import { Question } from '../Themes/type/type';
import { useParams } from 'react-router-dom';

function Modal({
  show,
  setShow,
  question,
}: {
  question: Question;
  show: any;
  setShow: (value: boolean) => void;
}): JSX.Element {
  const [answer, setAnswer] = useState('');
  // const dispatch = useDispatch();
  const [hint, setHint] = useState(false);
  const questId = useParams();
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        className={show ? 'modal active' : 'modal'}
        onClick={() => setShow(!show)}
      >
        <div
          className={show ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          <form className="container__card" onSubmit={onHandleSubmit}>
            <div className="card">
              <img src={question.question} alt="" className="question" />
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                className="answer-input"
                placeholder="Введите ваш ответ"
              />
              <button onClick={() => setHint((prev) => !prev)} type="button">
                Ответ
              </button>
              {hint && <img src={question.trueAnswer} alt="hint" />}
              {/* <button type="submit">OTVED</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
