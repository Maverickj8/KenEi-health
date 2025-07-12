"use client";

import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
  image: string;
}

const features: FeatureItem[] = [
  {
    title: "One app, two roles",
    description:
      "Sign up as a patient or healthcare professional — all in one place.",
    image: "/images/mock.png",
  },
  {
    title: "Only Verified Professionals",
    description:
      "Connect with trusted, licensed doctors, nurses, hospitals and medical services.",
    image: "/images/up.png",
  },
  {
    title: "Book Appointments Easily",
    description:
      "Choose a professional, pick a date & time — all from your phone.",
    image: "/images/oth.png",
  },
  {
    title: "Instant Chat & Calls",
    description: "Talk to a real doctor in minutes, anytime.",
    image: "/images/frame.png",
  },
  {
    title: "Smart AI Assistant",
    description: "Get quick help, answers, and recommendations instantly.",
    image: "/images/icon.png",
  },
  {
    title: "Earn by Sharing Your Expertise",
    description:
      "Offer care as a medical professional, build your profile and get paid for your time",
    image: "/images/boy.png",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded mb-4">
          Features
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          What Can You do with Ken Ei Health ?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Eclipse background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-gray-200 to-transparent rounded-full opacity-60 z-0" />

            {/* Image */}
            <div className="relative w-full h-56 mb-4 z-10  shadow-xl">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="contain"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2 z-10 relative">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 z-10 relative">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
