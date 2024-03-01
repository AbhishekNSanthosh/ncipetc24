import React from 'react'
import styles from '@styles/scss/registration.module.scss'
import Banner from '@components/Banner'
import { whocanApply } from '../../common/constants/constants'

export default function Registration() {
  return (
    <div className={styles.container}>
      <Banner title={"Registration"} />
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.titleBox}>
            <span className={styles.title}>Who can Apply?</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.desc}>This conference is open to UG/PG students of Engineering colleges, Academicians, Research Schoalars, Professionals, from research organizations and industries.</span>
          </div>
        </div>
        <div className={styles.itemrow}>
          <div className={styles.infobox}>
            {whocanApply?.map((item, index) => (
              <div className={styles.infoItem}>
                <div className={styles.item}>
                  <span className={styles.itemName}>{item?.title}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.fee}>₹{" "}{item?.fee}/-</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.infobox}>
            <div className={styles.bank}>
              <span className={styles.bankdetails}>Bank details will be updated soon !</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
