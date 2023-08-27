import Link from 'next/link'

import PlacesData from '../database/PlacesData'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Гид по отдыху - Miami Oasis',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Gudie(){
    return(
        <>
            <section className={styles.top}>
                <div className={mainStyles.container}>
                    <div className={styles.topInner}>
                        <div className={styles.topLeft}>
                            <h2 className={mainStyles.title}>Мы рады стать вашим надежным гидом в мире развлечений и отдыха в этом удивительном городе.</h2>
                            <div className={styles.textSection}>
                                <p className={mainStyles.text}>
                                    Майами предлагает множество возможностей для активного отдыха и отличного времяпрепровождения.
                                </p>
                                <p className={mainStyles.text}>
                                    Наш гид поможет вам ознакомиться с самыми популярными достопримечательностями, активностями и мероприятиями, чтобы вы могли насладиться всем, что Майами может предложить.
                                </p>
                                <p className={mainStyles.text}>
                                    Для Вашего приключения мы сделали незабываемый маршрут, который ознакомит вас с Майами и даст незабываемые эмоии.
                                </p>
                            </div>
                            <Link href='/price'>
                                <button className={`${mainStyles.btn} ${styles.topBtn}`}>Начните сейчас</button>
                            </Link>
                        </div>
                        <img src="./miami-oasis/guide-images/guide-image.jpg" alt="" className={styles.topImg} />
                    </div>
                </div>
            </section>

            <section className={styles.places}>
                <div className={mainStyles.container}>
                    <h2 className={`${mainStyles.title} ${styles.placesTitle}`}>Маршрут и места в Майами</h2>
                    <div className={styles.placesInner}>
                        {PlacesData.map((places, index) => 
                            <div key={index} className={styles.placesItem}>
                                <h2 className={`${mainStyles.title} ${styles.placeTitle}`}>{places.title}</h2>
                                <p className={styles.text}>{places.text}</p>
                                <img src={places.img} alt="" className={styles.placeImg} />
                            </div>
                        )}
                    </div>
                    <div className={styles.bottom}>
                        <p className={mainStyles.text}>И многие другие культовые места в солнчном городе Майами!</p>
                        <Link href='/price'>
                            <button className={`${mainStyles.btn} ${styles.bottomBtn}`}>Отправиться в путешествие</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}