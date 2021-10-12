import React from 'react';

export const TutorialTwo = () => {
  let email = '';
  let password = '';

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    return name === 'email' ? (email = value.trim()) : (password = value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      return alert('Need fill all inputs');
    }

    console.log({ login: email, password });
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="e-mail" name="email" onChange={(e) => handleChangeInput(e)} />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={(e) => handleChangeInput(e)}
      />
      <button type="submit">Войти</button>
    </form>
  );
};
