import React, { useState } from 'react';
import { CardHeader, CardContent, TextField, Button, Card } from '@mui/material';

export const Form = ({ onAddFeedback }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    text: '',
    error: {
      fullName: false,
      email: false,
      text: false,
    },
  });

  const refreshFormAndAddFeedback = () => {
    const error = {
      fullName: false,
      email: false,
      text: false,
    };

    Object.keys(error).forEach((key) => {
      error[key] = !formData[key];
    });

    if (error.fullName || error.email || error.text) {
      return setFormData({ ...formData, error });
    }

    setFormData({
      fullName: '',
      email: '',
      text: '',
      error: {
        fullName: false,
        email: false,
        text: false,
      },
    });

    onAddFeedback({
      fullName: formData.fullName,
      email: formData.email,
      createdAt: new Date().toDateString(),
      text: formData.text,
    });
  };

  const updateDataFeedback = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
      error: {
        ...formData.error,
        [key]: false,
      },
    });
  };

  return (
    <>
      <Card>
        <CardHeader title={<b>Обратная связь</b>} />
        <CardContent>
          <TextField
            id="name"
            fullWidth
            label="Имя"
            variant="outlined"
            margin="dense"
            error={formData.error.fullName}
            value={formData.fullName}
            onChange={(e) => updateDataFeedback(e, 'fullName')}
            required
          />
          <TextField
            id="email"
            fullWidth
            label="Почта"
            variant="outlined"
            margin="dense"
            error={formData.error.email}
            value={formData.email}
            onChange={(e) => updateDataFeedback(e, 'email')}
            required
          />
          <TextField
            id="text"
            fullWidth
            label="Текст..."
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
            error={formData.error.text}
            value={formData.text}
            onChange={(e) => updateDataFeedback(e, 'text')}
            required
          />
          <Button
            sx={{ marginTop: '10px' }}
            variant="contained"
            fullWidth
            onClick={refreshFormAndAddFeedback}>
            Отправить
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
