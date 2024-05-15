import { useState } from 'react';

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='m-1 text-primary'
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Add user" 
        required 
      />
      <button className="btn btn-primary btn-sm" type="submit">Add</button>
    </form>
  );
};

export default AddUser;