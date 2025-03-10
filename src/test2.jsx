import React from "react";

const StaticPage2 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My Static Page</h1>
        <p className="text-gray-600 mb-6">
          This is a simple static React JSX page. It doesn't have any dynamic content,
          just a well-structured layout.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default StaticPage2;
