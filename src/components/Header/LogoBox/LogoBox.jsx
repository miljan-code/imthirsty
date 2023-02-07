import { useContext } from 'react';
import AppState from '../../../context/AppState';

import logo from '../../../assets/developers.png';
import styles from './LogoBox.module.css';

const LogoBox = () => {
  const { searchCocktailsHandler } = useContext(AppState);

  return (
    <div
      onClick={() => searchCocktailsHandler('')}
      className={styles.header__logo}
    >
      <img
        src={logo}
        alt="miljan.tech logo"
        className={styles['header__logo-img']}
      />
      <span className={styles['header__logo-text']}>miljan.tech</span>
    </div>
  );
};

export default LogoBox;
