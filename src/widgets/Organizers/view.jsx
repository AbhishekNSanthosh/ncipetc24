import React from 'react'
import styles from '@styles/scss/organizers.module.scss'
import Person from '@components/Person'
import { orgCommitte } from '../../common/constants/constants'

export default function Organizers() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <span className={styles.title}>Organizing Committee</span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.organizerBox}>
          <div className={styles.row}>
            <div className={styles.titleRow}>
              <div className={styles.dash}></div>
              <div className={styles.titleBoxDash}>
                <span className={styles.desgnTitle}>CHIEF PATRON</span>
              </div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.personRow}>
              <Person person={orgCommitte?.chiefPatron} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.titleRow}>
              <div className={styles.dash}></div>
              <div className={styles.titleBoxDash}>
                <span className={styles.desgnTitle}>PATRONS</span>
              </div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.personRow}>
              {orgCommitte?.patrons?.map((person, index) => (
                < Person person={person} key={`person${index}`} />
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.titleRow}>
              <div className={styles.dash}></div>
              <div className={styles.titleBoxDash}>
                <span className={styles.desgnTitle}>CONVENER</span>
              </div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.personRow}>
              < Person person={orgCommitte?.convener} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.titleRow}>
              <div className={styles.dash}></div>
              <div className={styles.titleBoxDash}>
                <span className={styles.desgnTitle}>COORDINATORS</span>
              </div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.personRow}>
              {orgCommitte?.coordinators?.map((person, index) => (
                < Person person={person} key={`person${index}`} />
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.titleRow}>
              <div className={styles.dash}></div>
              <div className={styles.titleBoxDash}>
                <span className={styles.desgnTitle}>MEMBERS</span>
              </div>
              <div className={styles.dash}></div>
            </div>
            <div className={styles.personRow}>
              {orgCommitte?.members?.map((person, index) => (
                < Person person={person} key={`person${index}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
