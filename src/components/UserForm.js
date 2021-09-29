import { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    addUser(name, username );
    setName("");
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col w-1/2 mx-auto items-center border p-5 bg-blue-100 rounded-md shadow-md">
      <input
        type="text"
        className="border shadow-md p-2 mt-5 rounded"
        placeholder="Enter Name "
        value={name}
        data-id={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        className="border shadow-md p-2 mt-5 rounded"
        placeholder="Enter Username "
        value={username}
        data-id={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input type="submit" className="mt-5 bg-blue-500 px-3 py-2 rounded shadow-md text-white" value="Add user" />
    </form>
  );
}

export default UserForm;