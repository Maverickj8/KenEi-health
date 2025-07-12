"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className=" min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-white py-12 px-6 md:px-20">
      {/* Left - Doctor Image */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <div className="absolute top-4 left-4 bg-white text-black flex items-center gap-2 px-3 py-1 rounded-full shadow-md z-10">
            <Image
              src="/images/Simplification1.png"
              alt="Kenei Logo"
              width={20}
              height={20}
            />
            <span className="text-sm font-semibold">KENEI HEALTH</span>
          </div>
          <Image
            src="/images/art.png" // Rename the image you uploaded and place it in public folder
            alt="Kenei Doctor"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            data-aos="flip-up"
          />
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2 bg-[#052B24] text-white rounded-xl p-6 md:p-10" data-aos="zoom-in-up">
        <span className="inline-block bg-yellow-700 text-white text-sm font-semibold px-4 py-1 rounded mb-4">
          About us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          WHAT IS KENEI HEALTH
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          Ken Ei Health is a Nigerian health-tech platform built to make
          healthcare simple, fast, and accessible — for everyone.
          <br />
          <br />
          Whether you need quick advice, a full consultation, or help finding a
          licensed doctor or nurse, our app connects you to trusted
          professionals right from your phone.
          <br />
          <br />
          No hospital queues. No unnecessary stress. Just quality care — when
          and where you need it.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
