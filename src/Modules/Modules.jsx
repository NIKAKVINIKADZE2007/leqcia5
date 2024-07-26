import React from 'react';
import styles from './Modules.module.css';

const Modules = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socialMedia}>
          <a href='https://facebook.com/' className={styles.iconLink}>
            <i className={styles.icon}>facebook</i>
          </a>
          <a href='https://twitter.com/' className={styles.iconLink}>
            <i className={styles.icon}>twitter</i>
          </a>
          <a href='https://instagram.com/' className={styles.iconLink}>
            <i className={styles.icon}>instagram</i>
          </a>
        </div>
        <p className={styles.text}>
          Follow us on social media for more updates.
        </p>
      </div>
      <div className={styles.copyRight}>
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
      <div className='card-title'>Hello NEW DIV</div>
    </footer>
  );
};

export default Modules;
