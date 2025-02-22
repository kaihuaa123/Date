import { createContext, useContext, useState } from "react";

const DateLocationContext = createContext();

export const DateLocationProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    name: "",
    img: "",
  });

  return (
    <DateLocationContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </DateLocationContext.Provider>
  );
};

// Custom hook for easy access
export const useDateLocation = () => {
  return useContext(DateLocationContext);
};
