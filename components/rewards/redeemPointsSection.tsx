"use client"
import React from 'react';

const RedeemPointsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Redeem Points with Image */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg p-4 sm:p-8 shadow-md">
        {/* Left Image Area */}
        <div className="flex-1 w-full md:w-auto flex justify-center items-center mb-8 md:mb-0 md:pr-8">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Rewards illustration"
            className="rounded-lg shadow-lg w-full h-auto max-w-md md:max-w-full object-cover"
          />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
            Redeem points for rewards
          </h2>
          <p className="text-black text-base sm:text-lg leading-relaxed mb-6">
            Redeem points on your next purchase, or save them up for higher value rewards.
          </p>
          <button className="px-6 py-3 border border-black text-black text-base font-medium rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
            Ways to redeem
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemPointsSection;