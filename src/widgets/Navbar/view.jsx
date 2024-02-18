import React from 'react'
import styles from '@styles/navbar.module.css'
import { navLinks } from '../../common/constants/constants'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Link className={styles.logo} href="">NCIPETC'24</Link>
                </div>
                <div className={styles.center}>
                    {navLinks?.map((navItem, index) => (
                        <div className={styles.navItemBox}>
                            <Link className={styles.navLink} href="">{navItem?.title}</Link>
                        </div>
                    ))}
                </div>
                <div className={styles.right}>
                    <button className={styles.registerBtn}>Register now</button>
                </div>
            </div>
        </div>
    )
}
