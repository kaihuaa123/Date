import { useState } from "react";
import { useDateLocation } from "../context/DateLocationContext"; 
import { Link } from "react-router-dom";
import H1 from "./shared/H1";
import cat1 from "../assets/HappyCat1.gif";
import cat2 from "../assets/HappyCat2.gif";
import cat3 from "../assets/HappyCat3.gif";
import dog1 from "../assets/HappyDog1.gif";
import dog2 from "../assets/HappyDog2.gif";
import dog3 from "../assets/HappyDog3.gif";

const cats = [cat1, cat2, cat3];
const dogs = [dog1, dog2, dog3];

const pets = cats.flatMap((cat, index) =>
  dogs[index] ? [cat, dogs[index]] : [cat]
);

const ThankYou = () => {
  const { selectedDate, setSelectedDate } = useDateLocation(); 
  const [tempDate, setTempDate] = useState(selectedDate || ""); 

  const handleDateChange = (e) => {
    setTempDate(e.target.value);
  };

  const saveDate = () => {
    setSelectedDate(tempDate);
  };

  return (
    <div className="w-full p-6 flex flex-col gap-6 items-center justify-center min-h-screen bg-gradient-to-b from-pink-500 to-purple-600 text-center text-white">
      <H1 className="text-4xl font-bold drop-shadow-md animate-bounce">
        YAAAYY! THANK YOUU!!
      </H1>

      <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-md text-black">
        <label htmlFor="date" className="text-lg font-medium text-gray-700">
          Select a Date:
        </label>
        <input
          type="date"
          id="date"
          value={tempDate}
          onChange={handleDateChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
        <button
          onClick={saveDate}
          className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-pink-600 hover:scale-105"
        >
          Save Date
        </button>
        {selectedDate && (
          <p className="text-gray-700 font-medium">
            Selected Date: <span className="font-bold">{selectedDate}</span>
          </p>
        )}
      </div>

      <Link
        to={selectedDate ? "/datespots" : "#"}
        className={`mt-4 px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
          selectedDate
            ? "bg-[#FF69B4] text-white hover:bg-[#E75480] hover:scale-105 cursor-pointer"
            : "bg-gray-400 text-gray-300 cursor-not-allowed"
        }`}
      >
        Continue
      </Link>

      <p className="text-lg font-medium">
        Look how happy they are that you agreed!
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        {pets.map((pet, index) => (
          <img
            key={index}
            src={pet}
            className="w-40 h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ThankYou;
