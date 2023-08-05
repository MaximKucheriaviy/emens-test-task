import { StyledInput } from "./FromInputStyled";
import { v4 } from "uuid";
import { useRef } from "react";
import { ReactComponent as Cross } from "../../../assets/icons/cross-small.svg";

export const FormInput = ({
  title,
  errorMessage,
  valueState,
  validator = () => {},
  name = "",
  field = false,
  style,
}) => {
  const id = useRef(v4());
  const onChage = (event) => {
    const value = event.target.value;
    valueState[1](value);
    validator(value);
  };
  const reset = () => {
    valueState[1]("");
  };
  return (
    <StyledInput
      error={errorMessage ? 1 : 0}
      field={field ? 1 : 0}
      style={style}
    >
      <label className="title" htmlFor={id}>
        {title}
      </label>
      <div className="inputDiv">
        {!field ? (
          <input
            name={name}
            type="text"
            id={id}
            value={valueState[0]}
            onChange={onChage}
          />
        ) : (
          <textarea
            name={name}
            type="text"
            id={id}
            value={valueState[0]}
            onChange={onChage}
          />
        )}
        {valueState[0] && (
          <button className="resetButton" type="button" onClick={reset}>
            <Cross />
          </button>
        )}
      </div>
      {errorMessage && <p className="errorMessage">Invalid input</p>}
    </StyledInput>
  );
};
