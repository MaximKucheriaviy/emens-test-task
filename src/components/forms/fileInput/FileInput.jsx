import { v4 } from "uuid";
import { StyledFileInput } from "./FileInputStyled";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Cross } from "../../../assets/icons/cross-small.svg";

export const FileInput = ({ name, title, setFile, initValue }) => {
  const id = useRef(v4());
  const [filePath, setFilePath] = useState("");

  useEffect(() => {
    if (!initValue) {
      return;
    }
    setFilePath("File selected");
  }, [initValue]);

  const onChage = (event) => {
    const file = event.target.files[0];
    setFilePath("File selected");
    const url = URL.createObjectURL(file);
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
