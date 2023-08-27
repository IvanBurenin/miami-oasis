'use client'

import { useState } from 'react'

import HotelsData from '../../database/HotelsData'
import NutritionData from '../../database/NutritionData'
import TrainingsData from '../../database/TrainingsData'

import HotelPrice from '../HotelPrice/HotelPrice'
import NutritionItem from '../NutritionItem/NutritionItem'
import TrainingsItem from '../TrainingsItem/TrainingsItem'

import styles from '../../price/page.module.css'
import mainStyles from '../../main.module.css'

export default function Form(){
    const [days, setDays] = useState('1.20')
    const [hotel, setHotel] = useState('')
    const [nutrition, setNutrition] = useState('')
    const [trainings, setTrainings] = useState([])
    const [modalOpened, setModalOpened] = useState(false)

    const checkDays = (event) => {
        setDays(event.target.value)
    }

    const checkHotel = (value) => {
        setHotel(value)
    }
    
    const checkNutrition = (value) => {
        setNutrition(value)
    }

    const checkTrainings = (isChecked, value) => {
        if (isChecked) {
            setTrainings([...trainings, value]);
        } else {
            setTrainings(trainings.filter((item) => item !== value));
        }
    }

    const totalSumm = () => {
        const nutritionTotal = Number(nutrition);
        const hotelTotal = Number(hotel);
        const trainingsTotal = trainings.reduce((sum, item) => sum + Number(item), 0);
    
        const subtotal = (nutritionTotal > 0 ? nutritionTotal : 0) + (hotelTotal > 0 ? hotelTotal : 0) + (trainingsTotal > 0 ? trainingsTotal : 0);
        const total = subtotal * Number(days);
    
        return total.toFixed(0);
    }

    const onClickBtn = () => {
        setModalOpened(true)
    }

    const closeModal = () => {
        setModalOpened(false)
    }

    return(
        <>
            <div className={`${styles.modal} ${modalOpened ? styles.modalOpened : ''}`}>
                <div className={styles.modalDialog}>
                     <div className={styles.modalContent}>
                        <div className={styles.modalInner}>
                            <h1 className={`${mainStyles.title} ${styles.modalText}`}>Тур по Майами</h1>
                            <h3 className={`${mainStyles.text} ${styles.modalText}`}>Мы рады, что Вы выбрали Miami Oasis, в скором времени, мы Вам перезвоним</h3>
                            <button onClick={closeModal} className={mainStyles.btn}>Вернуться</button>
                        </div>
                    </div>
                </div>
            </div>
                
            <form action="" className={styles.form}>
                    <div className={styles.formInner}>
                        <h2 className={`${mainStyles.container} ${mainStyles.title} ${styles.totalPrice}`}>{`Итоговая цена: ${totalSumm()} руб.`}</h2>
                        <div className={styles.formItems}>
                            <div className={`${mainStyles.container} ${styles.formItem}`}>
                                <div className={styles.formQuestion}>
                                    <p className={mainStyles.text}><strong>Количество дней:</strong></p>
                                    <span>*</span>
                                    <div className={styles.questions}>
                                        <label className={styles.question}>
                                            <input className={styles.input} onClick={checkDays} type='radio' name='days' value='1.20'/>
                                            <span className={styles.fakeInput}></span>
                                            <p className={`${mainStyles.text} ${styles.numbers}`}>7 дней</p>       
                                        </label>
                                        <label className={styles.question}>
                                            <input className={styles.input} onClick={checkDays} type='radio' name='days' value='1.50'/>
                                            <span className={styles.fakeInput}></span>
                                            <p className={`${mainStyles.text} ${styles.numbers}`}>14 дней</p>       
                                        </label>
                                        <label className={styles.question}>
                                            <input className={styles.input} onClick={checkDays} type='radio' name='days' value='1.80'/>
                                            <span className={styles.fakeInput}></span>
                                            <p className={`${mainStyles.text} ${styles.numbers}`}>30 дней</p>       
                                        </label>
                                    </div>
                                </div>
                                <p className={`${mainStyles.text} ${styles.postscriptum}`}>
                                    *дни начинают считаться на следующий день после прибытия на курорт, последний день пребывания (отлет) не считается в купленные дни
                                </p>
                            </div>
                        <div className={styles.formContainer}>
                            <div className={styles.chooseItem}>
                                <div className={styles.formQuestion}>
                                    <p className={mainStyles.text}><strong>Выберите отель:</strong></p>
                                    <span>*</span>
                                </div>
                                <div className={styles.items}>
                                    {HotelsData.map((item, index)=>
                                        <HotelPrice key={index} checkHotel={checkHotel} images={item.images} raitings={item.raiting} title={item.title} price={item.price}/>
                                    )}
                                </div>
                            </div>
                            <div className={styles.chooseItem}>
                                <div className={styles.formQuestion}>
                                    <p className={mainStyles.text}><strong>Выберите питание:</strong></p>
                                    <span>*</span>
                                </div>
                                <div className={styles.items}>
                                    {NutritionData.map((item, index)=>
                                        <NutritionItem key={index} checkNutrition={checkNutrition} img={item.img} title={item.title} price={item.price}/>
                                    )}
                                </div>
                            </div>
                            <div className={styles.chooseItem}>
                                <div className={styles.formQuestion}>
                                    <p className={mainStyles.text}><strong>Выберите желаемые виды спорта:</strong></p>
                                </div>
                                <div className={styles.items}>
                                    {TrainingsData.map((item, index)=>
                                        <TrainingsItem key={index} checkTrainings={checkTrainings} img={item.img} title={item.title} price={item.price}/>
                                    )}
                                </div>
                            </div>      
                        </div>
                        </div>
                        <div className={styles.down}>
                            <h2 className={`${mainStyles.title} ${styles.totalPrice} ${styles.margin}`}>{`Итоговая цена: ${totalSumm()}`}</h2>
                            <button onClick={onClickBtn} className={`${mainStyles.btn} ${styles.bottomBtn}`} type='button'>Забронировать</button>
                        </div>
                    </div>
            </form>
        </>
    )
}