import { StyldHeader } from "./HeaderStyled";
import { ReactComponent as Find } from "./search.svg";
import { ReactComponent as ChevronDown } from "./chevron-down-small.svg";
import { ReactComponent as Cross } from "./cross-small.svg";
import { Overlay } from "./HeaderStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../redux/slices/keyWordSlice";
import { useKeyword } from "../../redux/selectors/keywordSelector";
import { useWindowSize } from "../../service/useWindowSize";

export const Header = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const keyword = useKeyword();
  const dispatch = useDispatch();
  const onInputChage = (event) => {
    const { value } = event.currentTarget;
    dispatch(setKeyword(value));
  };
  const size = useWindowSize();
  const openButtonOnClick = () => {
    setOverlayVisible((state) => !state);
  };
  const onCrossClick = () => {
    dispatch(setKeyword(""));
  };
  return (
    <StyldHeader>
      <div className="topLine">
        <h1>Event Planer</h1>
        {size >= 768 && (
          <div className="searchField">
            <Find className="icon" />
            <input
              type="text"
              placeholder="Search by keywords"
              onChange={onInputChage}
              value={keyword}
              size={10}
            />
            {keyword && (
              <button type="button" onClick={onCrossClick}>
                <Cross />
              </button>
            )}
          </div>
        )}
        <div className="languageSelector">
          <button
            className="openButton"
            type="button"
            onClick={openButtonOnClick}
          >
            UK
            <ChevronDown />
          </button>
          <Overlay visible={overlayVisible ? 1 : 0}>
            <button type="button">EN</button>
            <button type="button">UA</button>
          </Overlay>
        </div>
      </div>

      {size < 768 && (
        <div className="searchField">
          <Find className="icon" />
          <input
            type="text"
            placeholder="Search by keywords"
            onChange={onInputChage}
            value={keyword}
            size={10}
          />
          {keyword && (
            <button type="button" onClick={onCrossClick}>
              <Cross />
            </button>
          )}
        </div>
      )}
    </StyldHeader>
  );
};
