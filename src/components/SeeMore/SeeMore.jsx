import React, { useState } from 'react';
import styles from './SeeMore.module.css';

export default function SeeMore ({text, range}) {
  const MAX_TEXT_LENGTH = range;
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = text.slice(0, MAX_TEXT_LENGTH);

  return (
    <>
      {showFullText ? text : truncatedText}
      {text.length > MAX_TEXT_LENGTH && (
        <button onClick={toggleText} className={styles.seeMore}>
          {showFullText ? '...Ver menos' : '...Ver mais'}
        </button>
      )}
    </>
  );
};