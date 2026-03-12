import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";
import ClassesFullPage from "./pages/ClassesFullPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
          <Route path="/turmas-lotadas" element={<ClassesFullPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
