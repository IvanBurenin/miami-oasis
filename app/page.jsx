import Link from 'next/link'

import MainTabs from './components/MainTabs/MainTabs'
import Slider from './components/Slider/Slider'
import KitchenTabs from './components/KitchenTabs/KitchenTabs'

import styles from './page.module.css'
import mainStyles from './main.module.css'

export const metadata = {
    title: 'Главная - Miami Oasis',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function MiamiHome() {
    return(
        <>
            <section className={styles.top} style={{backgroundImage: `url("./miami-oasis/home-images/top-bg.jpg")`}}>
                <div className={mainStyles.container}>
                    <div className={styles.topInner}>
                        <h1 className={styles.topTitle}>Погружение в магию Майами</h1>
                        <p className={`${mainStyles.text} ${styles.topText}`}>
                        Солнце обнимает вас, океан обнимает ваши ноги, а Майами обнимает вашу душу - будьте готовы к волшебному путешествию
                        </p>
                        <Link href='/price'>
                            <button className={`${mainStyles.btn} ${styles.topBtn}`}>Погрузиться</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutInner}>
                        <div className={styles.aboutLeft}>
                            <h2 className={mainStyles.title}>
                                Мы сделаем все возможное, чтобы вам было комфортно и интересно во время вашего пребывания в Майами.
                            </h2>
                            <p style={{marginTop: '30px'}} className={mainStyles.text}>
                                Майами - город, который притягивает своими белоснежными пляжами, теплым океаном и живописными видами. Мы предлагаем широкий выбор путевок, чтобы удовлетворить все ваши потребности и предпочтения.
                            </p>
                            <MainTabs/>
                        </div>
                        <img src="./miami-oasis/home-images/about-image.jpg" alt="" className={styles.aboutImg} />
                    </div>
                </div>
            </section>

            <section className={styles.slider}>
                <div className={styles.sliderInner}>
                    <h2 className={`${mainStyles.title} ${mainStyles.container} ${styles.sliderTitle}`}>
                        Посетите культовые достопримечательности
                    </h2>
                    <Slider/>                     
                </div>
            </section>

            <section className={styles.adventure} style={{backgroundImage:(`url(./miami-oasis/home-images/adventure-bg.jpg)`)}}>
                <div className={`${mainStyles.container} ${styles.adventureContainer}`}>
                    <div className={styles.adventureInner}>
                        <div className={styles.adventureUp}>
                            <img src="./miami-oasis/logo.svg" alt="" />
                        </div>
                        <div className={styles.adventureCenter}>
                            <Link href='/price'>
                                <button className={`${mainStyles.btn} ${styles.adventureBtn}`} type='button'>
                                    Отправиться в путешествие
                                </button>
                            </Link>
                        </div>
                        <div className={styles.adventureDown}>
                            <p className={`${mainStyles.text} ${styles.adventureText}`}>
                                Насладитесь бескрайними белоснежными песчаными пляжами, ласкающими теплой солнечным лучами. Кристально чистая вода Атлантического океана приглашает вас наслаждаться купанием и водными видами спорта.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.kitchen}>
                <div className={mainStyles.container}>
                    <div className={styles.kitchenInner}>
                        <div className={styles.kitchenLeft}>
                            <h2 className={mainStyles.title}>Попробуйте местную кухню</h2>
                            <KitchenTabs/>
                        </div>
                        <img src="./miami-oasis/home-images/kitchen-image.jpg" alt="" className={styles.kitchenImg} />
                    </div>
                </div>
            </section>

            <section className={styles.sport}>
                <div className={`${mainStyles.container} ${styles.sportInner}`}>
                    <div className={styles.sportLeft}>
                        <h2 className={mainStyles.title}>Займитесь местным спортом</h2>
                        <p className={`${mainStyles.text} ${styles.sportText}`}>
                            С благоприятным климатом и прекрасной природой, Майами стал идеальным местом для занятий различными видами спорта. На нашем курорте, вы займетесь плаванием, серфингом, виндсерфингом и кайтсерфингом на прекрасных пляжах. Майами также является популярным местом для игры в гольф, теннис, бейсбол и баскетбол.
                        </p>
                        <div className={styles.sportImages}>
                            <img src="./miami-oasis/home-images/sports/sport-image1.jpg" alt="" className={styles.sportImg} />
                            <img src="./miami-oasis/home-images/sports/sport-image2.jpg" alt="" className={styles.sportImg} />
                            <img src="./miami-oasis/home-images/sports/sport-image3.jpg" alt="" className={styles.sportImg} />
                            <img src="./miami-oasis/home-images/sports/sport-image4.jpg" alt="" className={styles.sportImg} />
                        </div>
                    </div>
                    <img src="./miami-oasis/home-images/sport-image.png" alt="" className={styles.sportBigImg} />
                </div>
            </section>

            <section className={styles.bottomBtn}>
                <Link href='/price'>
                    <button className={mainStyles.btn} type='button'>Приобрести тур</button>
                </Link>
            </section>

            <section className={styles.end} style={{backgroundImage: `url('./miami-oasis/home-images/end-bg.jpg')`}}></section>
        </>
    )
}
