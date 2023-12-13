import styles from './UserQuestion.module.css'
import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

export function UserQuestion() {

  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('src/components/UserQuestion/userQuestion.json');
      const data = await response.json();
      setQuestion(data);
    };
    fetchQuestion();
  }, [])

  return(
    <section className={styles.containerSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Perguntas e Respostas</h3>
        </div>
        <div className={styles.lastQuestions}>
          <h4>Últimas perguntas feitas</h4>
        </div>
        {questions.map((question) => (
          <ListQuestion key={question.id} {...question} />
        ))}
      </div>
    </section>
  )
}

function ListQuestion({ name, date, question, answer }) {

  let formattedDate;

  if (date) {
    const dateObject = parseISO(date.toString());
    formattedDate = format(dateObject, 'dd/MM/yyyy HH:mm');
  } else {
    formattedDate = null;
  }
  
  return(
    <div className={styles.containerAsk}>
      <div className={styles.boxName}>
        <p>{name}</p>
      </div>
      <div className={styles.boxDate}>
        <p>{formattedDate}</p>
      </div>
      <div className={styles.boxQuestion}>
        <p>{question}</p>
      </div>
      <div className={styles.boxAnswer}>
        <p>{answer}</p>
      </div>
    </div>
  )
}