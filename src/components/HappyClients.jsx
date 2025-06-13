import React from 'react';

const HappyClients = () => {
  return (
    <section id="happy-clients" className="py-16 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-polysans italic font-medium text-[42px] leading-[56px] tracking-[0.38px] text-center align-middle font-playfair-display text-[#0655A0] mb-2">Happy Clients Satisfaction ratings </h2>
        <h3 className="font-polysans italic font-medium text-[42px] leading-[56px] tracking-[0.38px] text-center align-middle font-playfair-display text-[#0655A0] mb-2">
          
          <span className="mt-5 block h-1 w-28 bg-secondary rounded mx-auto mb-2" />
        </h3>

        <div className="mt-5 flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80 h-64 flex flex-col justify-center items-center">
            <p className="font-urbanist font-normal text-[56px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656]">0000+</p>
            <p className="font-urbanist font-normal text-[32px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656] mt-2">Counselling</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80 h-64 flex flex-col justify-center items-center">
          <p className="font-urbanist font-normal text-[56px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656]">0000+</p>
          <p className="font-urbanist font-normal text-[32px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656] mt-2">Trainings</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg  w-81 h-64 flex flex-col justify-center items-center">
          <p className="font-urbanist font-normal text-[56px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656]">0000+</p>
          <p className="font-urbanist font-normal text-[32px] leading-[56px] tracking-[0.38px] text-[#565656] mt-2">Satisfied Clients</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80 h-64 flex flex-col justify-center items-center">
          <p className="font-urbanist font-normal text-[56px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656]">0000+</p>
          <p className="font-urbanist font-normal text-[32px] leading-[56px] tracking-[0.38px] text-center align-middle text-[#565656] mt-2">Camps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients; 