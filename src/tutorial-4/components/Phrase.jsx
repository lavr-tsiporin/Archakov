import React from 'react';

export const Phrase = ({ source }) => {
  return (
    <div className="list">
      {source.map((el, idx) => (
        <div className="block" key={el + idx}>
          <h3>{el}</h3>
        </div>
      ))}
    </div>
  );
};
