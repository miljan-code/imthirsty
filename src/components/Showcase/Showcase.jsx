import styles from './Showcase.module.css';
import { useQuery } from 'react-query';
import { getRandomCocktail } from '../../api/cocktailsApi';
import Loading from '../../layout/Loading/Loading';

const Showcase = () => {
  const {
    data: cocktail,
    isLoading,
    isError,
    error,
  } = useQuery('randomCocktail', getRandomCocktail);

  const { strDrinkThumb: img, strDrink: title } = cocktail ? cocktail : {};

  console.log(img);

  const Cocktail = () => (
    <div className={styles.cocktail}>
      <div className={styles['cocktail__img-container']}>
        <img src={img} alt="" className={styles['cocktail__img-back']} />
        <img src={img} alt="" className={styles.cocktail__img} />
      </div>

      <h1 className={styles.cocktail__title}>{title}</h1>
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
