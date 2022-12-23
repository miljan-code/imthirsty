import loadingImg from '../../assets/loadingSpinner.png';

import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loadingImg} className={styles['loading__img']} />
    </div>
  );
};

export default Loading;
