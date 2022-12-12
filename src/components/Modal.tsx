import React, {FC, useState} from 'react';
import styles from '../styles/Modal.module.css';
import {IChosenDate, IDay} from "../models/models";
import {getYearRange, months} from "../utils/utils";

interface ModalProps {
    chosenDate: IChosenDate;
    setChosenDate: (chosenDate: IChosenDate) => void;
    modal: boolean;
    setModal: (modal: boolean) => void;
    monthDays: IDay[];
    monthDaysWithActivities: IDay[];
    setMonthDaysWithActivities: (monthDaysWithActivities: IDay[]) => void;
}

const Modal:FC<ModalProps> = ({chosenDate, setChosenDate, setModal, modal, monthDays, setMonthDaysWithActivities, monthDaysWithActivities}) => {
    const yearRange = getYearRange(2000, 2023);
    const [activitie, setActivitie] = useState<string>('');

    const checkDaysWithActivities = () => {
        const newDaysWithActivities: IDay = {day: chosenDate.day, month: chosenDate.month, year: chosenDate.year, activities: [activitie]};
        if (monthDaysWithActivities.length > 0) {
            for (let i = 0; i < monthDaysWithActivities.length; i++) {
                if (monthDaysWithActivities[i].day === chosenDate.day && monthDaysWithActivities[i].year === chosenDate.year && monthDaysWithActivities[i].month === chosenDate.month) {
                    console.log('start')
                    let newAct: string[] = monthDaysWithActivities[i].activities;
                    newAct.push(activitie);
                    setMonthDaysWithActivities(monthDaysWithActivities.map(day => {
                        if (day.year === monthDaysWithActivities[i].year && day.day === monthDaysWithActivities[i].day && day.month === monthDaysWithActivities[i].month) {
                            return {...day, activities: newAct}
                        } return day;
                    }))
                    console.log('end')
                } else setMonthDaysWithActivities([...monthDaysWithActivities, newDaysWithActivities])
            }

        } else if (monthDaysWithActivities.length === 0) {
            console.log('here')
            setMonthDaysWithActivities([...monthDaysWithActivities, newDaysWithActivities])
        }

    }
    return (
        <div className={styles.modal__wrapper}>
            <div className={styles.modal__content}>
                <span onClick={() => {
                    setModal(false);
                }}>close</span>
                <form className={styles.modal__form} onSubmit={(e) => {
                    e.preventDefault()
                    checkDaysWithActivities();
                }}>
                    <h1>Type your tasks</h1>
                    <input value={activitie} onChange={(e) => setActivitie(e.target.value)} type="text" placeholder={'your task'}/>
                    <select onChange={(e) => setChosenDate({...chosenDate, year: +e.target.value})}>
                        {yearRange.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                    <select onChange={(e) => setChosenDate({...chosenDate, month: e.target.value})}>
                        {months.map(month => <option key={month} value={month}>{month}</option>)}
                    </select>
                    <select onChange={(e) => setChosenDate({...chosenDate, day: +e.target.value})}>
                        {monthDays.map(day => <option key={day.day} value={day.day}>{day.day}</option>)}
                    </select>
                    <button>Add task</button>
                    <div className={styles.access}>Task added</div>
                </form>
            </div>
        </div>
    );
};

export default Modal;