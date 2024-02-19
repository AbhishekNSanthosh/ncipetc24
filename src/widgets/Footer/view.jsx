import React from 'react'
import styles from '@styles/scss/footer.module.scss'
import { navLinks } from '../../common/constants/constants'
import Link from 'next/link'
import MailIcon from '@icons/MailIcon'
import PhoneIcon from '@icons/PhoneIcon'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.footerRow}>
          <div className={styles.left}>
            <div className={styles.leftTitle}>
              <span className={styles.title}>Important links</span>
            </div>
            <div className={styles.linkCol}>
              {navLinks?.map((link, index) => (
                <div className={styles.leftItem} key={`navlink_` + index}>
                  <Link href='' className={styles.navLink}>{link?.title}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.center}>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin" width="100%" height="280" loading="lazy" style={{ borderRadius: '10px' }}></iframe>
          </div>
          <div className={styles.right}>
            <div className={styles.leftTitle}>
              <span className={styles.title}>Contact Info</span>
            </div>
            <div className={styles.linkCol}>
              <div className={styles.contactItem}>
                <div className={styles.contactLeft}>
                  <MailIcon />
                </div>
                <div className={styles.contactBox}>
                  <div className={styles.contactRow}>
                    <span className={styles.contactTitle}>Email:</span>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactDetailTitle}>ncipetc24@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactLeft}>
                  <PhoneIcon />
                </div>
                <div className={styles.contactBox}>
                  <div className={styles.contactRow}>
                    <span className={styles.contactTitle}>Phone:</span>
                  </div>
                  <div className={styles.contactRow}>
                    <span className={styles.contactDetailTitle}>+91 7907247909</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightsRow}>
          <span className={styles.rights}>Copyright © 2024 - NCIPETC'24</span>
          <span className={styles.rights}>Designed & Developed by Abhishek Santhosh</span>
        </div>
      </div>
    </div>
  )
}