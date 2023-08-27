'use client'

import Link from 'next/link'
import { useState } from 'react'

import styles from '../Header/Header.module.css'
import mainStyles from '../../main.module.css'

export default function Navigation() {
    const [menu, setMenu] = useState(false)

    const onClickBtn = () => {
        setMenu(!menu)
    }

    return(
        <nav className={`${styles.nav} ${ menu ? styles.menuActive : '' }`}>
            <button onClick={onClickBtn} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul className={styles.menu}>
                <div className={`${styles.user} ${styles.userAdaptive}`}>
                    <button className={styles.userBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" fill="white"/>
                        </svg>    
                    </button> 
                    <span className={styles.userText}>Вход</span>      
                </div>
                <li className={styles.menuItem}>
                    <Link onClick={onClickBtn} href='/'>
                        Главная
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link onClick={onClickBtn} href='/price'>
                        Стоимость
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link onClick={onClickBtn} href='/accomodation'>
                        Проживание
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link onClick={onClickBtn} href='/guide'>
                        Гид по отдыху
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/price'>
                        <button className={`${mainStyles.btn} ${styles.btnAdaptive}`}>Купить онлайн</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}