import React from 'react'
import styles from '@styles/scss/contact.module.scss'
import Banner from '@components/Banner'
import Location from '@icons/Location'
import Mail from '@icons/Mail'
import Mobile from '@icons/Mobile'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Banner title={"Contact us"} />
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.iconBox}>
            <Location />
          </div>
          <div className={styles.addTitle}>
            <span className={styles.title}>Office address</span>
          </div>
          <div className={styles.detailsBox}>
            <p className={styles.details}>Carmel College of Engineering and Techonology</p>
            <p className={styles.details}>Punnapra | Alappuzha-688004, Kerala</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.iconBox}>
            <Mail />
          </div>
          <div className={styles.addTitle}>
            <span className={styles.title}>Mail</span>
          </div>
          <div className={styles.detailsBox}>
            <Link href="mailto:conferencecse@carmelcet.in" className={styles.mail}>conferencecse@carmelcet.in</Link>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.iconBox}>
            <Mobile />
          </div>
          <div className={styles.addTitle}>
            <span className={styles.title}>Phone numbers</span>
          </div>
          <div className={styles.detailsBox}>
            <div className={styles.contact}>
              <Link href="tel:+918589059517" className={styles.mail}>+91 8589059517</Link>
            </div>
            <div className={styles.contact}>
              <Link href="tel:+919995267896," className={styles.mail}>+91 9995267896,</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
