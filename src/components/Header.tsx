import React, {FC, useState} from 'react';
import styles from '../styles/Header.module.css';
import {IChosenDate, IDate} from "../models/models";
import {getYearRange, months} from "../utils/utils";

interface HeaderProps {
    date: IDate;
    setDate: (date: IDate) => void;
    chosenDate: IChosenDate;
    setChosenDate: (chosenDate: IChosenDate) => void;
    setModal: (modal: boolean) => void;
}
const Header: FC<HeaderProps> = ({date,setDate, chosenDate, setChosenDate, setModal}) => {
    const yearRange = getYearRange(2000, 2030);
    function monthHandler(param: string) {
        if (param === 'prev') {

            setDate({...date, month: date.month - 1})
        } else if (param === 'next') {

            setDate({...date, month: date.month + 1})
        }

    }

    return (
        <div className={styles.header__wrapper}>
            <button onClick={() => setModal(true)} className={styles.task__button}>Add task</button>
            <div className={styles.month}>
                <span onClick={() => {
                if (date.month === 0) {
                    setDate({...date, year: date.year - 1, month: 11})
                } else {monthHandler('prev')}

            }} className={styles.left}>
                </span>{months[date.month]}
                <span onClick={() => {
                if (date.month === 11) {
                    setDate({...date, year: date.year + 1, month: 0})
                } else {
                    monthHandler('next')
                }
                }} className={styles.right}>
                </span>
            </div>
            <select className={styles.select} value={date.year} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setDate({...date, year: +e.target.value })
            }}>
                {yearRange.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
        </div>
    );
};

export default Header;