import React from "react";

const Header = () => {
  return (
    <header className="w-full" style={{ backgroundColor: "#fbd690" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <nav className="flex items-center">
              <div className="flex-1 text-center py-4 order-2">
                <a href="/" className="inline-block">
                  <img src="/images/NaturalmuchLogo.svg" alt="Site logo," />
                </a>
              </div>
              <div className="flex-1 md:order-1">
                <ul className="flex text-center text-sm">
                  <li className="flex-1 lg:flex-initial lg:mr-12">
                    <a href="/">Home</a>
                  </li>
                  <li className="flex-1 lg:flex-initial lg:mr-12">
                    <a href="#blog">Blog</a>
                  </li>
                  <li className="flex-1 lg:flex-initial lg:mr-12">
                    <a href="#our-story">Our Story</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 items-center justify-end order-3">
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
                    className="app-btn-primary px-6 py-2 rounded-full text-white text-center block"
                  >
                    <span>Log in</span>
                    <span className="hidden lg:inline">/</span>{" "}
                    <span className="hidden lg:inline">Sign up</span>
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
