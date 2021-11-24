import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-transparent shadow-lg border-4 border-light-blue-500 border-opacity-50 rounded-lg p-8 pb-12 mb-8">
      <h1 className="text-white text-2xl mb-8 font-semibold border-b pb-4">
        Subscribe to our weekly News Letter
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          className="p-2 px-4 outine-none w-full rounded-lg ring-1 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name:"
        />

        <input
          type="email"
          className="p-2 px-4 outine-none w-full rounded-lg ring-1 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email:"
        />
      </div>

      <div className="grid justify-items-center mt-8">
        <button
          type="button"
          className="transition duration-500 ease hover:bg-green-700 inline-block bg-blue-600 text-lg rounded-full text-white px-16 py-3 cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
