import React from 'react';

export const ProfileFunc = ({ name, registredAt }) => {
  return (
    <div className="wrapper">
      <p className="name">
        Привет, <b>{name.split(' ')[0]}</b>
      </p>
      <p>Дата регистрации: {registredAt}</p>
    </div>
  );
};
