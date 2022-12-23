import styles from './SidebarItem.module.css';

const SidebarItem = ({ id, title, type, img }) => {
  return (
    <li className={styles.sidebar__item}>
      <img src={img} alt={title} className={styles['sidebar__item-img']} />
      <div className={styles['sidebar__item-details']}>
        <h4 className={styles['sidebar__item-title']}>{title}</h4>
        <span className={styles['sidebar__item-type']}>{type}</span>
      </div>
    </li>
  );
};

export default SidebarItem;
