import HotelsData from '../database/HotelsData'

import Hotel from '../components/Hotel/Hotel'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Проживание - Miami Oasis',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Accomodation(){
    return(
        <>
            <section className={styles.top}>
                <div className={mainStyles.container}>
                    <div className={styles.topInner}>
                        <h2 className={`${mainStyles.title} ${styles.topTitle}`}>
                            Мы предлагаем широкий выбор вариантов проживания, чтобы удовлетворить все ваши предпочтения и потребности.
                        </h2>
                    </div>
                </div>
                <img src="./miami-oasis/accomodation-images/accomodation-bg.png" alt="" className={styles.topImg} />
            </section>

            <section className={styles.hotels}>
                <h2 className={`${mainStyles.title} ${styles.hotelsTopTitle}`}>Выбор отеля</h2>
                <div className={styles.hotelsInner}>
                    {HotelsData.map((hotel, index) => 
                        <Hotel key={index} title={hotel.title} text={hotel.text} raiting={hotel.raiting} images={hotel.images}/>
                    )}
                </div>
            </section>
        </>
    )
}