import { StyledForm } from "./CreateEventFormStyled";
import { FormInput } from "../FormInput/FromInput";
import { useState } from "react";
import { validate } from "../../../service/validation";
import { DataPiker } from "../../datepiker/DataPiker";

export const CreateEventForm = () => {
  const titleState = useState("");
  const descriptionState = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [desctiptionValid, setDesctiptionValid] = useState(true);
  const titleValidator = (line) => {
    setTitleValid(
      validate(line, {
        rejectStartSymbols: [" ", ",", ".", "-", "/", "\\", "@"],
        rejectSymbols: [",", ".", "-", "/", "\\"],
      })
    );
  };
  const desctiptionValidator = (line) => {
    setDesctiptionValid(
      validate(line, {
        rejectStartSymbols: [" ", ",", ".", "-", "/", "\\"],
        rejectSymbols: ["/", "\\"],
      })
    );
  };
  return (
    <StyledForm>
      <FormInput
        name="title"
        title="Title"
        errorMessage={!titleValid}
        valueState={titleState}
        validator={titleValidator}
      />
      <FormInput
        name="title"
        title="Decription"
        errorMessage={!desctiptionValid}
        valueState={descriptionState}
        validator={desctiptionValidator}
        field={true}
      />
      <DataPiker />
    </StyledForm>
  );
};
