import React from 'react'
import styles from '@styles/scss/navbar.module.scss'
import { navLinks } from '../../common/constants/constants'
import Link from 'next/link'
import DropIcon from '@icons/DropIcon'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Link className={styles.logo} href="/">NCIPETC'24</Link>
                </div>
                <div className={styles.center}>
                    {navLinks?.map((navItem, index) => (
                        <div className={styles.navItemBox} key={`navLink${navItem + '_' + index + 1}`}>
                            <Link className={styles.navLink} href={navItem?.link}>{navItem?.title}</Link>
                            {navItem?.moreLinks && <DropIcon />}
                            {navItem?.moreLinks &&
                                <div className={styles.popper}>
                                    {navItem?.moreLinks?.map((moreLink, index) => (
                                        <div key={`moreLink${moreLink + '_' + index + 1}`}>
                                            <div className={styles.row}>
                                                <Link className={styles.moreLink} href={moreLink?.link}>{moreLink?.title}</Link>
                                            </div>
                                            {moreLink?.hr &&
                                                <hr />
                                            }
                                        </div>
                                    ))}
                                </div>
                            }
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
