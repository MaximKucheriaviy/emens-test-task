import { StyldHeader } from "./HeaderStyled";
import { ReactComponent as Find } from "./search.svg";

export const Header = () => {
  return (
    <StyldHeader>
      <div className="topLine">
        <h1>Event Planer</h1>
        <button className="languageSelector">UK</button>
      </div>
      <div className="searchField">
        <Find className="icon" />
        <input type="text" />
      </div>
    </StyldHeader>
  );
};
