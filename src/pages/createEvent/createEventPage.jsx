import { StyedCretePage, StyledBackButton } from "./createEventPageStyled";
import { ReactComponent as ArrowLeft } from "../../assets/icons/Arrow.svg";
import { CreateEventForm } from "../../components/forms/createEventForm/CreateEventForm";

export const CreateEventPage = () => {
  return (
    <StyedCretePage>
      <StyledBackButton to={"/"}>
        <ArrowLeft />
        Back
      </StyledBackButton>
      <h2>Create new event</h2>
      <CreateEventForm />
    </StyedCretePage>
  );
};
