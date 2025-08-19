import React from 'react';
import { Store, HandCoins, Gift } from 'lucide-react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 lg:p-8 py-8">
      {/* Title Section */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8 sm:mb-12">How it works</h2>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl w-full">
        {/* Step 1: Join */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="p-4 bg-red-100 rounded-full mb-4">
            <Store className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">Join</h3>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            Sign up or login to start earning straight away.
          </p>
        </div>

        {/* Step 2: Earn */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="p-4 bg-red-100 rounded-full mb-4">
            <HandCoins className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">Earn</h3>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            Earn points for every dollar spent.*
          </p>
        </div>

        {/* Step 3: Redeem */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="p-4 bg-red-100 rounded-full mb-4">
            <Gift className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">Redeem</h3>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            Redeem points for discounts on your next purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
