import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="main-container py-10 flex flex-col justify-between px-4">
        <div className="flex flex-col gap-4 ">
          <img
            src="https://1mdm.com/about/assets/logo-white.png"
            alt=""
            className="w-[150px]"
          />
          <p className="text-gray-300 w-[70%]">
            One Medical Devices Market Place
          </p>
        </div>
        <div className="links flex flex-wrap justify-between gap-10 md:w-[60%]">
          <div className="flex gap-1.5 flex-col">
            <h1>Platform</h1>
            <ul>
              <li>Sell on 1MDM</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Brands</li>
            </ul>
          </div>
          <div>
            <div>
              <h1>Press Room</h1>
              <ul>
                <li>Images & B-Roll</li>
              </ul>
            </div>
            <div>
              <h1>Policies</h1>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Delivery Information</li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Reach Us</h1>
            <ul>
              <li>Corporate Information</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center bg-white text-black py-6">
        © 2025 1MDM ⚡ by SuperLabs
      </div>
    </footer>
  );
};

export default Footer;
