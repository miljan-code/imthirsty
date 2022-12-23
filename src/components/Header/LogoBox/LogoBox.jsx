import logo from '../../../assets/developers.png';
import styles from './LogoBox.module.css';

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

export default LogoBox;
