import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsFillMicFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { FaCog } from 'react-icons/fa';
import styles from './styles/NavBar.module.css';

const Navbar = () => {
  const page = useSelector((state) => state.countries.currentPage);
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          {!(page === 'Home') ? (
            <>
              <Link to="/" className={styles.start}>
                <BsChevronLeft className={styles.chevron} />
                <h3>Home</h3>
              </Link>
            </>
          ) : (
            ''
          )}
        </div>
        <h3 className={styles.center}>{page}</h3>
        <div className={styles.end}>
          <BsFillMicFill />
          <FaCog />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
