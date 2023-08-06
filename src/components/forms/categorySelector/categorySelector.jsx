import {
  StyledCategoryPicker,
  CategoryPickerModal,
} from "./categorySelectorStyled";
import { useState } from "react";
import { useEffect } from "react";
import { ReactComponent as Chevron } from "../../../assets/icons/chevron.svg";

export const CategoryPicker = ({
  setCategotyProp = () => {},
  items = [],
  title = "",
  marginBottom = "",
  initValue = null,
}) => {
  const [active, setActive] = useState(false);
  const [stringTitle, setStringTitle] = useState("");
  const onMainButtonClick = () => {
    setActive((state) => !state);
  };
  const buttonClick = (line) => {
    setStringTitle(line);
    setCategotyProp(line);
    setActive(false);
  };

  useEffect(() => {
    if (!initValue) {
      return;
    }
    setStringTitle(initValue);
  }, [initValue]);
  return (
    <StyledCategoryPicker margin_bottom={marginBottom}>
      <h3 className="title">{title}</h3>
      <button
        type="button"
        className={`mainButton ${active ? "activeButton" : ""}`}
        onClick={onMainButtonClick}
      >
        {active
          ? `Select ${title.toLocaleLowerCase()}`
          : stringTitle || "Input"}
        <Chevron className={!active ? "activeChevron" : "disabledChevron"} />
      </button>
      {active && (
        <CategoryPickerModal>
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="categoryButton"
              onClick={() => {
                buttonClick(item);
              }}
            >
              {item}
            </button>
          ))}
        </CategoryPickerModal>
      )}
    </StyledCategoryPicker>
  );
};
