import { createContext, useState } from 'react';

const AppState = createContext();

export const AppStateProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchCocktailsHandler = (term) => {
    setSearchTerm(term);
  };

  const state = { searchTerm, searchCocktailsHandler };

  return <AppState.Provider value={state}>{children}</AppState.Provider>;
};

export default AppState;
