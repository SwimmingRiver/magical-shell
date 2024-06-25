import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div>MAGICAL-SHELL</div>
      <div className={styles.menu}>
        <Image src="/images/menu.svg" alt="menu" width={30} height={30} />
      </div>
    </div>
  );
}

export default Header;
