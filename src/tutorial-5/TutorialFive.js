import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Form } from './components/Form/Form';
import { FeedbackList } from './components/FeedbackList/FeedbackList';

export const TutorialFive = () => {
  const [feedbacksData, setFeedbacksData] = useState(
    JSON.parse(localStorage.getItem('comments')) || [],
  );
  const handleAddFeedback = (obj) => {
    setFeedbacksData([...feedbacksData, obj]);
  };

  const handleDeleteFeedback = (id) => {
    setFeedbacksData(feedbacksData.filter((_, idx) => idx !== id));
  };

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(feedbacksData));
  }, [feedbacksData]);

  return (
    <Container maxWidth="sm">
      <FeedbackList feedbacks={feedbacksData} onDeleteFeedback={handleDeleteFeedback} />
      <br />
      <Form onAddFeedback={handleAddFeedback} />
    </Container>
  );
};
