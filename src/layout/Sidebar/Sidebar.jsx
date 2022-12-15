import { useQuery } from 'react-query';
import { getCocktails } from '../../api/cocktailsApi';

import SidebarItem from '../../components/SidebarItem/SidebarItem';
import Loading from '../Loading/Loading';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const {
    data: cocktails,
    isLoading,
    isError,
    error,
  } = useQuery('cocktails', getCocktails);

  const ErrorMsg = () => <p>Sorry, something went wrong... {error}</p>;

  const Items = () => (
    <ul className={styles.sidebar__items}>
      {cocktails
        .slice(0, 10)
        .map(({ idDrink, strAlcoholic, strDrink, strDrinkThumb }) => (
          <SidebarItem
            key={idDrink}
            id={idDrink}
            type={strAlcoholic}
            title={strDrink}
            img={strDrinkThumb}
          />
        ))}
    </ul>
  );

  return (
    <aside className={styles.sidebar}>
      {isLoading && <Loading />}
      {isError && <ErrorMsg />}
      {!isLoading && !isError && <Items />}
    </aside>
  );
};

export default Sidebar;
