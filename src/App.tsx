import LandingPage from "./pages/LandingPage";
import ImagePage from "./pages/ImagePage";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/img/:category" element={<ImagePage></ImagePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
