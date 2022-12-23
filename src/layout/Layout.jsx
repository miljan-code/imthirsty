import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

import styles from './Layout.module.css';

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
