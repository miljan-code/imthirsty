import { useCocktailsData } from '../../hooks/useFetchData';
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import Loading from '../Loading/Loading';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { data, isLoading, isError, error } = useCocktailsData();

  if (isLoading) return <Loading />;

  if (isError) return <p>Sorry, something went wrong... {error.message}</p>;

  const cocktails = data?.data?.drinks;

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
      <Items />
    </aside>
  );
};

export default Sidebar;
