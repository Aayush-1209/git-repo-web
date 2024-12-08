import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [addUser , setAddUser] = useState({
        name:"",
        bio:"",
        email:"",
        pp:""
    })
  const [users, setUsers] = useState([]);

   async function handleChange(e){

    const {name , value} = e.target
    setAddUser({...addUser , [name]:value})
   }

   async function handleAdd() {

    await axios.post('https://newproject-da395-default-rtdb.firebaseio.com/addUsers.json', addUser)
    getUserData()
    setAddUser(
        {
            name:"",
            bio:"",
            email:"",
            pp:""
        }
    )
    
}

  async function getUserData() {
    try {
      const res = await axios.get("https://newproject-da395-default-rtdb.firebaseio.com/addUsers.json");
      let arr = [];
      for (let key in res.data) {
        arr.push({ id: key, ...res.data[key] });
      }
      setUsers(arr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div>
        <h1>User Details</h1>

        {users.length > 0 ? (
          users.map((data) => (
            <div key={data.id}>
              <h3>Name: {data.name}</h3>
              <h6>Bio: {data.bio}</h6>
              <p>Email: {data.email}</p>
              <img src="{data.pp}" alt="" />
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <div>
             <h3>Add users</h3>
             <input type="text" name="name" placeholder="Enter name" value={addUser.name} onChange={handleChange} />
             <input type="text" name="email" placeholder="Enter email" value={addUser.email} onChange={handleChange} />
             <input type="text" name="bio" placeholder="Enter bio" value={addUser.bio} onChange={handleChange} />
             <input type="text" name="pp" placeholder="Enter profile url" value={addUser.pp} onChange={handleChange} />
             <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
