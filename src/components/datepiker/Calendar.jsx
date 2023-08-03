import { StyledCalendar } from "./DataPikerStyled";
import { v4 } from "uuid";

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
export const Calendar = ({ date = new Date(), currentDate }) => {
  const dateCopy = new Date(date);
  const day = dateCopy.getDate();
  dateCopy.setDate(1);
  const calendarArr = [];
  for (let i = 0; i < dateCopy.getDay(); i++) {
    calendarArr.push("");
  }
  dateCopy.setDate(day);
  for (
    let i = 0;
    i < daysInMonth(date.getMonth() + 1, date.getFullYear());
    i++
  ) {
    calendarArr.push(`${i + 1}`);
  }
  const monthEQ = currentDate.getMonth() === dateCopy.getMonth();
  const yearEQ = currentDate.getFullYear() === dateCopy.getFullYear();

  return (
    <StyledCalendar>
      {calendarArr.map((item) => (
        <div
          className={`field ${
            Number.parseInt(item) === date.getDate() ? "selected" : ""
          }`}
          key={v4()}
        >
          {item && (
            <button
              type="button"
              className={
                monthEQ &&
                yearEQ &&
                Number.parseInt(item) === currentDate.getDate()
                  ? "current"
                  : ""
              }
            >
              {item}
            </button>
          )}
        </div>
      ))}
    </StyledCalendar>
  );
};
