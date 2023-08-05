import { MainStyled, FileterButton, SortButton, AddButton } from "./MainStyled";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Filter2 } from "../../assets/icons/filters-2.svg";
import { ReactComponent as Filter3 } from "../../assets/icons/filters-3.svg";
import { useNavigate } from "react-router-dom";
import { EventList } from "../../components/eventLinst/EventList";
import { useAllEvents } from "../../redux/selectors/eventSelector";
import {
  generateRandomEvent,
  getRandomInt,
} from "../../service/generateRandomEvent";
import { addEvent } from "../../redux/slices/eventSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as Chevron } from "../../assets/icons/chevron.svg";
import { useLocation } from "react-router-dom";
import { Filter } from "../../components/filter/filter";

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [onPageEvents, setOnPageEvents] = useState([]);
  const [page, setPage] = useState(location.state ? location.state.page : 1);

  const [sortStatus, setSortStatus] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);

  const [filter, setFilter] = useState("");
  const onAddClick = () => {
    navigate("/createEvent", { state: { from: "/" } });
  };
  const events = useAllEvents();
  const onGenerate = () => {
    const eventCount = getRandomInt(150, 200);
    for (let i = 0; i < eventCount; i++) {
      dispatch(addEvent(generateRandomEvent()));
    }
  };

  const onPage = 6;
  useEffect(() => {
    if (filter === "") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((item) => item.category === filter));
    }
  }, [filter, events]);
  useEffect(() => {
    const start = onPage * page;
    const end = onPage * (page + 1);
    setOnPageEvents(filteredEvents.slice(start, end));
  }, [page, events, filter, filteredEvents]);

  return (
    <MainStyled>
      <div className="buttonsDiv">
        <AddButton type="button" onClick={onAddClick}>
          <Plus />
        </AddButton>
        <SortButton type="button">
          <Filter2 />
        </SortButton>
        <FileterButton
          type="button"
          active={0}
          onClick={(event) => {
            const offset = event.currentTarget.getBoundingClientRect();
            console.log(offset);
            setFilterStatus({ top: offset.top, left: offset.left });
          }}
        >
          <Filter3 className={filter && "active"} />
        </FileterButton>
      </div>
      {events.length === 0 && (
        <div className="randomGenerator">
          <p>
            No events added. Press generate go generate random events or add it
            manually
          </p>
          <button type="button" onClick={onGenerate}>
            Generate
          </button>
        </div>
      )}
      {events.length !== 0 && (
        <>
          <EventList list={onPageEvents} page={page} />
          {filteredEvents.length / onPage > 1 && (
            <ReactPaginate
              className="paginate"
              pageCount={Math.round(filteredEvents.length / onPage)}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              initialPage={page}
              pageClassName="p-item"
              onPageChange={({ selected }) => {
                setPage(selected);
                window.scrollTo(0, 0);
              }}
              nextLabel={<Chevron className="nextChevron" />}
              previousLabel={<Chevron className="prevChevron" />}
              breakLabel={"..."}
              activeClassName="activeClass"
            />
          )}
        </>
      )}
      {filterStatus && (
        <Filter
          filterStatus={filterStatus}
          disable={() => {
            setFilterStatus(null);
          }}
          setValue={setFilter}
          Name={
            <button
              className="mainButton"
              onClick={() => {
                setFilter("");
              }}
            >
              Category <Filter3 />
            </button>
          }
          items={[
            "Art",
            "Music",
            "Business",
            "Conference",
            "Workshop",
            "Party",
            "Sport",
          ]}
          values={[
            "Art",
            "Music",
            "Business",
            "Conference",
            "Workshop",
            "Party",
            "Sport",
          ]}
        />
      )}
    </MainStyled>
  );
};
