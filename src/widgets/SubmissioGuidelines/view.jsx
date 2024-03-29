/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from 'react'
import styles from '@styles/scss/submissionGuidelines.module.scss'
import RockerIcon from '@icons/RockerIcon'
import { authorGuidelines, status } from '../../common/constants/constants'
import Banner from '@components/Banner'

export default function SubmissionGuidelines() {
  return (
    <div className={styles.container}>
      <Banner title={"Submission guidelines"} />
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>PAPER SUBMISSION</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.titledesc}>Authors are invited to submit papers in electronic format. Instructions are published in the conference website. Acceptance or rejection of papers is based on peer review of the full papers. The size of the paper is limited to 6 pages conforming to the IEEE format and specifications. The IEEE paper template can be <a className={styles.link} target="_blank" href="https://www.ieee.org/conferences/publishing/templates.html">downloaded here</a> .</span>
          </div>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>AUTHORS</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.titledesc}>Authors who wish to participate at the conference must register individually. The selected paper requires atleast one author to attend the conference for presentation. Papers not presented at the conference will not be included in the Conference Proceedings. </span>
          </div>
          <div className={styles.col}>
            {authorGuidelines?.map((guidline, index) => (
              <div className={styles.guidelines}>
                <div className={styles.iconbox}>
                  <RockerIcon />
                </div>
                <div className={styles.titledesc}>{guidline}</div>
              </div>
            ))}
          </div>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>PEER REVIEW</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.titledesc}>Accepted papers will be subjected to a double-blind review process conducted by the Program Committee. This evaluation will be based on criteria such as technical soundness, alignment with the conference's thematic focus, novelty of contributions, significance of findings and clarity of exposition.</span>
            <span className={styles.titledesc}>In addition to content assessment, submissions must adhere strictly to formatting guidelines and ensure author anonymity. Papers failing to meet these requirements will be rejected outright without undergoing the review process.</span>
          </div>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>FINAL NOTIFICATION</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.titledesc}>The notification will be emailed to the author based on the reviewers’ feedback. The Notification will be e-mailed to authors under any of the three categories</span>
          </div>
          <div className={styles.col}>
            {status?.map((guidline, index) => (
              <div className={styles.guidelines}>
                <div className={styles.titledesc}>
                  {index + 1}.
                </div>
                <div className={styles.titledesc}>{guidline}</div>
              </div>
            ))}
          </div>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>PLAGIARISM</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.titledesc}>Plagiarism in conferences involves presenting someone else's work, ideas, or words as one's own without proper credit. It can include direct copying, paraphrasing without attribution, self-plagiarism, data or ideas plagiarism. To maintain integrity, conferences use anti-plagiarism software, enforce citation guidelines, and conduct thorough reviews. Violations can lead to rejection or other penalties.</span>
          </div>
          <div className={styles.titleBox}>
            <span className={styles.titlename}>GENERAL GUIDELINES</span>
          </div>
          <div className={styles.descBox}>
            <span className={styles.titledesc}>Fee payment is required in order to attend the conference. The authors of accepted submission must register for the conference and pay the registration fee before the deadline. Each paper should have atleast one author who pays the registration fee and attends the conference. Requests to update, edit, change, or add information to the paper after final submission will not be entertained.</span>
            <span className={styles.titledesc}>Authors should forward the following documents to complete the registration to the conference:</span>
          </div>
          <div className={styles.col}>
            <div className={styles.guidelines}>
              <div className={styles.iconbox}>
                <RockerIcon />
              </div>
              <div className={styles.titledesc}>
                Final camera ready paper (It should be in editable format either word or latex file)
              </div>
            </div>
            <div className={styles.guidelines}>
              <div className={styles.iconbox}>
                <RockerIcon />
              </div>
              <div className={styles.titledesc}>
                Copyright agreement form (It should be duly signed by the corresponding author with date). Copyright agreement template can be <a className={styles.link} target="_blank" href="https://drive.google.com/file/d/19WInx_LrULZV-ZTmEwwDw5io6Kj2xRTy/view">downloaded here</a>
              </div>
            </div>
            <div className={styles.guidelines}>
              <div className={styles.iconbox}>
                <RockerIcon />
              </div>
              <div className={styles.titledesc}>
                Payment Proof (Anyone of the author can pay - Registration fee per paper only)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
