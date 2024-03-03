/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from 'react'
import styles from '@styles/scss/importDates.module.scss'
import Image from 'next/image'
import Banner from '@components/Banner'

export default function ImportantDates() {
  return (
    <div className={styles.container}>
      <Banner title={"IMPORTANT DATES"} />
      <div className={styles.wrapper}>
        <Image src="/images/impDates.png" width={1000} height={700} />
      </div>
      <div className={styles.wrapperMob}>
        <Image src="/images/impDatesMob.png" width={800} height={700} className={styles.date} />
      </div>
    </div>
  )
}
