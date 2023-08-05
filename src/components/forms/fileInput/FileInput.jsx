import { v4 } from "uuid";
import { StyledFileInput } from "./FileInputStyled";
import { useRef } from "react";
import { useState } from "react";
import { ReactComponent as Cross } from "../../../assets/icons/cross-small.svg";

export const FileInput = ({ name, title, setFile }) => {
  const id = useRef(v4());
  const [filePath, setFilePath] = useState("");

  const onChage = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setFilePath("File selected");
    const url = URL.createObjectURL(file);
    console.log(event.target.value);
    setFile(url);
  };
  const reset = (event) => {
    event.preventDefault();
    setFilePath("");
    setFile(null);
  };
  return (
    <StyledFileInput>
      <label className="title" htmlFor={id.current}>
        {title}
        <div className="inputDiv">
          {filePath || "Input"}
          {filePath && (
            <button className="resetButton" type="button" onClick={reset}>
              <Cross />
            </button>
          )}
        </div>
      </label>
      <input name={name} type="file" id={id.current} onChange={onChage} />
    </StyledFileInput>
  );
};
