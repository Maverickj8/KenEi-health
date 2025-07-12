import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <section className=" bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left - Text + Buttons */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
            Download the KenEi <br /> Health App Now
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Experience fast, affordable, and reliable healthcare at your
            convenience.
          </p>

          {/* <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-4 ">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black flex justify-center items-center lg:justify-start gap-4 p-2 rounded-2xl">
              <Image
                src="/images/Apple.png"
                alt="App Store"
                width={20}
                height={20}
                className="h-10 w-auto object-contain bg-black"
              />
              <div className="">
                <p className="text-[10px]">Downoad on the</p>
                <p className="font-bold text-[18px]"> App Store</p>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black flex justify-center items-center lg:justify-start gap-4 p-2 rounded-2xl"
            >
              <Image
                src="/images/Playstore.png"
                alt="Google Play"
                width={160}
                height={50}
                className="h-10 w-auto object-contain "
              />
              <div>
                <p className="text-[10px]">Downoad on the</p>
                <p>Playstore Store</p>
              </div>
            </a>
          </div> */}

          <div className="flex gap-4">
            <button className="bg-black px-6 py-2 rounded-md text-white text-sm hover:bg-green-600">
              <div className="flex justify-center items-center gap-2">
                <FaGooglePlay className=""/>
                <div>
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-[18px] font-bold">Google Play</p>
                </div>
              </div>
            </button>
            <button className="bg-black px-6 py-2 rounded-md text-white text-sm hover:bg-green-600">
              <div className="flex justify-center items-center gap-2">
                <FaApple className="text-[20px]"/>
                <div>
                  <p className="text-[10px]">Download on the</p>
                  <p className="text-[18px] font-bold">Google Play</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right - Phone in Hand Image */}
        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <Image
            src="/images/app.png"
            alt="KenEi Health App"
            width={700}
            height={950}
            className="max-w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
