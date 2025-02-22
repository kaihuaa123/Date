import { useEffect, useState } from "react";
import { useDateLocation } from "../context/DateLocationContext";

const Result = () => {
  const { selectedLocation, selectedDate } = useDateLocation();
  const [showContent, setShowContent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 3000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-purple-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold drop-shadow-lg fade-in">
        Thank You 🥺🥺🥺!!!
      </h1>

      {showContent && selectedLocation && (
        <div className="mt-8 fade-in flex flex-col items-center gap-4 bg-white/10 p-6 rounded-2xl shadow-lg">
          <img
            src={selectedLocation.img}
            alt={selectedLocation.name}
            className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-white"
          />

          <div>
            <p className="text-2xl font-semibold">Our date is set at:</p>
            <h2 className="text-4xl font-bold mt-2 text-yellow-300">
              {selectedLocation.name}
            </h2>
            {selectedDate && (
              <p className="text-lg mt-2 font-medium text-gray-200">
                📅 Date: {selectedDate}
              </p>
            )}
          </div>
        </div>
      )}

      {showMessage && (
        <p className="text-2xl font-semibold mt-6 animate-bounce text-pink-300 drop-shadow-md">
          💖 Looking forward to it! 💖
        </p>
      )}
    </div>
  );
};

export default Result;
