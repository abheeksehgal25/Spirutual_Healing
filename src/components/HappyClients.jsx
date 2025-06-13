import React from 'react';

const HappyClients = () => {
  return (
    <section id="happy-clients" className="py-16 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-playfair-display italic text-4xl text-blue-800">Happy Clients</h2>
        <h3 className="text-center font-bold text-5xl text-gray-800 mt-2 mb-12 relative">
          Satisfaction ratings
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></span>
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-64 h-64 flex flex-col justify-center items-center">
            <p className="font-bold text-5xl text-purple-800">0000+</p>
            <p className="text-xl text-gray-700 mt-2">Counselling</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-64 h-64 flex flex-col justify-center items-center">
            <p className="font-bold text-5xl text-purple-800">0000+</p>
            <p className="text-xl text-gray-700 mt-2">Trainings</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-64 h-64 flex flex-col justify-center items-center">
            <p className="font-bold text-5xl text-purple-800">0000+</p>
            <p className="text-xl text-gray-700 mt-2">Satisfied Clients</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-64 h-64 flex flex-col justify-center items-center">
            <p className="font-bold text-5xl text-purple-800">0000+</p>
            <p className="text-xl text-gray-700 mt-2">Camps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients; 