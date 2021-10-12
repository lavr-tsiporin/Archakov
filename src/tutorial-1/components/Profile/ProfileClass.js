import React from 'react'

export class ProfileClass extends React.Component {
  render() {
    const { name, date } = this.props.data
    return (
      <div className="wrapper">
        <p className="name">Привет, <b>{name}</b></p>
        <p>Дата регистрации: {date}</p>
      </div>
    );
  }
}
