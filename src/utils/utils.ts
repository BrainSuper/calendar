import {IDate, IDay} from "../models/models";
import {useState} from "react";

export const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



export const getYearRange = (start: number, end: number) => {
    const yearRange = [];
    for (let i = start; i < end; i++) {
        yearRange.push(i);
    }
    return yearRange;
}


