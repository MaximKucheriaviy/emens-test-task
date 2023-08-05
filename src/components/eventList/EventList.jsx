import { StyledList } from "./EventListStyled";
import { EventCard } from "./eventCard/EventCard";

export const EventList = ({ list = [], page }) => {
  return (
    <StyledList>
      {list.map((item) => (
        <EventCard key={item.id} event={item} page={page} />
      ))}
    </StyledList>
  );
};
