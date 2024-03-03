/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from 'react'
import styles from '@styles/scss/advisors.module.scss'
import { advisors } from '../../common/constants/constants'
import Banner from '@components/Banner'
import PersonCard from '@components/PersonCard'

export default function Advisors() {
  return (

    <div className={styles.container}>
      <Banner title={"ADVISORY BOARD"} />
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
              < PersonCard data={advisors} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
