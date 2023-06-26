import React from 'react';
import { BsChevronLeft, BsFillMicFill } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import styles from './styles/NavBar.module.css';

const Navbar = () => (
  <header>
    <nav className={styles.nav}>
      <div className={styles.start}>
        <BsChevronLeft className={styles.chevron} />
        <h3>Home</h3>
      </div>
      <h3 className={styles.center}>
        NavBar
      </h3>
      <div className={styles.end}>
        <BsFillMicFill />
        <FaCog />
      </div>
    </nav>
  </header>
);

export default Navbar;
