import React, { useState } from 'react';
import '../styles/style.css';
import { useDispatch } from 'react-redux';

function CardPage(): JSX.Element {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ answer }),
    });
    const data = await res.json();
    dispatch({ type: 'answer/check', payload: data });
  };
  return (
    <form className="container__card" onSubmit={onHandleSubmit}>
      <div className="card">
        <div className="question">Вопрос: Какой ваш любимый цвет?</div>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          className="answer-input"
          placeholder="Введите ваш ответ"
        />
        <button type="submit">OTVED</button>
      </div>
    </form>
  );
}

export default CardPage;
