import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] animate-fade-in">
          <h1 className="h1 mb-6 animate-slide-up">
           Maximize Your Savings &nbsp;With {` `}
            <span className="inline-block relative animate-bounce-slow">
              CouponPe{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 animate-draw-line"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 animate-slide-up animation-delay-200">
            Your trusted platform for authentic coupon trading and discovery. Experience enhanced discounts, premium rewards, and exceptional value on every transaction.
          </p>
          <Button href="https://play.google.com/store/apps/details?id=com.founder_code.coupon_pe" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 animate-fade-in animation-delay-400">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] animate-pulse-slow">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-10 md:mt-20" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
