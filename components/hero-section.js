import React from "react";

const HeroSection = () => {
  return (
    <section
      className="pt-24 lg:py-20 bg-no-repeat bg-bottom bg-cover"
      style={{
        backgroundImage: "url('/images/Hero Image.png')",
        height: "calc(100vh + 175px)",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold leading-none mb-4">
            <span className="block mb-2">
              <span>Live</span> <span className="text-orange-600">Healthy</span>
            </span>
            <span className="text-4xl block mb-2 font-semibold">
              without breaking
            </span>
            <span className="text-4xl block font-semibold">the bank</span>
          </h1>
          <p className="text-lg mb-12">
            <span className="block mb-2">
              We partner with your favorite brands and offer their best selling
            </span>
            <span className="block">
              products here at special discounts and offers
            </span>
          </p>
          <p className="mb-4">
            <a
              href="#see-all-offers"
              className="bg-orange-600 px-16 py-3 rounded-full text-white inline-block"
            >
              See All Offers
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
