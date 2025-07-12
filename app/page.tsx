"use client"
import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Sponsors from '@/component/ui/Sponsor';
import AboutUs from '@/component/ui/AboutUs';
import Features from '@/component/ui/Features';
import Testimonials from '@/component/ui/Testimonials';
import DownloadApp from '@/component/ui/Download';
import FAQ from '@/component/ui/FAQ';
import BlogSection from '@/component/ui/Blog';
import Footer from '@/component/ui/Footer';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
   useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);
  return (
    <>
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-xl">
        <div className="flex items-center space-x-2">
          <Image src="/images/Simplification1.png" alt="Kenei Health" width={40} height={40} />
          <span className="font-bold text-xl text-gray-800">KENEI HEALTH</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-md font-medium text-gray-700">
          <Link href="/" className="text-green-900">Home</Link>
          <Link href="about">About</Link>
          <Link href="features">Features</Link>
          <Link href="testimonials">Testimonials</Link>
          <Link href="faq">FAQs</Link>
          <Link href="blog">Blog</Link>
        </nav>
        <Link
          href="download"
          className="bg-green-900 text-white px-4 py-2 rounded-lg shadow text-sm font-medium"
        >
          Download app
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-20 gap-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Your Health, Right in Your Pocket
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Bring You Closer to the <span className="text-green-900">Care You Deserve</span>
          </h1>
          <p className="text-[#1E1E1E80] text-base leading-relaxed mb-8">
            Ken Ei Health connects you to certified doctors and nurses on your terms. Get help fast, from the comfort of your home or on the go
          </p>
          <Link
            href="https://kenei-solutions.com/"
            className="bg-green-900 text-white px-6 py-3 rounded-xl text-lg inline-block"
          >
            Get started
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-md shadow-lg">
          <Image src="/images/docc.png" alt="Doctor" width={500} height={600} className="rounded-xl shadow-lg bg-gradient-to-b from-white to-gray-500 "  />

          {/* Floating Labels */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium flex items-center gap-2 text-[#1E1E1EE5]">
            <Image src="/images/Nigeria (NG).png" alt="doc1" width={24} height={24}/> Nationwide booking
          </div>
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-[#1E1E1EE5]">
            AI-Powered Support
          </div>
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <Image src="/images/doccror.jpg" alt="doc1" width={24} height={24} className="rounded-full border" />
                <Image src="/images/fem.jpg" alt="doc2" width={24} height={24} className="rounded-full border" />
                <Image src="/images/imm.jpg" alt="doc3" width={24} height={24} className="rounded-full border" />
              </div>
              <span className="font-semibold text-[#1E1E1EE5]">100+</span>
            </div>
            <div className="text-xs text-[#1E1E1EE5] mt-1">Certified doctors</div>
          </div>
        </div>
      </section>
    </main>
    <Sponsors />
    <AboutUs />
    <Features />
    <Testimonials />
    <DownloadApp />
    <FAQ />
    <BlogSection />
    <Footer />
    </>
    
  );
}
