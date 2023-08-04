import { MainStyled, FileterButton, SortButton, AddButton } from "./MainStyled";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Filter2 } from "../../assets/icons/filters-2.svg";
import { ReactComponent as Filter3 } from "../../assets/icons/filters-3.svg";
import { useNavigate } from "react-router-dom";
import { EventList } from "../../components/eventLinst/EventList";
import { useAllEvents } from "../../redux/selectors/eventSelector";

export const MainPage = () => {
  const navigate = useNavigate();
  const onAddClick = () => {
    navigate("/createEvent", { state: { from: "/" } });
  };
  const events = useAllEvents();
  return (
    <MainStyled>
      <div className="buttonsDiv">
        <AddButton type="button" onClick={onAddClick}>
          <Plus />
        </AddButton>
        <SortButton type="button">
          <Filter2 />
        </SortButton>
        <FileterButton type="button" active={0}>
          <Filter3 />
        </FileterButton>
      </div>
      <EventList list={events} />
    </MainStyled>
  );
};
