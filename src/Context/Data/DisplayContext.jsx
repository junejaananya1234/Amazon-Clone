import { createContext, useState, useEffect } from 'react';

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setName(storedUser.displayName || "");
    }
  }, []);

  const updateUsername = (name) => {
    setName(name);
  };

  return (
    <DisplayContext.Provider value={{ name, updateUsername }}>
      {children}
    </DisplayContext.Provider>
  );
};
