import { StyledForm } from "./CreateEventFormStyled";
import { FormInput } from "../FormInput/FromInput";
import { useState } from "react";
import { validate } from "../../../service/validation";
import { DataPiker } from "../datepiker/DataPiker";
import { TimePicker } from "../timePicker/timePicker";
import { CategoryPicker } from "../categorySelector/categorySelector";
import { FileInput } from "../fileInput/FileInput";

export const CreateEventForm = () => {
  const titleState = useState("");
  const descriptionState = useState("");
  const locationState = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [priority, setPriority] = useState(null);

  const [titleValid, setTitleValid] = useState(true);
  const [desctiptionValid, setDesctiptionValid] = useState(true);
  const [locationValid, setLocationValid] = useState(true);
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
  const locationValidator = (line) => {
    setLocationValid(line, {
      rejectStartSymbols: [" ", ",", ".", "-", "/", "\\", "@"],
      rejectSymbols: [",", ".", "/", "\\"],
    });
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
        name="description"
        title="Decription"
        errorMessage={!desctiptionValid}
        valueState={descriptionState}
        validator={desctiptionValidator}
        field={true}
      />
      <DataPiker setDateProp={setEventDate} />
      <TimePicker setDate={setEventDate} />
      <FormInput
        name="location"
        title="Location"
        errorMessage={!locationValid}
        valueState={locationState}
        validator={locationValidator}
      />
      <CategoryPicker
        title="Category"
        setCategotyProp={setCategory}
        items={[
          "Art",
          "Musick",
          "Business",
          "Conference",
          "Workshop",
          "Party",
          "Sport",
        ]}
      />
      <FileInput title="Foto" />
      <CategoryPicker
        title="Priority"
        setCategotyProp={setPriority}
        items={["High", "Medium", "Low"]}
        marginBottom="0px"
      />
    </StyledForm>
  );
};
