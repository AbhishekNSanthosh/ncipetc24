import React from 'react'
import styles from '@styles/scss/submissionGuidelines.module.scss'
import RockerIcon from '@icons/RockerIcon'
import { authorGuidelines } from '../../common/constants/constants'
import Banner from '@components/Banner'

export default function SubmissionGuidelines() {
  return (
    <div className={styles.container}>
      <Banner title={"Submission guidelines"}/>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>instruction to authors</span>
          </div>
          <div className={styles.col}>
            {authorGuidelines?.map((guidline, index) => (
              <div className={styles.guidelines}>
                <div className={styles.iconbox}>
                  <RockerIcon />
                </div>
                <div className={styles.itembox}>{guidline}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
