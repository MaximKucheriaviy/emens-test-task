import { DataPikerStyled, DataPikerModal } from "./DataPikerStyled";
import { useState } from "react";
import { ReactComponent as Chevron } from "./SWM icons-outline-chevron-down-small.svg";
import { Calendar } from "./Calendar";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DataPiker = () => {
  const [active, setActive] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [currentDate] = useState(new Date(Date.now()));
  const onMainButtonClick = () => {
    setActive((state) => !state);
  };
  const onRightClick = () => {
    setDate((state) => {
      const newState = new Date(state);
      newState.setMonth(state.getMonth() + 1);
      return newState;
    });
  };
  const onLeftClick = () => {
    setDate((state) => {
      const newState = new Date(state);
      newState.setMonth(state.getMonth() - 1);
      return newState;
    });
  };
  return (
    <DataPikerStyled>
      <h3 className="title">Select date</h3>
      <button type="button" className="mainButton" onClick={onMainButtonClick}>
        {active ? "Select Date" : "Data"}
        <Chevron className={!active ? "activeChevron" : "disabledChevron"} />
      </button>
      {active && (
        <DataPikerModal className="datapiker">
          <div className="monthSelector">
            <button type="button" onClick={onLeftClick}>
              <Chevron className="left" />
            </button>
            <p>
              <span className="month">{monthNames[date.getMonth()]}</span>
              <span className="year">{date.getFullYear()}</span>
            </p>
            <button type="button" onClick={onRightClick}>
              <Chevron className="right" />
            </button>
          </div>
          <div className="weekName">
            <div className="red">Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div className="red">Sat</div>
          </div>
          <Calendar date={date} currentDate={currentDate} />
        </DataPikerModal>
      )}
    </DataPikerStyled>
  );
};
