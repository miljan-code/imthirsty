import { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getCocktails, getRandomCocktail } from '../api/cocktailsApi';

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [fetchType, setFetchType] = useState(getCocktails);

  const { data, isLoading, isError, error } = useQuery(
    'cocktails',
    getCocktails
  );

  const ctxData = { data, isLoading, isError, error };

  return (
    <CocktailContext.Provider value={ctxData}>
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;
