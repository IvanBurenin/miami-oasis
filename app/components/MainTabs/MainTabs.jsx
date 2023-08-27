'use client'

import { useState } from 'react'

import AboutData from '../../database/AboutData'

import styles from './MainTabs.module.css'

export default function MainTabs() {
    const [tab, setTab] = useState('Архитектура')

    const onClickTab = (event) => {
        setTab(event.target.value)
    }

    return(
        <>
            <div className={styles.aboutTabs}>
                {AboutData.map((about, index) => (
                    <button onClick={onClickTab} key={index} className={`${styles.tab} ${tab == about.kind ? styles.active : ''}`} value={about.kind} type='button'>
                        {about.kind}
                    </button>
                ))}
            </div>
            {AboutData.map((about) => (
                tab === about.kind && about.items.map((item, nestedIndex) => (
                    <div key={nestedIndex} className={styles.tabItem} style={{ backgroundImage: `url('${item.img}')` }}>
                        <p className={styles.tabText}>
                            {item.text}
                        </p>
                    </div>
                ))
            ))}
        </>
    )
}