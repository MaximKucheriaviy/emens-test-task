import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/main";
import { EventPage } from "./pages/eventPage/EventPage";
import { CreateEventPage } from "./pages/createEvent/createEventPage";

function App() {
  return (
    <div className="App">
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createEvent" element={<CreateEventPage />} />
          <Route path="/:id" element={<EventPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
