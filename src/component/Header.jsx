import React from 'react';
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.head}>
            <div className={styles.buttons1}>
                <button>*</button>
            </div>
            <div className={styles.buttons}>
                <button className={styles.all}>All</button>
                <button className={styles.active}>Active</button>
                <button className={styles.complete}>Completed</button>
            </div>
        </div>
    );
}