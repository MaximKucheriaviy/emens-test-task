import { StyledForm } from "../createEventForm/CreateEventFormStyled";
import { FormInput } from "../FormInput/FromInput";
import { useState, useEffect } from "react";
import { validate } from "../../../service/validation";
import { DataPiker } from "../datepiker/DataPiker";
import { TimePicker } from "../timePicker/timePicker";
import { CategoryPicker } from "../categorySelector/categorySelector";
import { FileInput } from "../fileInput/FileInput";
import { editEvent } from "../../../redux/slices/eventSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEvent } from "../../../redux/selectors/eventSelector";

export const EditEventForm = () => {
  const { id } = useParams();
  const event = useEvent(id);
  const [titleState, setTileState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [priority, setPriority] = useState(null);
  const [file, setFile] = useState(null);
  const [titleValid, setTitleValid] = useState(true);
  const [desctiptionValid, setDesctiptionValid] = useState(true);
  const [locationValid, setLocationValid] = useState(true);

  useEffect(() => {
    setTileState(event.title);
    setDescriptionState(event.description);
    setLocationState(event.location);
    setCategory(event.category);
    setEventDate(new Date(event.eventDate));
    setPriority(event.priority);
    setFile(event.file);
  }, [event]);

  const navigate = useNavigate();
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
      id,
      title: titleState,
      description: descriptionState,
      location: locationState,
      eventDate: eventDate.getTime(),
      category,
      priority,
      file: `./images/${category}.png`,
    };
    dispatch(editEvent(data));
    navigate(`/${data.id}`, { state: { from: `/edit/${id}` } });
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <div className="formContainer">
        <FormInput
          name="title"
          title="Title"
          errorMessage={!titleValid}
          valueState={[titleState, setTileState]}
          validator={titleValidator}
        />
        <FormInput
          name="description"
          title="Decription"
          errorMessage={!desctiptionValid}
          valueState={[descriptionState, setDescriptionState]}
          validator={desctiptionValidator}
          field={true}
        />
        <DataPiker setDateProp={setEventDate} initValue={eventDate} />
        <TimePicker setDate={setEventDate} initValue={eventDate} />
        <FormInput
          name="location"
          title="Location"
          errorMessage={!locationValid}
          valueState={[locationState, setLocationState]}
          validator={locationValidator}
        />
        <CategoryPicker
          title="Category"
          setCategotyProp={setCategory}
          items={[
            "Art",
            "Music",
            "Business",
            "Conference",
            "Workshop",
            "Party",
            "Sport",
          ]}
          initValue={category}
        />
        <FileInput title="Add picture" setFile={setFile} initValue={file} />
        <CategoryPicker
          title="Priority"
          setCategotyProp={setPriority}
          items={["High", "Medium", "Low"]}
          marginBottom="0px"
          initValue={priority}
        />
      </div>
      <button
        type="submit"
        className={`${checkSubmitEnable() ? "enable" : "disable"} submitButton`}
      >
        Save
      </button>
    </StyledForm>
  );
};
