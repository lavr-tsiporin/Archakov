import React from 'react';

export const TutorialTwo = () => {
  let email = '';
  let password = '';

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    return name === 'email' ? (email = value.trim()) : (password = value.trim());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password ) {
      return alert('Need fill all inputs');
    }

    console.log({ login: email, password });
    email=''
    password=''
    event.target.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="e-mail" name="email" onChange={handleChangeInput} />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChangeInput}
      />
      <button type="submit">Войти</button>
    </form>
  );
};
