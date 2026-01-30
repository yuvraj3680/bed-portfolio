import React from "react";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 bg-gray-50">
      
      {/* Photo Section */}
      <div className="flex justify-center">
        <img
          src={profile}
          alt="Rajeshwari Abasaheb Satav"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          राजेश्वरी आबासाहेब सातव
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          F.Y. B.Ed Student <br />
          Subject: Portfolio Development
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          मी एक भावी शिक्षिका असून समाजासाठी गुणवत्तापूर्ण शिक्षण देणे हे माझे
          ध्येय आहे.
        </p>
      </div>
    </div>
  );
};

export default Home;
