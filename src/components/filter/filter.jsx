import { StyledFilter } from "./filterStyled";
import { createPortal } from "react-dom";

export const Filter = ({
  Name,
  items = [],
  values = [],
  setValue = () => {},
  disable,
  filterStatus,
}) => {
  const node = document.querySelector("#portal");
  const onItemClick = (index) => {
    setValue(values[index]);
  };
  return createPortal(
    <StyledFilter onClick={disable} repoition={filterStatus}>
      <div className="selector">
        <div>{Name}</div>

        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            className="selectorButton"
            onClick={() => {
              onItemClick(index);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </StyledFilter>,
    node
  );
};
