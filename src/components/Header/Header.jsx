import LogoBox from './LogoBox/LogoBox';
import Menu from './Menu/Menu';
import SearchBar from './SearchBar/SearchBar';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <LogoBox />
        <div className={styles.search__box}>
          <SearchBar />
        </div>
        <Menu />
      </header>
      <header className={styles.header__mobile}>
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
