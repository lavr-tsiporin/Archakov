import React from 'react';

export const ProfileFunc = ({ data }) => {
  const { name, date } = data
  return (
    <div className="wrapper">
      <p className="name">Привет, <b>{name}</b></p>
      <p>Дата регистрации: {date}</p>
    </div>
  );
};
