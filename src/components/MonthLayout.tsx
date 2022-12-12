import React from 'react';
import styles from '../styles/DaysLayout.module.css';
import Day from "./Day";

const DaysLayout = () => {
    const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    return (
        <div className={styles.days__wrapper}>
            <div className={styles.week__day__wrapper}>
                {weekDays.map((day, i, arr) => {
                    if(i === 0) {
                        return <div className={styles.week__day}>{arr[1]}</div>}
                    else if (i === arr.length - 1) {
                        return <div className={styles.week__day}>{arr[0]}</div>
                    } else return <div className={styles.week__day}>{arr[i + 1]}</div>
                })}
            </div>
        </div>
    );
};

export default DaysLayout;