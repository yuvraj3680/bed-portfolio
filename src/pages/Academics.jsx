import React from "react";

import tenth from "../assets/10.jpg";
import twelfth from "../assets/12th.jpg";
import ba from "../assets/ba.jpg";

const records = [
  { title: "10th Marksheet", image: tenth },
  { title: "12th Marksheet", image: twelfth },
  { title: "BA Marksheet", image: ba },
  
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Academic Records
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {records.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-t-xl"
            />

            <div className="p-4 text-center">
              <h2 className="font-semibold text-gray-700">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
