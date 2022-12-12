import React, {FC} from 'react';
import styles from '../styles/Day.module.css';
import {IDay} from "../models/models";
interface DaysProps {
    day?: IDay;
    monthDaysWithActivities?: IDay[];
}
const Day: FC<DaysProps> = ({day, monthDaysWithActivities}) => {

    if (monthDaysWithActivities && monthDaysWithActivities.length !== 0) {
        for (let i = 0; i < monthDaysWithActivities.length; i++) {
            if (day?.day === monthDaysWithActivities[i].day && day.year === monthDaysWithActivities[i].year && day.month === monthDaysWithActivities[i].month) {
                return (
                    <div className={styles.day__wrapper}>
                        {monthDaysWithActivities[i].day}
                        {monthDaysWithActivities[i].activities.map(activitie => <div key={activitie}>{activitie}</div>)}

                    </div>
                )
            }
        }
    }
    return (
        <div className={styles.day__wrapper}>
            {day?.day}

        </div>
    );
};

export default Day;