import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import angono from "../assets/Angono.jpg";
import happyPlace from "../assets/HappyPlace.jpg";
import milkyWay from "../assets/MilkyWay.jpg";
import manam from "../assets/Manam.jpg";
import { useDateLocation } from "../context/DateLocationContext";

const spots = [
  { name: "Over the top (Angono)", img: angono },
  { name: "Happy Place (Las Piñas)", img: happyPlace },
  { name: "Milky Way (Las Piñas)", img: milkyWay },
  { name: "Manam (Alabang)", img: manam },
];

const DateSpots = () => {
  const { setSelectedLocation } = useDateLocation();
  const [selected, setSelected] = useState(null);

  const handleSelect = (spot) => {
    setSelected(spot);
    setSelectedLocation(spot);
  };

  return (
    <div className="w-full p-6 flex flex-col gap-6 items-center justify-center min-h-screen bg-gradient-to-b from-pink-500 to-purple-600 text-center text-white">
      <h1 className="text-3xl font-bold drop-shadow-md">
        Choose Our Date Spot
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {spots.map((spot, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:scale-105 flex flex-col items-center justify-center ${
              selected?.name === spot.name ? "border-4 border-white" : ""
            }`}
            onClick={() => handleSelect(spot)}
          >
            <img
              src={spot.img}
              className="w-40 h-40 object-cover rounded-lg"
              alt={spot.name}
            />
            <p className="mt-2 font-semibold text-center">{spot.name}</p>
          </div>
        ))}
      </div>

      <p className="text-lg font-medium">
        {selected ? `Selected: ${selected.name}` : "Please select a location"}
      </p>

      <Link
        to={selected ? "/results" : "#"}
        className={`mt-4 px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
          selected
            ? "bg-[#FF69B4] text-white hover:bg-[#E75480] hover:scale-105 cursor-pointer"
            : "bg-gray-400 text-gray-300 cursor-not-allowed"
        }`}
        onClick={(e) => !selected && e.preventDefault()} 
      >
        Continue
      </Link>
    </div>
  );
};

export default DateSpots;
