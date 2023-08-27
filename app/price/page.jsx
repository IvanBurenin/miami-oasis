export const metadata = {
    title: 'Отправиться в тур - Miami Oasis',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

import Form from '../components/Form/Form'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export default function Price(){
    return(
        <>
            <section className={styles.top}>
                <div className={mainStyles.container}>
                    <div className={styles.topInner}>
                        <div className={styles.welcome}>
                            <h2 className={mainStyles.title}>Добро пожаловать в нашу туристическую компанию!</h2>
                            <img src="./miami-oasis/price-images/welcome-icon.svg" alt="" className={styles.welcomeIcon} />
                        </div>
                        <p className={`${mainStyles.text} ${styles.topText}`}>
                            За Вас мы осуществим подбор и бронирование гостиниц и отелей в Майами. Организуем трансферы от аэропорта до отеля и обратно, предоставим транспорт для экскурсий и поездок по городу. Разработаем тур-экскурсию по Майами, включая популярные достопримечательности, культурные объекты, парки развлечений и местные достижения. Организуем активный отдых. Предоставим услуги переводчиков и гидов. Подберем необходимые кафе и рестораны для Вас. А так же поможем оформить документы и визу для поездки в Майами и обеспечим круглосуточную поддержку для решения проблем.
                        </p>
                    </div>
                </div>
            </section>

            <Form/>
        </>
    )
}