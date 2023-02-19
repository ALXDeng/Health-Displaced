import { createContext } from 'react';

export const ProfContext = createContext({
  myBoolean: false,
  setMyBoolean: () => {},
});