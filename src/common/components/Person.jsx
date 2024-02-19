import React from 'react'
import styles from '@styles/scss/common.module.scss'
import Image from 'next/image'
export default function Person({ person }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <Image src={person?.img} width={320} height={300} className={styles.img} />
        </div>
        <div className={styles.detailsBox}>
          <div className={styles.nameBox}>
            <span className={styles.name}>{person?.name}</span>
          </div>
          <div className={styles.nameBox}>
            <span className={styles.desgn}>{person?.desgn}</span>
          </div>
          <div className={styles.nameBox}>
            <span className={styles.desgn}>{person?.dep}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
