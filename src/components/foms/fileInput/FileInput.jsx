import { v4 } from "uuid";
import { StyledFileInput } from "./FileInputStyled";
import { useRef } from "react";

export const FileInput = ({ name, title }) => {
  const id = useRef(v4());
  return (
    <StyledFileInput>
      <label className="title" htmlFor={id.current}>
        {title}
        <div className="inputDiv">Input</div>
      </label>
      <input name={name} type="file" id={id.current} />
    </StyledFileInput>
  );
};
