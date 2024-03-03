/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from 'react'
import styles from '@styles/scss/organizers.module.scss'
import Person from '@components/Person'
import { committe, orgCommitte } from '../../common/constants/constants'
import Banner from '@components/Banner'
import PersonCard from '@components/PersonCard'

export default function Organizers() {
  return (
    <>
      <div className={styles.container}>
        <Banner title={"ORGANIZERS"} />
        <div className={styles.wrapper}>
          <div className={styles.organizerBox}>

            <div className={styles.row}>
              <div className={styles.titleRow}>
                <div className={styles.dash}></div>
                <div className={styles.titleBoxDash}>
                  <span className={styles.desgnTitle}>COMMITTEE</span>
                </div>
                <div className={styles.dash}></div>
              </div>
              <div className={styles.personRow}>
                {committe?.map((person, index) => (
                  < Person person={person} key={`person${index}`} />
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.titleRow}>
                <div className={styles.dash}></div>
                <div className={styles.titleBoxDash}>
                  <span className={styles.desgnTitle}>coordinators</span>
                </div>
                <div className={styles.dash}></div>
              </div>
              <div className={styles.personRow}>
                <PersonCard data={orgCommitte?.coordinators} title={"Coordinators"} />
              </div>
            </div>


            <div className={styles.row}>
              <div className={styles.titleRow}>
                <div className={styles.dash}></div>
                <div className={styles.titleBoxDash}>
                  <span className={styles.desgnTitle}>Members</span>
                </div>
                <div className={styles.dash}></div>
              </div>
              <div className={styles.personRow}>
                <PersonCard data={orgCommitte?.members} title={"Coordinators"} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
