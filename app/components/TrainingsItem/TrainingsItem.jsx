import styles from '../../price/page.module.css'
import mainStyles from '../../main.module.css'

export default function TrainingsItem({img, title, price, checkTrainings}){

    const onClickInput = (event) => {
        checkTrainings(event.target.checked, event.target.value)
    }

    return(
        <label className={styles.item}>
            <input onClick={onClickInput} type="checkbox" className={styles.itemInput} name='trainings' value={price}/>
            <img src={img} alt="" className={styles.itemImg} />
            <p className={`${mainStyles.text} ${styles.itemText}`}>{title}</p>
            <p className={`${mainStyles.text} ${styles.itemText}`}>{price}</p>
        </label>
    )
}