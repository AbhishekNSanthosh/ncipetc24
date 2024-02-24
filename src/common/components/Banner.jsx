import React from 'react'
import styles from '@styles/scss/banner.module.scss'

export default function Banner({ title }) {
    return (
        <div className={styles.banner}>
            <div className={styles.box}>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    )
}
