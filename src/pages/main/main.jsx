import { MainStyled, FileterButton, SortButton, AddButton } from "./MainStyled";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Filter2 } from "../../assets/icons/filters-2.svg";
import { ReactComponent as Filter3 } from "../../assets/icons/filters-3.svg";

export const MainPage = () => {
  return (
    <MainStyled>
      <div className="buttonsDiv">
        <AddButton type="button">
          <Plus />
        </AddButton>
        <SortButton type="button">
          <Filter2 />
        </SortButton>
        <FileterButton type="button" active={0}>
          <Filter3 />
        </FileterButton>
      </div>
    </MainStyled>
  );
};
