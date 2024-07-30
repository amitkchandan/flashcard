
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './FlashcardItem.css';  // Assuming you have a CSS file for styling
import pic1 from './assets/pic1.jpg';

const FlashcardItem = ({ question, answer, flipped, toggleFlip }) => {
  return (
    <div className="flashcard-container" onClick={toggleFlip}>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          <Card className='cards'>
            <Card.Body>
              <Card.Title>Question</Card.Title>
              <Card.Text>{question}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="back">
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={pic1} style={{ width: '80px' }} />
              <Card.Title>Answer</Card.Title>
              <Card.Text>{answer}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlashcardItem;
