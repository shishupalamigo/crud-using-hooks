import { useState } from 'react';
import { withRouter } from 'react-router-dom';

function EditUser(props) {
  let id = props.location.id;
  let [name, setName] = useState(
    JSON.parse(localStorage.getItem('data'))[id].name
  );
  let [username, setUserName] = useState(
    JSON.parse(localStorage.getItem('data'))[id].username
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem('data'));
    let obj = { name, username };
    data[id] = obj;
    localStorage.setItem('data', JSON.stringify(data));
    props.history.push('/');
  };
  const handleChange = ({ target }) => {
    let { id } = target.dataset;
    if (id === 'name') {
      setName(target.value);
    }
    if (id === 'username') {
      setUserName(target.value);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col w-1/2 mx-auto items-center border p-5 bg-blue-100 rounded-md shadow-md"
      >
        <input
          value={name}
          type="text"
          placeholder="Enter Name"
          data-id="name"
          onChange={handleChange}
          className="border shadow-md p-2 mt-5 rounded"
        />
        <input
          value={username}
          type="text"
          placeholder="Enter Username"
          data-id="username"
          onChange={handleChange}
          className="border shadow-md p-2 mt-5 rounded"
        />
        <input
          type="submit"
          value="Update User"
          className="mt-5 bg-blue-500 px-3 py-2 rounded shadow-md text-white"
        />
      </form>
    </>
  );
}

export default withRouter(EditUser);
