import { createContext, useContext, useEffect, useState } from "react";
import { getUsers } from "../../platform/api/users-api";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [userLoading, setUSerLoading] = useState(false)

  useEffect(() => {
    getUserData()
}, []);
  
const getUserData = async () => {
  const token = localStorage.getItem('token')

if(token){
    setUSerLoading(true)
    const result = await getUsers()
    if (result && result.data) {
        const user = result.data.find(item => item._id === token)
        if (user) {
            setUSerLoading(false)
            setUsers(user)
        }
    }else{
        setUSerLoading(false)
    }
}
}

  return (
    <UsersContext.Provider value={{ users, setUsers, userLoading }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const testUsers = useContext(UsersContext);

  return {
    users: testUsers.users,
    setUsers: testUsers.setUsers,
    userLoading:testUsers.userLoading
  };
};
