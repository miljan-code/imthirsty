import SearchBar from '../../components/SearchBar/SearchBar';
import logo from '../../assets/developers.png';
import styles from './Header.module.css';

const Header = () => {
  const LogoBox = () => (
    <div className={styles.header__logo}>
      <img
        src={logo}
        alt="miljan.dev logo"
        className={styles['header__logo-img']}
      />
      <span className={styles['header__logo-text']}>miljan.dev</span>
    </div>
  );

  const Navigation = () => (
    <nav className={styles.header__nav}>
      <button className={styles.btn}>Random Cocktail</button>
    </nav>
  );

  return (
    <header className={styles.header}>
      <LogoBox />
      <SearchBar />
      <Navigation />
    </header>
  );
};

export default Header;
