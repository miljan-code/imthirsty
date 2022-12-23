import { useLocation } from 'react-router-dom';
import { useCocktailData } from '../../hooks/useFetchData';
import { keyValuePairsIntoArray } from '../../services/helpers';

import Cocktail from './Cocktail/Cocktail';
import Loading from '../Loading/Loading';

import styles from './MainContent.module.css';
import { useState } from 'react';

const MainContent = () => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState();
  // const [isError, setIsError] = useState();
  // const [error, setError] = useState();

  const { search } = useLocation();
  const cocktailId = search?.split('=')[1]?.slice(0, 5);

  const { data, isLoading, isError, error } = useCocktailData(
    cocktailId ? cocktailId : '11000'
  );

  if (isLoading) return <Loading />;

  if (isError) return <p>Something went wrong... {error.message}</p>;

  const [cocktail] = data?.data?.drinks;

  const {
    strDrinkThumb: img,
    strDrink: title,
    strInstructions: instructions,
  } = cocktail;

  const ingredients = keyValuePairsIntoArray(cocktail, 'strIngr');
  const measures = keyValuePairsIntoArray(cocktail, 'strMeasur');
  const ingsAndMeasures = ingredients?.map((ing, i) => [ing, measures[i]]);

  return (
    <section className={styles.content}>
      <Cocktail
        title={title}
        ingsAndMeasures={ingsAndMeasures}
        instructions={instructions}
        img={img}
      />
    </section>
  );
};

export default MainContent;
