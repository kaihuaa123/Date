import { useState } from "react";
import cat from "../assets/Cat.gif";
import askOut from "../assets/Ask Out.gif";
import { Link } from "react-router-dom";
import H1 from "./shared/H1";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNoClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col p-4 gap-5 items-center justify-center min-h-screen w-full bg-gradient-to-b from-pink-500 to-purple-600 text-white text-center">
      <H1>Can we go out on a date?</H1>
      <img src={cat} className="w-full max-w-md" />

      <div className="flex justify-around mt-6 w-full max-w-md">
        <Link
          to={"/thankyou"}
          className="bg-[#FF69B4] text-white px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#E75480] cursor-pointer"
        >
          Yes
        </Link>
        <button
          onClick={handleNoClick}
          className="bg-[#F8BBD0] text-[#555555] px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#FFC0CB] cursor-pointer"
        >
          No
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-md flex flex-col items-center">
            <img src={askOut} className="w-full rounded-md" />
            <button
              onClick={closeModal}
              className="mt-4 bg-[#FF69B4] text-white px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#E75480] cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
