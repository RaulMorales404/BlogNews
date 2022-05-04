import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Details from "./views/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="home" element={<Home />} />
        <Route path="details/:data" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
