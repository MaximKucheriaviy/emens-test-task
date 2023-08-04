import { useLocation } from "react-router-dom";
import { StyedCretePage, StyledBackButton } from "./createEventPageStyled";
import { ReactComponent as ArrowLeft } from "../../assets/icons/Arrow.svg";
import { CreateEventForm } from "../../components/foms/createEventForm/CreateEventForm";

export const CreateEventPage = () => {
  const location = useLocation();
  return (
    <StyedCretePage>
      <StyledBackButton to={location.state ? location.state.from : "/"}>
        <ArrowLeft />
        Back
      </StyledBackButton>
      <h2>Create new event</h2>
      <CreateEventForm />
    </StyedCretePage>
  );
};
