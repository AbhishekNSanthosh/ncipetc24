import React from 'react'
import styles from '@styles/scss/importDates.module.scss'
import Image from 'next/image'

export default function ImportantDates() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <span className={styles.title}>CONFERENCE IMPORTANT DATES</span>
      </div>
      <div className={styles.wrapper}>
        <Image src="/images/impDates.svg" width={1000} height={700}/>
      </div>
      <div className={styles.wrapperMob}>
        <Image src="/images/impDatesMob.svg" width={800} height={700} className={styles.date}/>
      </div>
    </div>
  )
}
