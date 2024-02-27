"use client"

import React, { useState } from 'react'
import styles from '@styles/scss/navbar.module.scss'
import { navLinks } from '../../common/constants/constants'
import Link from 'next/link'
// import DropIcon from '@icons/DropIcon'
import MenuIcon from '@icons/MenuIcon'
import RightArrowIcon from '@icons/RightArrowIcon'
import CloseIcon from '@icons/CloseIcon'
import PlusIcon from '@icons/PlusIcon'
import MinusIcon from '@icons/MinusIcon'
import { toast } from 'react-hot-toast';

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showLink, setShowLink] = useState(null);
    const [hover, setHover] = useState(null)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.navRow}>
                    <div className={styles.left}>
                        <Link className={styles.logo} href="/">NCIPETC'24</Link>
                    </div>
                    <div className={styles.center}                                 onMouseLeave={() => {
                                    setHover(null)
                                }}>
                        {navLinks?.map((navItem, index) => (
                            <div className={styles.navItemBox} key={`navLink${navItem + '_' + index + 1}`} onMouseEnter={() => {
                                setHover(index)
                            }}

                                onClick={()=>{
                                    setHover(index)
                                }}
                            >
                                <Link className={styles.navLink} href={navItem?.link}>{navItem?.title}</Link>
                                {/* {navItem?.moreLinks && <DropIcon />} */}
                                {navItem?.moreLinks &&
                                    <>
                                        {hover === index &&
                                            <div className={styles.popper}>
                                                {navItem?.moreLinks?.map((moreLink, index) => (
                                                    <div className={styles.morelinkBox} key={`moreLink${index + 1}`}>
                                                        <div className={styles.row}>
                                                            <Link className={styles.moreLink} href={moreLink?.link}>{moreLink?.title}</Link>
                                                        </div>
                                                        {moreLink?.hr &&
                                                            <hr />
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        }
                                    </>
                                }
                            </div>
                        ))}
                    </div>
                    <div className={styles.right}>
                        <button className={styles.registerBtn} onClick={()=>{
                            toast.success('Registration starts soon !!!',{
                                duration:3000
                            })
                        }}>Register now</button>
                    </div>
                    <div className={styles.rightMobile}>
                        {isDrawerOpen ?
                            <div className={styles.menu} onClick={() => {
                                setIsDrawerOpen(false)
                            }}>
                                <CloseIcon />
                            </div>
                            :
                            <div className={styles.menu} onClick={() => {
                                setIsDrawerOpen(true)
                            }}>
                                <MenuIcon />
                            </div>
                        }
                    </div>
                </div>
                {isDrawerOpen &&
                    <div className={styles.drawer}>
                        <div className={styles.mobileRowRes}>
                            {navLinks?.map((link, index) => (
                                <div className={styles.navlinkBOx}>
                                    <Link href={link?.moreLinks ? "#" : link?.link} className={styles.navMobileItemCol} onClick={() => {
                                        if (!link?.moreLinks) {
                                            setIsDrawerOpen(false)
                                        }
                                    }}>
                                        <div className={styles.mobileRow}>
                                            <div className={styles.navMobileItemName} onClick={() => {
                                                setShowLink(index);
                                            }}>
                                                <span className={styles.navMobileItem}>{link?.title}</span>
                                            </div>
                                            {link?.moreLinks ?
                                                <>
                                                    {showLink === index ?
                                                        <div className={styles.arrowIcon} onClick={() => {
                                                            setShowLink(null);
                                                        }}>
                                                            < MinusIcon />
                                                        </div>
                                                        :
                                                        <div className={styles.arrowIcon} onClick={() => {
                                                            setShowLink(index)
                                                        }}>
                                                            <PlusIcon />
                                                        </div>
                                                    }
                                                </>
                                                :
                                                <div className={styles.arrowIcon}>
                                                    < RightArrowIcon />
                                                </div>
                                            }
                                        </div>
                                    </Link>
                                    {showLink === index &&
                                        <div className={styles.morelinkcol}>
                                            {link?.moreLinks?.map((moreLink, index) => (
                                                <Link href={moreLink?.link} className={styles.mobileMoreLinkRow} key={`morelink${index}`} onClick={() => {
                                                    setIsDrawerOpen(false)
                                                }}>
                                                    <div className={styles.mobileMoreLinkBox}>
                                                        <div className={styles.navMobileItemName}>
                                                            <span className={styles.navMobileItem}>{moreLink?.title}</span>
                                                        </div>
                                                        <div className={styles.arrowIcon}>
                                                            <RightArrowIcon />
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    }
                                </div>
                            ))}
                            <div className={styles.res}>
                                <button className={styles.registerResBtn}>Register now</button>
                            </div>
                        </div>
                        <div className={styles.credits}>
                            <span className={styles.rights}>Copyright © 2024 - NCIPETC'24</span>
                            <span className={styles.rights}>Designed & Developed by <Link target='_blank' className={styles.high} href="https://www.linkedin.com/in/abhishek-santhosh/">Abhishek Santhosh</Link></span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
