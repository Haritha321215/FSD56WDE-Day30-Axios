import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import AddUser from "./AddUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // Function to add a new user to the API and update the state
  const addUser = async (user) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user
      );
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  // Function to update an existing user in the API and update the state
  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updatedUser
      );
      setUsers(users.map((user) => (user.id === id ? response.data : user)));
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  // Function to delete a user from the API and update the state
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-4 text-primary">User List</h1>
      <div className="m-4">
        <AddUser addUser={addUser} />
      </div>
      <div className="">
        <ul className="list-unstyled">
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
