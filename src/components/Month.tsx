import React, {FC} from 'react';
import styles from "../styles/MonthLayout.module.css";
import WeekDay from "./WeekDay";
import {weekDays} from "../utils/utils";
import {IDate, IDay} from "../models/models";

interface MonthProps {
    date: IDate;
    setDate: (date: IDate) => void;
    monthDays: IDay[];
    setMonthDays: (days: IDay[]) => void;
    monthDaysWithActivities: IDay[];
    setMonthDaysWithActivities: (monthDaysWithActivities: IDay[]) => void;
}

const Month: FC<MonthProps> = ({setDate,date, monthDays, setMonthDays, monthDaysWithActivities, setMonthDaysWithActivities}) => {

    return (
        <div className={styles.month__wrapper}>
            {weekDays.map((dayOfWeek, numberDay, weekArr) => {
                if (numberDay == 6) {
                    return <WeekDay setMonthDaysWithActivities={setMonthDaysWithActivities} monthDaysWithActivities={monthDaysWithActivities} monthDays={monthDays} setMonthDays={setMonthDays} key={weekArr[0]} date={date} setDate={setDate} nameDayOfWeek={weekArr[0]} numberDayOfWeek={0}/>
                } else if (numberDay === 0) {
                        return <WeekDay setMonthDaysWithActivities={setMonthDaysWithActivities} monthDaysWithActivities={monthDaysWithActivities} monthDays={monthDays} setMonthDays={setMonthDays} key={weekArr[numberDay + 1]} date={date} setDate={setDate} nameDayOfWeek={weekArr[numberDay + 1]} numberDayOfWeek={1}/>
                    }
                    return <WeekDay setMonthDaysWithActivities={setMonthDaysWithActivities} monthDaysWithActivities={monthDaysWithActivities} monthDays={monthDays} setMonthDays={setMonthDays} key={weekArr[numberDay + 1]} date={date} setDate={setDate} nameDayOfWeek={weekArr[numberDay + 1]} numberDayOfWeek={numberDay + 1} />

            })}
        </div>
    );
};

export default Month;