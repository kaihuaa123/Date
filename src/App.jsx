import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ThankYou from "./components/ThankYou";
import DateSpots from "./components/DateSpots";
import Result from "./components/Result";

const App = () => {
  return (
    <div className="mx-auto min-h-dvh flex justify-center items-center bg-[#FFC0CB]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/datespots" element={<DateSpots />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
