import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#home">
          <img src="/couponpelogo.png" width={190} height={40} alt="Couponpe" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.founder_code.coupon_pe"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-md text-xs font-medium hover:bg-gray-100 transition-colors"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 512 512" 
            fill="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00D3FF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0099CC', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFD900', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FFAA00', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#FF4444', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#CC0000', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad4" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#00E676', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00C853', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M57.5 45.1L278.6 256 57.5 466.9c-6.2-10.6-9.5-22.7-9.5-35.2V80.3c0-12.5 3.3-24.6 9.5-35.2z" fill="url(#grad1)" />
            <path d="M327.8 206.8L106.7 45.1c17.5-11.8 39.5-14.6 59.6-7.5l262 139c11.8 6.3 21.5 15.9 27.8 27.6l-128.3 2.6z" fill="url(#grad2)" />
            <path d="M57.5 466.9l221.1-210.9 49.2 49.2-262 139c-20.1 7.1-42.1 4.3-59.6-7.5 17.5 11.8 39.5 14.6 59.6 7.5l262-139c11.8-6.3 21.5-15.9 27.8-27.6L327.8 305.2 106.7 466.9c-17.5 11.8-39.5 14.6-59.6 7.5 6.2 10.6 9.5 22.7 9.5 35.2v-42.7z" fill="url(#grad3)" />
            <path d="M456.1 227.4L327.8 206.8l49.2 49.2 79.1-28.6z" fill="url(#grad4)" />
          </svg>
          Download Couponpe
        </a>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
