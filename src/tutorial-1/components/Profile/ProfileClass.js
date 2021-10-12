import React from 'react';

export class ProfileClass extends React.Component {
  render() {
    const { name, registredAt } = this.props;
    return (
      <div className="wrapper">
        <p className="name">
          Привет, <b>{name.split(' ')[0]}</b>
        </p>
        <p>Дата регистрации: {registredAt}</p>
      </div>
    );
  }
}
