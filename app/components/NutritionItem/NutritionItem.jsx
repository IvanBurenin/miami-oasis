import styles from '../../price/page.module.css'
import mainStyles from '../../main.module.css'

export default function NutritionItem({img, title, price, checkNutrition}){

    const onClickInput = (event) => {
        checkNutrition(event.target.value)
    }

    return(
        <label className={styles.item}>
            <input onClick={onClickInput} type="radio" className={styles.itemInput} name='nutrition' value={price}/>
            <img src={img} alt="" className={styles.itemImg} />
            <p className={`${mainStyles.text} ${styles.itemText}`}>{title}</p>
            <p className={`${mainStyles.text} ${styles.itemText}`}>{price}</p>
        </label>
    )
}