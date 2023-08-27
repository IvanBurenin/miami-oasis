import Link from 'next/link'

import Navigation from '../Navigation/Navigation'

import styles from './Header.module.css'
import mainStyles from '../../main.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={mainStyles.container}>
                <div className={styles.headerInner}>
                    <div className={styles.left}>
                        <img src="./miami-oasis/logo.svg" alt="" className={styles.logo} />
                        <Link href='/price'>
                            <button className={`${mainStyles.btn} ${styles.headerBtn}`}>Купить онлайн</button>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </header>
    )
}