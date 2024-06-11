import { useRouter } from 'next/router';
import React from 'react';
import styles from './popup.module.css';

const Popup = ({ message, isSuccess, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <p>{message}</p>
        {isSuccess ? (
          <button onClick={onClose}>See Results</button>
        ) : (
          <button onClick={onClose}>OK</button>
        )}
      </div>
    </div>
  );
};

export default Popup;
