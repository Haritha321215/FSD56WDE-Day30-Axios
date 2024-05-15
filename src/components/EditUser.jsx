import  { useState } from 'react';

const EditUser = ({ user, updateUser, setIsEditing }) => {
  const [name, setName] = useState(user.name);
// Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, { ...user, name });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='m-1 text-primary'
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <button className="btn btn-warning btn-sm" type="submit">Update</button>
    </form>
  );
};

export default EditUser;