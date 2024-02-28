import React from 'react'
import styles from '@styles/scss/contact.module.scss'
import Banner from '@components/Banner'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Banner title={"Contact us"}/>
    </div>
  )
}
