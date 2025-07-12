"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is KenEi Health available 24/7?",
    answer:
      "Yes, KenEi Health provides 24/7 access to healthcare professionals.",
  },
  {
    question: "How do I know if doctors are qualified?",
    answer:
      "All doctors are certified and verified before joining the platform.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing varies depending on the service, but it remains affordable.",
  },
  {
    question: "Are my informations secure on KenEi Health?",
    answer: "Yes, we use secure encryption to protect all patient information.",
  },
  {
    question: "Can I choose a specialist for my consultation?",
    answer: "Yes, you can choose from a range of qualified specialists.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section 
      className="min-h-screen bg-gray-50 py-16 px-4 md:px-20"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - FAQs */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h4 className="font-medium text-gray-800">{faq.question}</h4>
                {activeIndex === index ? (
                  <Minus className="text-green-700 w-5 h-5" />
                ) : (
                  <Plus className="text-green-700 w-5 h-5" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Frequently Asked <br className="hidden md:inline" />
            Questions
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
