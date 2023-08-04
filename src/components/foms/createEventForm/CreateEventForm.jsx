import { StyledForm } from "./CreateEventFormStyled";
import { FormInput } from "../FormInput/FromInput";
import { useState } from "react";
import { validate } from "../../../service/validation";
import { DataPiker } from "../datepiker/DataPiker";
import { TimePicker } from "../timePicker/timePicker";
import { CategoryPicker } from "../categorySelector/categorySelector";
import { FileInput } from "../fileInput/FileInput";
import { addEvent } from "../../../redux/slices/eventSlice";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

export const CreateEventForm = () => {
  const titleState = useState("");
  const descriptionState = useState("");
  const locationState = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [priority, setPriority] = useState(null);
  const [file, setFile] = useState(null);
  const [titleValid, setTitleValid] = useState(true);
  const [desctiptionValid, setDesctiptionValid] = useState(true);
  const [locationValid, setLocationValid] = useState(true);

  const dispatch = useDispatch();
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
  const checkSubmitEnable = () => {
    return (
      titleState[0] &&
      titleValid &&
      descriptionState[0] &&
      desctiptionValid &&
      locationState[0] &&
      locationValid &&
      eventDate &&
      category &&
      priority &&
      file
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!checkSubmitEnable()) {
      return;
    }
    const data = {
      id: v4(),
      title: titleState[0],
      description: descriptionState[0],
      location: locationState[0],
      eventDate: eventDate.getTime(),
      category,
      priority,
      file,
    };
    dispatch(addEvent(data));
  };
  return (
    <StyledForm onSubmit={onSubmit}>
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
      <FileInput title="Foto" setFile={setFile} />
      <CategoryPicker
        title="Priority"
        setCategotyProp={setPriority}
        items={["High", "Medium", "Low"]}
        marginBottom="0px"
      />
      <button
        type="submit"
        className={`${checkSubmitEnable() ? "enable" : "disable"} submitButton`}
      >
        Add event
      </button>
    </StyledForm>
  );
};
