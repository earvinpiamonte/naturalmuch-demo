import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <nav className="flex items-center">
              <div className="flex-1">
                <ul className="flex text-center text-sm">
                  <li className="mr-12">
                    <a href="/">Home</a>
                  </li>
                  <li className="mr-12">
                    <a href="#blog">Blog</a>
                  </li>
                  <li className="mr-12">
                    <a href="#our-story">Our Story</a>
                  </li>
                </ul>
              </div>
              <div className="flex-1 text-center content-center py-4">
                <a href="/" className="inline-block">
                  <img src="/images/NaturalmuchLogo.svg" alt="Site logo," />
                </a>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <div className="px-8">
                  <a href="#cart">
                    <img
                      src="/images/shopping_cart-24px.svg"
                      alt="Shopping cart icon,"
                    />
                  </a>
                </div>
                <div className="text-sm">
                  <a
                    href="#login-signup"
                    className="bg-orange-600 px-6 py-2 rounded-full text-white block"
                  >
                    Log in / Sign up
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
