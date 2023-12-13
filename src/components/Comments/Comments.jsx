import styles from './Comments.module.css'
import { RatingProduct } from '../Rating/Rating'
import { format, parseISO } from 'date-fns';
import React, { useState, useEffect } from 'react';

export function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('src/components/Comments/comments.json');
      const data = await response.json();
        setComments(data);
    };
    fetchComments();
  }, [])

  return(
    <section className={styles.containerSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>Avaliações do Produto</h3>
        </div>
        {comments.map((comment) => (
          <ListComments key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  )
}

function ListComments({name, date, message, evaluation}) {

  let formattedDate;
  if (date) {
    const dateObject = parseISO(date.toString());
    formattedDate = format(dateObject, 'dd/MM/yyyy HH:mm');
  } else {
    formattedDate = null;
  }
  
  return(
    <div className={styles.containerComments}>
      <div className={styles.boxName}>
        <p>{name}</p>
      </div>
      <div className={styles.boxDate}>
        <p>{formattedDate}</p>
      </div>
      <div className={styles.boxEvaluation}>
        <RatingProduct evaluation={evaluation} valueReadOnly={true}/>
      </div>
      <div className={styles.boxComment}>
        <p>{message}</p>
      </div>
    </div>
  )
}
