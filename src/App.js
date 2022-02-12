import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsData from "./components/NewsData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
