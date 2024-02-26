import React from 'react'
import styles from '@styles/scss/landingPage.module.scss'
import Image from 'next/image'

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.row}>
                        <span className={styles.title}><span className={styles.highlight}>N</span>ational <span className={styles.highlight}>C</span>onference on <span className={styles.highlight}>I</span>nterdisciplinary <span className={styles.highlight}>P</span>erspectives of <span className={styles.highlight}>E</span>merging <span className={styles.highlight}>T</span>rends in <span className={styles.highlight}>Computing</span></span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.tagline}>Empowering Minds, Bridging Horizons: Unveiling the Future at the National Conference on Interdisciplinary Perspectives of Emerging Trends in Computing</span>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.registerBtn} >
                            Register now
                        </button>
                    </div>
                </div>
                <div className={styles.right}>
                    <Image src="/images/carmelInd.png" height={1000} width={1000} className={styles.img} />
                </div>
            </div>
        </div>
    )
}
