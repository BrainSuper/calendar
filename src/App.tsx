import React, {useEffect, useState} from 'react';
import './App.css';
import {IChosenDate, IDate, IDay} from "./models/models";
import Month from "./components/Month";
import {months} from "./utils/utils";
import Headers from "./components/Header";
import Modal from "./components/Modal";

function App() {

    const [date, setDate] = useState<IDate>({year: 2022, month: 11});
    const [chosenDate, setChosenDate] = useState<IChosenDate>({year: date.year, month: months[date.month], day: 1})
    const [modal, setModal] = useState<boolean>(true);
    const [monthDays, setMonthDays] = useState<IDay[]>([])
    const [monthDaysWithActivities, setMonthDaysWithActivities] = useState<IDay[]>([])
useEffect(() => {
    setChosenDate({...chosenDate, year: date.year, month: months[date.month]})
}, [date])


    return (
        <div className="App">
            {modal && <Modal monthDaysWithActivities={monthDaysWithActivities} monthDays={monthDays} setMonthDaysWithActivities={setMonthDaysWithActivities} modal={modal} setModal={setModal} chosenDate={chosenDate} setChosenDate={setChosenDate}/>}
            <Headers setModal={setModal} date={date} setDate={setDate} chosenDate={chosenDate} setChosenDate={setChosenDate}/>
            <Month monthDaysWithActivities={monthDaysWithActivities} setMonthDays={setMonthDays} monthDays={monthDays} date={date} setDate={setDate}/>
        </div>
    );
}

export default App;
