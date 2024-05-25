// contexts/MyContext.tsx
import React, { createContext, useState, useContext, FC } from 'react';

interface MyContextProps {
  value: string | null;
  setValue: (value: string | null) => void;
}

const MyContext = createContext<MyContextProps>({
  value: null,
  setValue: () => {},
});

export const MyProvider = ({ children }:{
    children: React.ReactNode;
}) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextProps => useContext(MyContext);
