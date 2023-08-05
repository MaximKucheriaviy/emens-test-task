import { MainStyled, FileterButton, SortButton, AddButton } from "./MainStyled";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Filter2 } from "../../assets/icons/filters-2.svg";
import { ReactComponent as Filter3 } from "../../assets/icons/filters-3.svg";
import { useNavigate } from "react-router-dom";
import { EventList } from "../../components/eventList/EventList";
import { useAllEvents } from "../../redux/selectors/eventSelector";
import { useKeyword } from "../../redux/selectors/keywordSelector";
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
import { ReactComponent as Arrow } from "../../assets/icons/arrSmall.svg";
import { useWindowSize } from "../../service/useWindowSize";

const sortTypes = [
  "nameUp",
  "nameDown",
  "dataUp",
  "dataDown",
  "priorityUp",
  "priorityDown",
];

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [onPageEvents, setOnPageEvents] = useState([]);
  const [page, setPage] = useState(location.state ? location.state.page : 0);

  const [sortStatus, setSortStatus] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const keyword = useKeyword();
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
  const size = useWindowSize();
  const onPage = size < 1280 ? 6 : 8;
  useEffect(() => {
    if (filter === "") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((item) => item.category === filter));
    }

    setFilteredEvents((state) => {
      let newState = state.filter((item) => item.title.includes(keyword));
      switch (sort) {
        case sortTypes[0]:
          newState.sort((a, b) => {
            return a.title.toLowerCase() < b.title.toLowerCase();
          });
          break;
        case sortTypes[1]:
          newState.sort((a, b) => {
            return a.title.toLowerCase() > b.title.toLowerCase();
          });
          break;
        case sortTypes[2]:
          newState.sort((a, b) => {
            return a.eventDate > b.eventDate;
          });
          break;
        case sortTypes[3]:
          newState.sort((a, b) => {
            return a.eventDate < b.eventDate;
          });
          break;
        case sortTypes[5]:
          newState = [
            ...state.filter((item) => item.priority === "High"),
            ...state.filter((item) => item.priority === "Medium"),
            ...state.filter((item) => item.priority === "Low"),
          ];
          break;
        case sortTypes[4]:
          newState = [
            ...state.filter((item) => item.priority === "Low"),
            ...state.filter((item) => item.priority === "Medium"),
            ...state.filter((item) => item.priority === "High"),
          ];
          break;
        default:
      }
      return newState;
    });
  }, [filter, events, sort, keyword]);
  useEffect(() => {
    const start = onPage * page;
    const end = onPage * (page + 1);
    setOnPageEvents(filteredEvents.slice(start, end));
  }, [page, events, filter, filteredEvents, onPage]);

  return (
    <MainStyled>
      <div className="topLine">
        <div className="buttonsDiv">
          <AddButton type="button" onClick={onAddClick}>
            <Plus /> {size >= 768 && "Add new event"}
          </AddButton>
          <SortButton
            className={sort && "active"}
            type="button"
            onClick={(event) => {
              const offset = event.currentTarget.getBoundingClientRect();
              setSortStatus({
                top: offset.top,
                left: offset.left + offset.width - 170,
              });
            }}
          >
            {size >= 768 && "Sort by"}
            <Filter2 className={sort && "active"} />
          </SortButton>
          <FileterButton
            className={filter && "active"}
            type="button"
            active={0}
            onClick={(event) => {
              const offset = event.currentTarget.getBoundingClientRect();
              console.log(offset);
              setFilterStatus({ top: offset.top, left: offset.left });
            }}
          >
            {size >= 768 && (filter || "Category")}
            <Filter3 className={filter && "active"} />
          </FileterButton>
          {size >= 1280 && <h2>My events</h2>}
        </div>
      </div>
      {size >= 768 && size < 1280 && <h2>My events</h2>}
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
      {onPageEvents.length !== 0 && (
        <>
          <EventList list={onPageEvents} page={page} />
          {filteredEvents.length / onPage > 1 && (
            <div className="paginationWraper">
              <ReactPaginate
                className="paginate"
                pageCount={Math.round(filteredEvents.length / onPage)}
                pageRangeDisplayed={(size >= 768 && 3) || (size && 1)}
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
            </div>
          )}
        </>
      )}
      {onPageEvents.length === 0 && events.length !== 0 && (
        <div className="randomGenerator">
          <p>No events found</p>
        </div>
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
          keys={[
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
      {sortStatus && (
        <Filter
          width={170}
          filterStatus={sortStatus}
          disable={() => {
            setSortStatus(null);
          }}
          setValue={setSort}
          Name={
            <button
              className="mainButton"
              onClick={() => {
                setSort("");
              }}
            >
              Sort by <Filter2 />
            </button>
          }
          items={[
            <>
              by name
              <Arrow className="arrowUp" />{" "}
            </>,
            <>
              by name
              <Arrow className="arrowDown" />{" "}
            </>,
            <>
              by data
              <Arrow className="arrowUp" />{" "}
            </>,
            <>
              by data
              <Arrow className="arrowDown" />{" "}
            </>,
            <>
              by priority
              <Arrow className="arrowUp" />{" "}
            </>,
            <>
              by priority
              <Arrow className="arrowDown" />{" "}
            </>,
          ]}
          values={sortTypes}
          keys={sortTypes}
        />
      )}
    </MainStyled>
  );
};
