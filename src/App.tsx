import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Card from "./pages/Card";
import Mainpage from "./pages/Mainpage";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Mainpage/>} />
          <Route path="card/:id" element={<Card/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
