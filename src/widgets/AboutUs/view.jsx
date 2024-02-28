import React from 'react'
import styles from '@styles/scss/about.module.scss'
import { aboutUsData } from '../../common/constants/constants'
import Image from 'next/image'
import Banner from '@components/Banner'
import RockerIcon from '@icons/RockerIcon'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutBox}>
          {aboutUsData?.map((about, index) => (
            <div className={styles.aboutRow} key={`aboutus${index}`}>
              <div className={styles.aboutTitle}>
                <span className={styles.title}>{about?.title}</span>
              </div>
              <div className={about?.reverse ? styles.aboutBoxrowreverse : styles.aboutBoxrow}>
                <div className={styles.descBox}>
                  <p className={styles.desc}>{about?.desc}</p>
                </div>
                <div className={styles.descBox}>
                  <Image src={about?.img} height={500} width={500} />
                </div>
              </div>
            </div>
          ))}
          <div className={styles.detailsRow}>
            <div className={styles.col}>
              <div className={styles.missionRow}>
                <div className={styles.missionTitle}>
                  <span className={styles.title}>Institute Mission</span>
                </div>
                <div className={styles.missionRow}>
                  <div className={styles.missionTitle}>
                    <p className={styles.desc}>To mould distinctive engineers with integrity and social commitment.</p>
                  </div>
                </div>
              </div>
              <div className={styles.missionRow}>
                <div className={styles.missionTitle}>
                  <span className={styles.title}>Institute Vision</span>
                </div>
                <div className={styles.visionRow}>
                  <div className={styles.missionTitle}>
                    <div className={styles.iconbox}>
                      <RockerIcon />
                    </div>
                    <p className={styles.desc}>Extend harmonious curricular and co-curricular exposure to the students.</p>
                  </div>
                  <div className={styles.missionTitle}>
                    <div className={styles.iconbox}>
                      <RockerIcon />
                    </div>
                    <p className={styles.desc}>Equip the students to accomplish career goals upholding moral values.</p>
                  </div>
                  <div className={styles.missionTitle}>
                    <div className={styles.iconbox}>
                      <RockerIcon />
                    </div>
                    <p className={styles.desc}>Encourage the students to contribute for the sustainable development of the society.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.missionRow}>
                <div className={styles.missionTitle}>
                  <span className={styles.title}>Department Mission</span>
                </div>
                <div className={styles.missionRow}>
                  <div className={styles.missionTitle}>
                    <p className={styles.desc}>To nurture professionally competent and socially committed IT professionals</p>
                  </div>
                </div>
              </div>
              <div className={styles.missionRow}>
                <div className={styles.missionTitle}>
                  <span className={styles.title}>Department Vision</span>
                </div>
                <div className={styles.visionRow}>
                  <div className={styles.missionTitle}>
                    <div className={styles.iconbox}>
                      <RockerIcon />
                    </div>
                    <p className={styles.desc}>Provide quality education in both theoritical and applied fields of computer science.</p>
                  </div>
                  <div className={styles.missionTitle}>
                    <div className={styles.iconbox}>
                      <RockerIcon />
                    </div>
                    <p className={styles.desc}>Equip the students with industry-oriented skills in  computer science to take up real-world challenges .</p>
                  </div>
                  <div className={styles.missionTitle}>
                    <div className={styles.iconbox}>
                      <RockerIcon />
                    </div>
                    <p className={styles.desc}>Inculcate ethical values and leadership qualities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
