import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Card from "./pages/card";
import Mainpage from "./pages/mainpage";

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
