import React from 'react'
import styles from '@styles/scss/advisors.module.scss'
import Person from '@components/Person'
import { advisors } from '../../common/constants/constants'

export default function Advisors() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <span className={styles.title}>ADVISORY BOARD</span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.organizerBox}>

          <div className={styles.row}>
            <div className={styles.titleRow}>
              <div className={styles.dash}></div>
              <div className={styles.titleBoxDash}>
                <span className={styles.desgnTitle}>MEMBERS</span>
              </div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.personRow}>
              {advisors?.map((person, index) => (
                < Person person={person} key={`person${index}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
