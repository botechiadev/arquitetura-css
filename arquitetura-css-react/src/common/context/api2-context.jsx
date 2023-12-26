import { createContext, useState } from 'react';
import { useRequestData } from './../../hooks/useRequestData';
import { URLAPI } from '../constants/URLAPI';

export const Api2Context = createContext();

export const Api2Provider = ({ children }) => {
  const [usersData, isUsersDataLoading, isUsersDataError] = useRequestData(`${URLAPI}users`, []);

  const [users, setUsers] = useState(usersData);

  const listNames = (inputFullName) => {
    return users.filter((user) => user.name.toUpperCase() === inputFullName.toUpperCase());
  };

  const listCpfCnpj = (inputCpfCnpj) => {
    const index = users.findIndex((user) => user.id === inputCpfCnpj);

    if (index !== -1) {
      return users[index].id;
    } else {
      return null;
    }
  };

  const addUser = (user) => {
    // Assuming user is an object with properties like name, cpfCnpj, etc.
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <Api2Context.Provider
      value={{
        users,
        setUsers,
        isUsersDataError,
        isUsersDataLoading,
        listNames,
        listCpfCnpj,
        addUser,
      }}
    >
      {children}
    </Api2Context.Provider>
  );
};
