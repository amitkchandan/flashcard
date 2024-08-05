
import React, { useState } from 'react';
import './FlashcardItem.css';  // Assuming you have a CSS file for styling
import pic1 from './assets/pic1.jpg';

const FlashcardItem = ({ question, answer, flipped, toggleFlip }) => {
  return (
    <div className="flashcard-container" onClick={toggleFlip}>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
        <div className="front cards">
          <div className="card-title">Question</div>
          <div className="card-text">{question}</div>
        </div>
        <div className="back cards">
          <img src={pic1} className="card-img" alt="related" />
          <div className="card-title">Answer</div>
          <div className="card-text">{answer}</div>
        </div>
      </div>
    </div>
  );
};
export default FlashcardItem;
