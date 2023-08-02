import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/main";

function App() {
  return (
    <div className="App">
      <SharedLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </SharedLayout>
    </div>
  );
}

export default App;
