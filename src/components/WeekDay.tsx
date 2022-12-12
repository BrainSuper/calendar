import React, {FC, useEffect, useState} from 'react';
import styles from "../styles/MonthLayout.module.css";
import Day from "./Day";
import {months} from "../utils/utils";
import {IDate, IDay} from "../models/models";

interface WeekDayProps {
    numberDayOfWeek: number;
    nameDayOfWeek: string;
    date: IDate;
    setDate: (date: IDate) => void;
    monthDays: IDay[];
    setMonthDays: (days: IDay[]) => void;
    monthDaysWithActivities: IDay[];
}

const WeekDay: FC<WeekDayProps> = ({numberDayOfWeek, nameDayOfWeek, date, setDate, monthDays, setMonthDays, monthDaysWithActivities}) => {
    const [daysOfWeek, setDaysOfWeek] = useState<number[]>([])


    function getDays() {
        let days = new Date(date.year, date.month + 1, 0).getDate();
        const monthArr: IDay[] = [];
        for (let i = 1; i <= days; i++) {
            let newDate = new Date(date.year, date.month, i);
            let weekNumberOfDay = newDate.getDay();
            if (weekNumberOfDay === numberDayOfWeek) {
                setDaysOfWeek(prevState => [...prevState, i]);
            }
            let newObj: IDay = {year: date.year, month: months[date.month], day: i, activities: []};
            monthArr.push(newObj);
        }
        setMonthDays(monthArr);
    }
    useEffect(() => {
        setDaysOfWeek([]);
        getDays();

    }, [date])
    return (
        <div className={styles.week__day__wrapper}>
            {nameDayOfWeek}
            {daysOfWeek.map((day, i) => {
                if (i === 0 && day > numberDayOfWeek && numberDayOfWeek !== 0) {
                    return <><Day key={Math.random()}/><Day key={day} monthDaysWithActivities={monthDaysWithActivities} day={monthDays[day - 1]}/></>
                }
                return <Day key={day} monthDaysWithActivities={monthDaysWithActivities} day={monthDays[day - 1]}/>
            })}
        </div>
    );

    }




export default WeekDay;