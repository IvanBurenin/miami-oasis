import Link from 'next/link'

import styles from './Hotel.module.css'
import mainStyles from '../../main.module.css'

export default function Hotel({title, text, images, raiting}){
    return(
        <div className={styles.hotelItem}>
            <div className={styles.hotelImages}>
                {images.map ((image, index) => 
                    <img key={index} src={image.img} alt="" className={styles.hotelImg} />
                )}
            </div>
            <div className={styles.hotelRight}>
                <h2 className={`${mainStyles.title} ${styles.hotelTitle}`}>{title}</h2>
                <div className={styles.raitings}>
                    {raiting.map((rate, index)=>
                        <img key={index} src={rate.raitingImg} alt="" className={styles.rateImg} />
                    )}
                </div>
                <div className={styles.content}>
                    {text.map((text, index)=>
                        <p key={index} className={`${mainStyles.text} ${styles.hotelText}`}>{text.paragraph}</p>
                    )}
                </div>
                <div className={styles.down}>
                    <Link href='/miami-oasis/price'>
                        <button className={mainStyles.btn}>Забронировать</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}