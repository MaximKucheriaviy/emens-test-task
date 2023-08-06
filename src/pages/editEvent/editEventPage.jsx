import { StyedCretePage, StyledBackButton } from "./editEventPageStyled";
import { ReactComponent as ArrowLeft } from "../../assets/icons/Arrow.svg";
import { EditEventForm } from "../../components/forms/editEventForm/EditEventForm";
import { useParams } from "react-router-dom";

export const EditEventPage = () => {
  const { id } = useParams();
  return (
    <StyedCretePage>
      <StyledBackButton to={`/${id}`}>
        <ArrowLeft />
        Back
      </StyledBackButton>
      <h2>Edit event</h2>
      <EditEventForm />
    </StyedCretePage>
  );
};
