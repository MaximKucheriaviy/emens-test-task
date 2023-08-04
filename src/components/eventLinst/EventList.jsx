import { StyledList } from "./EventListStyled";
import { EventCard } from "./eventCard/EventCard";

export const EventList = ({ list = [] }) => {
  return (
    <StyledList>
      {list.map((item) => (
        <EventCard key={item.id} event={item} />
      ))}
    </StyledList>
  );
};
