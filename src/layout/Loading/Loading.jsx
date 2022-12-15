import styles from './Loading.module.css';
import loadingImg from '../../assets/loadingSpinner.png';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loadingImg} className={styles['loading__img']} />
    </div>
  );
};

export default Loading;
