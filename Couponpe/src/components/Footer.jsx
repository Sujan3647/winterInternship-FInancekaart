import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <h4 className="h6 text-n-1 mb-4">CouponPe</h4>
            <p className="body-2 text-n-4 mb-4">
              Your trusted platform for authentic coupon trading and discovery. Experience enhanced discounts and premium rewards.
            </p>
            <div className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="h6 text-n-1 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#privacy" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#refund" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="h6 text-n-1 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="body-2 text-n-4">
                <p className="font-semibold text-n-3 mb-1">Address</p>
                <p>D-217 F, 3rd Floor,</p>
                <p>Vibhuti Khand, Gomti Nagar,</p>
                <p>Lucknow, UP-226010</p>
              </div>
              <div className="body-2 text-n-4">
                <p className="font-semibold text-n-3 mb-1">Email</p>
                <a href="mailto:info@couponpe.in" className="hover:text-n-1 transition-colors">
                  info@couponpe.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-n-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="body-2 text-n-4">
            © {new Date().getFullYear()} CouponPe. All rights reserved.
          </p>
          <p className="body-2 text-n-4">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
