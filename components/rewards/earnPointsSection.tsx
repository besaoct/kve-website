"use client"
import React from 'react';

const EarnPointsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 lg:p-8">
      {/* Earn Points with Image */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg p-4 sm:p-8 shadow-md">
        {/* Left Content Area */}
        <div className="flex-1 text-center md:text-left md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
            Earn points for every order placed
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed mb-6">
            The more you spend, the more you save.
          </p>
          <button className="px-6 py-3 border border-black text-black text-base font-medium rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
            Ways to earn
          </button>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 w-full md:w-auto flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1711418235199-171c8ecb9d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            alt="Welding illustration"
            className="rounded-lg shadow-lg w-full h-auto max-w-md md:max-w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EarnPointsSection;