import { useState } from 'react';
import UserForm from './components/UserForm';
import User from './components/User';

function App() {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || []
  );

  const addUser = (name, username) => {
    let obj = { name, username };
    setData(data.concat(obj));
    localStorage.setItem('data', JSON.stringify(data.concat(obj)));
  };
  const removeUser = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(newData));
    setData(newData);
  };
  const editUser = (index) => {
    const newUsers = [...data]
    console.log(newUsers[index]);
    const user = newUsers[index];
    console.log(user.name);
  }
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold mt-10 text-gray-600">
        User List
      </h1>
      <UserForm addUser={addUser} />
      <ul className="text-center mt-10 flex flex-col items-center">
        {data.length !== 0 && (
          <li className="bg-blue-400 w-1/2 p-3 text-gray-900 font-bold">
            {data.length > 1
              ? `${data.length} Users added`
              : `${data.length} User added`}{' '}
          </li>
        )}
        {data.map((user, index) => (
          <User key={index} index={index} user={user} removeUser={removeUser} editUser={editUser} />
        ))}
      </ul>
    </div>
  );
}

export default App;
