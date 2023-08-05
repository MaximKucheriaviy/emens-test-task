import { EventPageStyled } from "./EventPageStyled";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/icons/Arrow.svg";
import { StyledBackButton } from "../createEvent/createEventPageStyled";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEvent } from "../../redux/selectors/eventSelector";
import { deleteEvent } from "../../redux/slices/eventSlice";
import { useDispatch } from "react-redux";
import { parseDate } from "../../service/timeFormater";

export const EventPage = () => {
  const params = useParams();
  const location = useLocation();
  const event = useEvent(params.id);
  const date = new Date(event.eventDate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteEventCallback = () => {
    dispatch(deleteEvent(event.id));
    navigate("/");
  };
  return (
    <EventPageStyled>
      <StyledBackButton
        to={location.state ? location.state.from : "/"}
        state={{ page: location.state ? location.state.page : 1 }}
      >
        <ArrowLeft />
        Back
      </StyledBackButton>
      <h2>{event.title}</h2>
      <div className="eventCard">
        <div className="imageThumb">
          <img src={event.file} alt={event.title} />
        </div>
        <div className="infoThumb">
          <p>{event.description}</p>
          <div className="additionalInfo">
            <div>{event.category}</div>
            <div className={event.priority}>{event.priority}</div>
            <div>{event.location}</div>
            <div>{parseDate(date)}</div>
          </div>
          <div className="buttons">
            <button type="button" className="edit">
              Edit
            </button>
            <button
              type="button"
              className="delete"
              onClick={deleteEventCallback}
            >
              Delete event
            </button>
          </div>
        </div>
      </div>
    </EventPageStyled>
  );
};
