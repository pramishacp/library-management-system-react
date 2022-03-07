import React from "react";
import UserItem from "./userItem";

const UserList = ({ users, currentUser, onLogin }) => {
  return (
    <React.Fragment>
      <ol>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} currentUser={currentUser} onLogin={onLogin}/>;
        })}
      </ol>
    </React.Fragment>
  );
};

export default UserList;
