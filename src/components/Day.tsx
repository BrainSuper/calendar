import React, {FC, useEffect, useState} from 'react';
import styles from '../styles/Day.module.css';
import {IDay} from "../models/models";
interface DaysProps {
    day?: IDay;
    monthDaysWithActivities?: IDay[];
    setMonthDaysWithActivities?: (monthDaysWithActivities: IDay[]) => void;
}
const Day: FC<DaysProps> = ({day, monthDaysWithActivities, setMonthDaysWithActivities}) => {
    const [showMore, setShowMore] = useState(false);

    if (monthDaysWithActivities && monthDaysWithActivities.length !== 0) {
        for (let i = 0; i < monthDaysWithActivities.length; i++) {
            if (day?.day === monthDaysWithActivities[i].day && day.year === monthDaysWithActivities[i].year && day.month === monthDaysWithActivities[i].month) {
                return (<>
                    <div className={styles.day__wrapper}>
                        {monthDaysWithActivities[i].day}
                        {monthDaysWithActivities[i].activities.map((activitie, i) => {
                            if (i === 2) {
                                return <div className={styles.show__more} onClick={() => setShowMore(prevState => !prevState)}>{showMore ? 'Hide' : 'Show more...'}</div>
                            } else if (i > 2) return;

                            return <div className={styles.activitie} key={activitie}>{activitie.length > 25 ? activitie.slice(0, 25) + '...': activitie}</div>
                        })}
                        {showMore && <div className={styles.show__more__menu}>
                            {monthDaysWithActivities[i].activities.length <= 2 && <span className={styles.close__button} onClick={() => setShowMore(prevState => !prevState)}>close</span>}
                            {monthDaysWithActivities[i].activities.map((activitie, index) => {
                                return <div>
                                    <span><span className={styles.delete} onClick={() => {
                                    if (setMonthDaysWithActivities !== undefined) {
                                        setMonthDaysWithActivities(monthDaysWithActivities.map(day => {
                                            if (day === monthDaysWithActivities[i]) {
                                                if (day.activities.length === 1) {
                                                    // setMonthDaysWithActivities(monthDaysWithActivities?.filter(dayWithAc => dayWithAc !== monthDaysWithActivities[i]));
                                                    setShowMore(prevState => !prevState)
                                                };
                                                return {...day, activities: [...day.activities.filter(act => act !== activitie)]}
                                            } return {...day};
                                        }))
                                    }


                                }}>del</span>{index + 1}) </span>{activitie}</div>
                            })}
                        </div>}
                    </div>

                    </>
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