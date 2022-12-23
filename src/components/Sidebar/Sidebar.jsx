import { useSearchCocktails } from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem/SidebarItem';
import Loading from '../Loading/Loading';

import styles from './Sidebar.module.css';
import { useContext } from 'react';
import AppState from '../../context/AppState';

const Sidebar = () => {
  const { searchTerm } = useContext(AppState);

  const {
    data: data,
    isLoading,
    isError,
    error,
  } = useSearchCocktails(searchTerm);

  if (isLoading) return <Loading />;

  if (isError) return <p>Sorry, something went wrong... {error.message}</p>;

  const cocktails = data?.data?.drinks;

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__items}>
        {cocktails
          ?.slice(0, 10)
          ?.map(({ idDrink, strAlcoholic, strDrink, strDrinkThumb }) => (
            <Link
              key={idDrink}
              to={`?=${idDrink}-${strDrink.replace(' ', '-')}`}
            >
              <SidebarItem
                id={idDrink}
                type={strAlcoholic}
                title={strDrink}
                img={strDrinkThumb}
              />
            </Link>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
