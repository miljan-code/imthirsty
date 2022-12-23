import styles from './Menu.module.css';
import { useRandomCocktailData } from '../../../hooks/useFetchData';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const { data, refetch } = useRandomCocktailData();

  const cocktail = data?.data?.drinks[0];

  const clickHandler = () => {
    refetch();
    const drinkID = cocktail.idDrink;
    const drinkName = cocktail.strDrink;
    navigate(`?=${drinkID}-${drinkName.replace(' ', '-')}`);
  };

  return (
    <nav className={styles.header__nav}>
      <button onClick={clickHandler} className={styles.btn}>
        Random Cocktail
      </button>
    </nav>
  );
};

export default Menu;
