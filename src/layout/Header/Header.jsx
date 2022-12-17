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

  // const MobileHeader = () => (
  //   <header className={styles.header__mobile}>
  //     <div className="header__mobile-top">
  //       <LogoBox />
  //       <Navigation />
  //     </div>
  //     <div className="header__mobile-bot">
  //       <SearchBar />
  //     </div>
  //   </header>
  // );

  return (
    <>
      <header className={styles.header}>
        <LogoBox />
        <div className={styles.search__box}>
          <SearchBar />
        </div>
        <Navigation />
      </header>
      <header className={styles.header__mobile}>
        <SearchBar />
      </header>
    </>
  );
};

export default Header;
