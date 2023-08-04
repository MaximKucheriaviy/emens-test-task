import { parseDate } from "../../../service/timeFormater";
import { StyledCard, MoreInfo } from "./EventCardStyled";

export const EventCard = ({ event }) => {
  const date = new Date(event.eventDate);
  return (
    <StyledCard>
      <div className="topItems">
        <div>{event.category}</div>
        <div className={event.priority}>{event.priority}</div>
      </div>
      <div className="imageThumb">
        <img src={event.file} alt={event.title} />
      </div>
      <div className="descriptionThumb">
        <div className="timeLocation">
          <div className="time">{parseDate(date)}</div>
          <div className="location">{event.location}</div>
        </div>
        <h3 className="title">{event.title}</h3>
        <p className="description">{event.description}</p>
        <div className="hiddenBlock">
          <MoreInfo to={`/${event.id}`} state={{ frtom: "/" }}>
            More info
          </MoreInfo>
        </div>
      </div>
    </StyledCard>
  );
};
