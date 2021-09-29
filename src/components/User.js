import { Link } from 'react-router-dom';

function User({ user, removeUser, editUser, index }) {
  return (
    <li className="flex w-1/2 justify-between items-center border border-dashed mt-3 p-3 bg-blue-300">
      <div>
        <h3 className="capitalize text-2xl text-gray-700">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.username}</p>
      </div>
      <Link to={{
                  pathname: `/edit/${user.username}`,
                  id: index
                }} >
                  <button>Edit</button>
      </Link>
      {/* <button onClick={() => editUser(index)}>Edit</button> */}
      <span
        onClick={() => removeUser(index) }
        className="text-red-500 cursor-pointer hover:text-red-900 font-bold"
      >
        X
      </span>
    </li>
  );
}

export default User;
