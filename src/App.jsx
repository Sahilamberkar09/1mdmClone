import { useState } from "react";
import "./App.css";
import CF from "./components/CF.jsx";
import Navbar from "./components/Navbar.jsx";
import SellButton from "./components/SellButton.jsx";
import TestimonialsSection from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("Custom storefront");

  return (
    <>
      <Navbar />
      <SellButton />
      <section className="hero-section">
        <div className="main-container mx-auto flex flex-col items-center md:flex-row md:justify-between gap-7 md:py-32 py-20">
          <div className="left-content flex flex-col items-center md:items-start md:w-[50%] px-4 gap-1 ">
            <h3 className="text-xl font-medium">Sell on 1mdm.com</h3>
            <h2 className="font-semibold text-[40px] text-center md:text-start leading-12 md:leading-15">
              Reach millions of B2B buyers globally
            </h2>
            <div className="flex gap-2 mt-10">
              <button className="bg-red-500 px-4 py-2 text-white rounded-full cursor-pointer">
                Start Selling
              </button>
              <button className="border-1 border-red-500 px-4 py-2 text-red-500 rounded-full cursor-pointer  hover:bg-red-500 hover:text-white ease-in duration-200">
                Chat with consultant
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-full">
              <p className="text-2xl font-medium">26,000,000</p>
              <p>active buyers globally</p>
            </div>
            <div className="w-full">
              <p className="text-2xl font-medium">400,000</p>
              <p>product inquiries daily</p>
            </div>
            <div className="w-full">
              <p className="text-2xl font-medium">200</p>
              <p>countries and regions represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section>
        <div className="main-container py-10">
          <div className="title flex items-center justify-center">
            <h2 className="text-3xl font-semibold text-center py-10 md:px-30 tracking-wide">
              1mdm.com is a leading ecommerce platform that helps SMEs go global
            </h2>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:items-center items-center justify-evenly gap-4 py-10 px-5">
              <iframe
                width="500"
                height="281"
                src="https://www.youtube.com/embed/TN7iJyc5Uks"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] "
              ></iframe>
              <div className="flex flex-col gap-8 md:w-[45%] text-lg">
                <p>
                  Connect with millions of business buyers from around the
                  world.
                </p>
                <p>
                  Get the tools and know-how to build a successful ecommerce
                  presence for your business.
                </p>
                <p>
                  Pocket more from each sale, with take rates as low as 0% in
                  some cases
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline section */}
      <section className="bg-red-500">
        <div className="main-container flex flex-col items-center justify-center text-white py-20 gap-6">
          <h1 className="text-[40px] font-semibold text-center w-[80%] leading-13">
            Largest number of products & categories of medical devices on a
            single place - 1mdm.com
          </h1>
          <p className="text-xl font-medium text-center w-[40%]">
            Connect with buyers worldwide for your product & start selling now.
          </p>
        </div>
      </section>

      {/* Showcase section */}
      <section>
        <div className="main-container py-10">
          <h1 className="text-red-800 font-bold text-3xl text-center py-10">
            Grow your business with a suite of tools built for you
          </h1>

          <div className="flex w-full md:items-center justify-between gap-4 py-10 px-5 md:flex-row flex-col">
            {/* Left content */}
            <div className="flex flex-col border-l-2 border-gray-300 w-[10%] font-semibold">
              {[
                "Custom storefront",
                "Advertising tools",
                "Data and analytics",
                "Customers support",
              ].map((tab) => (
                <a
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-5 px-3 cursor-pointer transition-all duration-300 ease-in-out ${
                    activeTab === tab ? "text-red-600 font-bold active " : ""
                  }`}
                >
                  {tab}
                </a>
              ))}
            </div>
            {/* Right content */}
            <div>
              <CF activeTab={activeTab} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-300">
        <div className="main-container py-10">
          <h1 className="text-red-800 font-bold text-3xl text-center pb-10">
            Success stories from 1mdm.com sellers
          </h1>
          <TestimonialsSection />
        </div>
      </section>

      {/* CTA */}
      <section className="banner">
        <div className="main-container py-10 ">
          <h1 className="text-white font-bold text-3xl text-center py-10">
            Ready to Grow Your Business?
          </h1>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-white px-6 py-3 text-red-500 rounded-full cursor-pointer hover:bg-red-600 transition duration-300">
              Start Selling
            </button>
            <button className="border-white border-2 px-6 py-3 text-white rounded-full cursor-pointer hover:bg-white hover:text-red-500 transition duration-300">
              Chat with Consultant
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
