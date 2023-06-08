import React, { useState } from "react";

const UserContext = React.createContext({
  users: [],
});

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};

export default UserContext;
