import { DataPikerStyled, DataPikerModal } from "./DataPikerStyled";
import { useState } from "react";
import { ReactComponent as Chevron } from "./SWM icons-outline-chevron-down-small.svg";

export const DataPiker = () => {
  const [active, setActive] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const onMainButtonClick = () => {
    setActive((state) => !state);
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
            <Chevron className="left" />
            <p>
              <span className="month">April</span>
              <span className="year">2023</span>
            </p>
            <Chevron className="right" />
          </div>
        </DataPikerModal>
      )}
    </DataPikerStyled>
  );
};
