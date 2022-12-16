import styles from './Showcase.module.css';
import { useQuery } from 'react-query';
import { getRandomCocktail } from '../../api/cocktailsApi';
import Loading from '../../layout/Loading/Loading';
import { keyValuePairsIntoArray, idGenerator } from '../../services/helpers';

const Showcase = () => {
  const {
    data: cocktail,
    isLoading,
    isError,
    error,
  } = useQuery('randomCocktail', getRandomCocktail);

  const {
    strDrinkThumb: img,
    strDrink: title,
    strInstructions: instructions,
  } = cocktail ? cocktail : {};

  const ingredients = keyValuePairsIntoArray(cocktail, 'strIngr');
  const measures = keyValuePairsIntoArray(cocktail, 'strMeasur');
  const ingsAndMeasures = ingredients?.map((ing, i) => [ing, measures[i]]);

  const Ingredients = () =>
    ingsAndMeasures?.map(([ing, measure]) => (
      <li key={idGenerator()} className={styles['cocktail__ingredients-ing']}>
        <span>{ing}</span>
        <span>{measure}</span>
      </li>
    ));

  const Cocktail = () => (
    <div className={styles.cocktail}>
      <div className={styles['cocktail__img-container']}>
        <img src={img} className={styles['cocktail__img-back']} />
        <img src={img} className={styles.cocktail__img} />
      </div>

      <h1 className={styles.cocktail__title}>{title}</h1>

      <div className={styles.cocktail__ingredients}>
        <ul className={styles['cocktail__ingredients-ings']}>
          <Ingredients />
        </ul>
      </div>

      <div className={styles.cocktail__instructions}>
        <h3>How to prepare it</h3>
        <p>{instructions}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.showcase}>
      {isLoading && <Loading />}
      {isError && <p>Something went wrong... {error}</p>}
      {!isLoading && !isError && <Cocktail />}
    </section>
  );
};

export default Showcase;
