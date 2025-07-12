// components/Sponsors.tsx
import Image from "next/image";

const sponsors = [
  "/images/google.png",
  "/images/google.png",
  "/images/google.png",
  "/images/google.png",
  "/images/google.png",
  "/images/google.png",
];

const Sponsors = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-sm text-gray-400 tracking-widest mb-8 uppercase">
        Our Sponsors
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 px-4">
        {sponsors.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Sponsor ${index + 1}`}
            width={100}
            height={40}
            className="grayscale opacity-70 hover:opacity-100 transition duration-300"
            data-aos="zoom-out-up"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
