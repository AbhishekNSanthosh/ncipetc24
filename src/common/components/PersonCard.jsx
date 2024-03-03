/**
 * © NCIPETC-24 2024. All rights reserved.
 *
 * This code is the property of NCIPETC-24 and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

"use client"

import React, { useState } from 'react'
import styles from '@styles/scss/personCard.module.scss'

export default function PersonCard({ title, data }) {
    const [show, setShow] = useState(null);
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                {data.map((row, index) => (
                    <div className={styles.box} key={index}>
                        <span className={styles.name}>{row?.name}</span>
                        <span className={styles.dep}>{row?.desgn}</span>
                        <span className={styles.dep}>{row?.dep} {row?.more && <>
                            {show !== index &&
                                <span className={styles.more} onClick={() => {
                                    setShow(index);
                                }}>Show more...</span>
                            }
                        </>}</span>
                        {show === index &&
                            <>
                                <span className={styles.dep}>{row?.qualfs}</span>
                                <span className={styles.dep}>{row?.clg1}</span>
                                <span className={styles.dep}>{row?.clg2}</span>
                                <span className={styles.more} onClick={() => {
                                    setShow(null);
                                }}>Show less...</span>
                            </>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
