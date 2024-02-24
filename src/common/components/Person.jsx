import React from 'react'
import styles from '@styles/scss/person.module.scss'
import Image from 'next/image'

export default function Person({ person }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper} >
        <div className={styles.top}>
          <span className={styles.title}>{person?.role}</span>
          <Image src={person?.img} width={500} height={500} className={styles.img} />
          <div className={styles.btm}>
            <span className={styles.name}>{person?.name}</span>
            <span className={styles.desgn}>{person?.desgn}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
