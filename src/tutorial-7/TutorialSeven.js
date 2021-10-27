import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';


export const TutorialSeven = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const onSubmit = (values) => console.log('ФОРМА!', values);

  console.log(errors);

  return (
    <div className="App">
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register('firstName', {
            required: 'Это обязательное поле!',
          })}
          helperText={errors.firstName && errors.firstName.message}
          error={Boolean(errors.firstName)}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Фамилия"
          {...register('lastName', {
            required: 'Это обязательное поле!',
          })}
          helperText={errors.lastName && errors.lastName.message}
          error={Boolean(errors.lastName)}
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          {...register('email', {
            required: 'Это обязательное поле!',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: 'Это неверная почта!',
            },
          })}
          helperText={errors.email && errors.email.message}
          error={Boolean(errors.email)}
          name="email"
          label="E-Mail"
          defaultValue=""
          fullWidth
        />
        <TextField
          {...register('password', {
            required: 'Это обязательное поле!',
          })}
          helperText={errors.password && errors.password.message}
          error={Boolean(errors.password)}
          name="password"
          type="password"
          label="Пароль"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField name="about" label="Обо мне" fullWidth />
      </div>
      <br />
      <div className="row">
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Зарегистрироваться
        </Button>
        <Button variant="contained" color="secondary" onClick={() => reset(initialValues)}>
          Очистить
        </Button>
      </div>
    </div>
  );
};
