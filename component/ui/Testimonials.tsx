"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  name: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "John B. Lawal",
    image: "/images/mann.jpg",
    content:
      "Ken Ei Health app makes it so easy to find and talk to a doctor. The app is fast, user-friendly and the doctors are professional. I’ve already recommended it to my friends",
    rating: 5,
  },
  {
    name: "John B. Lawal",
    image: "/images/mann.jpg",
    content:
      "Ken Ei Health app makes it so easy to find and talk to a doctor. The app is fast, user-friendly and the doctors are professional. I’ve already recommended it to my friends",
    rating: 5,
  },
  {
    name: "John B. Lawal",
    image: "/images/mann.jpg",
    content:
      "Ken Ei Health app makes it so easy to find and talk to a doctor. The app is fast, user-friendly and the doctors are professional. I’ve already recommended it to my friends",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-white h-full py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded mb-4">
          Testimonials
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          What Our Users Say About Us
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-4">
              <FaQuoteLeft className="text-green-800 text-2xl" />
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <p
              className="text-sm text-gray-700 mb-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              {testimonial.content}
            </p>

            <div className="flex items-center gap-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-gray-900">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-10 gap-4">
        <button className="w-10 h-10 rounded-full border flex items-center justify-center text-black hover:bg-gray-100 transition">
          ←
        </button>
        <button className="w-10 h-10 rounded-full border flex items-center justify-center text-black hover:bg-gray-100 transition">
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
