import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: `Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional`,
    image: "https://1mdm.com/about/assets/slider-1.webp",
  },
  {
    text: `Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.`,
    image: "https://1mdm.com/about/assets/slider-2.webp",
  },
  {
    text: `Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specialised high-quality pigmented imaging process, so he decided to create his own product line.`,
    image: "https://1mdm.com/about/assets/slider-3.webp",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="  flex items-center justify-center px-4 relative">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full "
        >
          <FaArrowLeft />
        </button>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-[95%]">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <FaQuoteLeft className="text-red-600 text-3xl mb-4" />
            <p className="text-gray-700 text-lg mb-4">
              {testimonials[current].text}
            </p>
          </div>
          <div className="md:w-1/2 ">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
