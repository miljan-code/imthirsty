import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

import styles from './Layout.module.css';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
