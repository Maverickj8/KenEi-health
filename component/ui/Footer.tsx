import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Row: Logo and Survey */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-green-800 pb-6">
          {/* Logo */}
          <div className="text-3xl font-bold">🌟</div>

          {/* Survey */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-white">We want to hear from you</p>
            <button className="bg-white text-green-900 text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Take survey
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-white">
          {/* Newsletter */}
          <div>
            <p className="font-semibold mb-2">Subscribe to our newsletter</p>
            <div className="flex border border-white/30 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-3 py-2 text-white placeholder-white/60 focus:outline-none w-full"
              />
              <button className="bg-white text-green-900 px-3 flex items-center justify-center">
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <p className="font-semibold mb-2">About</p>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Benefits</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <p className="font-semibold mb-2">Other</p>
            <ul className="space-y-1 text-white/80">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-white/70 mt-6 text-lg">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><X className="w-5 h-5" /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
