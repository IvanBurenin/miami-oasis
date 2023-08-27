'use client'

import { useState } from 'react'

import KitchenData from '../../database/KitchenData'

import styles from './KitchenTabs.module.css'
import mainStyles from '../../main.module.css'
 
export default function KitchenTabs() {
    const [tab, setTab] = useState('Карибская кухня')

    const onClickTab = (title) => {
        setTab(title)
    }

    return(
        <>
            <div className={styles.kitchenTabs}>
                {KitchenData.map((kitchen, index) => (
                    <div onClick={() => onClickTab(kitchen.title)} key={index} className={styles.kitchenTab}> 
                        <button className={`${styles.btnTab} ${tab == kitchen.title ? styles.active : ''}`}></button>
                        <span className={`${mainStyles.text} ${styles.kitchenTabText}`}>{kitchen.title}</span>
                    </div>
                ))}
            </div>
            {KitchenData.map((kitchen, index) => (
                tab === kitchen.title && (
                    <p key={index} className={`${mainStyles.text} ${styles.kitchenText}`}>
                        {kitchen.text}
                    </p>
                )
            ))}
        </>
    )
}
