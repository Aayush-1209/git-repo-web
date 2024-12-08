import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import AddUserForm from "./AddUserForm";
export const ThemeContext = createContext();

const App = () => {
  const [users, setUsers] = useState([]);
  const firebaseURL = "https://newproject-da395-default-rtdb.firebaseio.com/addUsers.json";

  const fetchUsers = async () => {
    setLoading(true);
      const res = await axios.get(firebaseURL);
      const userList = res.data
        ? Object.entries(res.data).map(([key, value]) => ({ id: key, ...value }))
        : [];
      setUsers(userList);
    
  };

  const handleDelete = async (userId) => {
      await axios.delete(`https://newproject-da395-default-rtdb.firebaseio.com/addUsers/${userId}.json`);
      setUsers(users.filter((user) => user.id !== userId));
    }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    
      <div>
        <h1>User Dashboard</h1>
          <div>
            {users.map((user) => (
              <UserCard key={user.id} user={user} onDelete={handleDelete} />
            ))}
          </div>
        <AddUserForm fetchUsers={fetchUsers} />
      </div>
   
  );
}
export default App;
