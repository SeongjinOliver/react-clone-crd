import React from 'react';
import styles from './Body.module.css'

export default function Body() {
    return (
        <div className={styles.body1}>
            <input type="checkbox" /><span>test</span>
        </div>
    );
}