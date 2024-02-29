import React from 'react'
import styles from '@styles/scss/notfound.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function notfound() {
  return (
    <div className={styles.container}>
      <Image src="/404.gif" height={400} width={400} />
      <Link href="/">
        <button className={styles.btn}>Return to home</button>
      </Link>
    </div>
  )
}
