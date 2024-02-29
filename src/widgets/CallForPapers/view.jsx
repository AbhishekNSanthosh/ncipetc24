import React from 'react'
import styles from '@styles/scss/callForPapers.module.scss'
import Image from 'next/image'
import { topics } from '../../common/constants/constants'
import Banner from '@components/Banner'
import RockerIcon from '@icons/RockerIcon'
export default function CallForPapers() {
  return (
    <div className={styles.container}>
      <Banner title={"Call for papers"} />
      <div className={styles.wrapper}>
        <div className={styles.callRow}>
          <div className={styles.callLeft}>
            <span className={styles.desc}>
              The aim of this conference is to bring together academicians, researchers and professionals from diverse fields of engineering and technology to a common platform in order to facilitate exchange of knowledge and experience. The conference will provide an arena for showcasing of novel research findings and practical experiences in various engineering domains.
            </span>
          </div>
          <div className={styles.callRight}>
            <Image src="/images/call.gif" height={500} width={500} className={styles.img} />
          </div>
        </div>

      
        <div className={styles.callBtmRow}>
          <div className={styles.topicLeft}>
            <div className={styles.topicTitleBox}>
              <span className={styles.topicTitle}>Topics of interest include, but not limited to the following:</span>
            </div>
            <div className={styles.topicsCol}>
              {topics?.map((topic, index) => (
                <div className={styles.topicItemBox} key={`topicindex${index}`}>
                  <div className={styles.indexBox}>
                    <span className={styles.index}>
                      <RockerIcon/>
                    </span>
                  </div>
                  <div className={styles.topicNameBox}>
                    <span className={styles.topic}>{topic?.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
