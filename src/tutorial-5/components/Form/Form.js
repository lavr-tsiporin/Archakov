import React, { useState } from 'react';
import { CardHeader, CardContent, TextField, Button, Card } from '@mui/material';

export const Form = ({ onAddFeedback }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    text: '',
    error: {
      name: false,
      email: false,
      text: false,
    },
  });

  const refreshFormAndAddFeedback = () => {
    const error = {
      name: false,
      email: false,
      text: false,
    };

    if (formData.fullName === '') {
      error.name = true;
    }

    if (formData.email === '') {
      error.email = true;
    }

    if (formData.text === '') {
      error.text = true;
    }

    if (error.name || error.email || error.text) {
      return setFormData({ ...formData, error });
    }

    setFormData({
      fullName: '',
      email: '',
      text: '',
      error: {
        name: false,
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
            error={formData.error.name}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName: e.target.value,
                error: {
                  ...formData.error,
                  name: false,
                },
              })
            }
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
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
                error: {
                  ...formData.error,
                  email: false,
                },
              })
            }
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
            onChange={(e) =>
              setFormData({
                ...formData,
                text: e.target.value,
                error: {
                  ...formData.error,
                  text: false,
                },
              })
            }
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
