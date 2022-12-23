import { idGenerator } from '../../../services/helpers';

import styles from './Cocktail.module.css';

const Cocktail = ({ title, img, ingsAndMeasures, instructions }) => {
  return (
    <div className={styles.cocktail}>
      <div className={styles['cocktail__img-container']}>
        <img src={img} className={styles['cocktail__img-back']} />
        <img src={img} className={styles.cocktail__img} />
      </div>

      <h1 className={styles.cocktail__title}>{title}</h1>

      <div className={styles.cocktail__ingredients}>
        <ul className={styles['cocktail__ingredients-ings']}>
          {ingsAndMeasures?.map(([ing, measure]) => (
            <li
              key={idGenerator()}
              className={styles['cocktail__ingredients-ing']}
            >
              <span>{ing}</span>
              <span>{measure}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.cocktail__instructions}>
        <h3>How to prepare it</h3>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default Cocktail;
