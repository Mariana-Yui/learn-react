/**
 * 用于替代类组件中的this.state/setState
 */
import React, { useState } from 'react';

export default function ComplexStateHook() {
  const [friends, setFriends] = useState(['kobe', 'lilei']);
  const [students, setStudents] = useState([
    { id: 110, name: 'why', age: 18 },
    { id: 111, name: 'kobe', age: 30 },
    { id: 112, name: 'lilei', age: 25 },
  ]);

  function increaseAge(index) {
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>01_ComplexStateHook</h2>
      <h2>好友列表:</h2>
      <ul>
        {friends.map((friend, index) => {
          return <li key={index}>{friend}</li>;
        })}
      </ul>
      <button onClick={(e) => setFriends([...friends, 'tom'])}>添加朋友</button>

      <h2>学生列表:</h2>
      <ul>
        {students.map(({ id, name, age }, index) => {
          return (
            <li key={id}>
              姓名: {name} - 年龄: {age}
              <button onClick={(e) => increaseAge(index)}>Age + 1</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
