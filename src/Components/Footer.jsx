import React from "react";
import logo from "../assets/voyaz.png";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-gray-300 pt-12 pb-6 mt-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          <div>
            <img
              src={logo}
              alt="Voyaz"
              className="w-36 mb-4 filter brightness-0 invert"
            />
            <div className="border-t border-gray-700 my-4" />

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M3 5a2 2 0 012-2h2.6a1 1 0 01.98.8l.3 1.5a1 1 0 01-.22.88L7.5 8.5a12.04 12.04 0 005 5l1.3-1.1a1 1 0 01.9-.3l1.5.3a1 1 0 01.8.98V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    stroke="#9ca3af"
                  />
                </svg>
                <a href="tel:+947733375642" className="hover:underline">
                  +94 77 337 5642
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M3 5a2 2 0 012-2h2.6a1 1 0 01.98.8l.3 1.5a1 1 0 01-.22.88L7.5 8.5a12.04 12.04 0 005 5l1.3-1.1a1 1 0 01.9-.3l1.5.3a1 1 0 01.8.98V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    stroke="#9ca3af"
                  />
                </svg>
                <a href="tel:+94707070653" className="hover:underline">
                  +94 70 707 0653
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M21 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                    stroke="#9ca3af"
                  />
                </svg>
                <a href="tel:0112808473" className="hover:underline">
                  0112808473
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M3 8l7.5 5L21 8" stroke="#9ca3af" />
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="#9ca3af"
                  />
                </svg>
                <a
                  href="mailto:info@voyaztravel.com"
                  className="hover:underline"
                >
                  info@voyaztravel.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mt-1 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
                    stroke="#9ca3af"
                  />
                  <circle cx="12" cy="10" r="2" stroke="#9ca3af" />
                </svg>
                <div>
                  <div className="text-sm">65/5 Rajamaha Vihara Road,</div>
                  <div className="text-sm">Mirihana, Pitakotte</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl text-white font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a className="hover:text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Travel Packages
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Destination
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Blogs
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Attractions and Experiences
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:pl-6">
            <h3 className="text-xl text-white font-semibold mb-6">
              Newsletter
            </h3>

            <div className="flex items-start gap-3 text-gray-300">
              <div className="mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M20 6L9 17l-5-5" stroke="#9ca3af" />
                </svg>
              </div>
              <div className="text-sm text-gray-400">
                I agree to all terms and policies
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
            All Rights Reserved by © Voyaz Travel | Powered by CoreChip Digital
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
