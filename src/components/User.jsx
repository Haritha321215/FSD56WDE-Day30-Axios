import { useState } from 'react';
import EditUser from './EditUser';

const User = ({ user, updateUser, deleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className='m-1 p-1'>
      {isEditing ? (
        <EditUser user={user} updateUser={updateUser} setIsEditing={setIsEditing} />
      ) : (
        <center>
          <span className='m-1 text-primary'>{user.name}</span>
          <button className='m-1 btn btn-warning btn-sm' onClick={() => setIsEditing(true)}>Edit</button>
          <button className='m-1 btn btn-danger btn-sm' onClick={() => deleteUser(user.id)}>Delete</button>
        </center>
      )}
    </li>
  );
};

export default User;