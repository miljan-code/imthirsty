import { useContext } from 'react';
import AppState from '../../../context/AppState';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const { searchCocktailsHandler } = useContext(AppState);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchCocktailsHandler(e.target.querySelector('input').value);
      }}
      className={styles.search__form}
    >
      <input
        type="text"
        className={styles.search__input}
        placeholder="Search for cocktails..."
      />
      <button className={styles.search__btn}>Search</button>
    </form>
  );
};

export default SearchBar;
