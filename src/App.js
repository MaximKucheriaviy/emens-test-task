import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/main";
import { CreateEventPage } from "./pages/createEvent/createEventPage";

function App() {
  return (
    <div className="App">
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createEvent" element={<CreateEventPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
