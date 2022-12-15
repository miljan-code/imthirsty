import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.search__form}>
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
