import styles from '../../price/page.module.css'
import mainStyles from '../../main.module.css'

export default function HotelPrice({images, raitings, title, price, checkHotel}){

    const onClickInput = (event) => {
        checkHotel(event.target.value)
    }

    return(
        <label className={styles.item}>
            <input onClick={onClickInput} type="radio" className={styles.itemInput} name='hotel' value={price}/>
            <img src={images[0].img} alt="" className={styles.itemImg} />
            <div className={styles.raitings}>
                {raitings.map((raiting, index)=>
                    <img key={index} src={raiting.raitingImg} alt="" className={styles.raitingImg} />
                )}
            </div>
            <p className={`${mainStyles.text} ${styles.itemText}`}>{title}</p>
            <p className={`${mainStyles.text} ${styles.itemText}`}>{`${price} руб.`}</p>
        </label>
    )
}