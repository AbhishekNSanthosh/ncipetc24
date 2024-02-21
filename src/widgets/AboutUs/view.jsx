import React from 'react'
import styles from '@styles/scss/about.module.scss'
import { aboutUsData } from '../../common/constants/constants'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutBox}>
          {aboutUsData?.map((about, index) => (
            <div className={styles.aboutRow} key={`aboutus${index}`}>
              <div className={styles.aboutTitle}>
                <span className={styles.title}>{about?.title}</span>
              </div>
              <div className={about?.reverse ? styles.aboutBoxrowreverse : styles.aboutBoxrow}>
                <div className={styles.descBox}>
                  <p className={styles.desc}>{about?.desc}</p>
                </div>
                <div className={styles.descBox}>
                  <Image src={about?.img} height={500} width={500}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) 
}
