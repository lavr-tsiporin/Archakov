import React, { useState } from 'react';

export const TutorialEight = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch('https://617cf7151eadc50017136369.mockapi.io/api/archakov/users')
      if (response.ok){
        const result = await response.json()
        setUsers(result)
      }
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>
            {obj.id}. {obj.name}
          </li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
};
