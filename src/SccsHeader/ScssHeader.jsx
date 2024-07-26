import React from 'react';
import styles from './ScssHeader.module.scss';

const SccHeader = () => {
  return (
    <div className={styles.myHeader}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default SccHeader;
