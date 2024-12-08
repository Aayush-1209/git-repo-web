import React  from "react";

const UserCard = ({ user, onDelete }) => {
  return (
    <div >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.bio}</p>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
