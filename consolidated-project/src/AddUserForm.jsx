import React, { useState } from "react";
import axios from "axios";

const AddUserForm = ({ fetchUsers }) => {
  const [formData, setFormData] = useState({ name: "", email: "", bio: "" });

  const firebaseURL = "https://newproject-da395-default-rtdb.firebaseio.com/addUsers.json";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    
      await axios.post(firebaseURL, users);
      fetchUsers();
      setFormData({ name: "", email: "", bio: "" });
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
