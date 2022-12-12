import {IDate, IDay} from "../models/models";
import {useState} from "react";

export const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const useGetDaysOfWeek = (date: IDate, weekDay: number) => {
    const [daysOfWeek, setDaysOfWeek] = useState<number[]>([])

        let days = new Date(date.year, date.month + 1, 0).getDate();
        const monthArr: IDay[] = [];
        for (let i = 1; i <= days; i++) {
            let newDate = new Date(date.year, date.month, i);
            let weekNumberOfDay = newDate.getDay();
            if (weekNumberOfDay === weekDay) {
                setDaysOfWeek(prevState => [...prevState, i]);
            }
            let newObj: IDay = {year: date.year, month: months[date.month], day: i, activities: []};
            monthArr.push(newObj);

        }

    return daysOfWeek;
}

export const getYearRange = (start: number, end: number) => {
    const yearRange = [];
    for (let i = start; i < end; i++) {
        yearRange.push(i);
    }
    return yearRange;
}


