
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import {
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import logo from "@/app/assets/logo.webp";
import { navLinks } from "../constants";

const informationLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Inquiry", href: "/inquiry" },
  { name: "FAQs", href: "/faqs" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f6f9] text-gray-700">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-12">

        {/* Column 1: Logo & Social Links */}
        <div>
          <Link href="/" className="mb-5 inline-flex">
            <Image
              src={logo}
              alt="Shofy Logo"
              width={115}
              height={45}
              className="h-auto w-[115px] object-contain"
            />
          </Link>

          <p className="max-w-[280px] text-[15px] leading-6">
            We are a team of designers and developers that create
            high quality WordPress websites.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center
                  rounded-md border border-[#155563] bg-white
                  text-gray-900 transition-all duration-300
                  hover:bg-[#155563] hover:text-white"
                >
                  <Icon size={19} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2: My Account */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-black">
            My Account
          </h3>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name} className="list-inside list-disc">
                <Link
                  href={link.href}
                  className="text-[15px] transition-colors duration-200 hover:text-[#155563]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Information */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-black">
            Information
          </h3>

          <ul className="space-y-3">
            {informationLinks.map((link) => (
              <li key={link.name} className="list-inside list-disc">
                <Link
                  href={link.href}
                  className="text-[15px] transition-colors duration-200 hover:text-[#155563]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-black">
            Talk to Us
          </h3>

          <p className="text-sm text-gray-800">
            Got Questions? Call us
          </p>

          <a
            href="tel:+67041390762"
            className="mt-1 inline-block text-xl font-bold text-black transition-colors hover:text-[#155563]"
          >
            +670 413 90 762
          </a>

          <div className="mt-5 space-y-3">
            <a
              href="mailto:shofy@support.com"
              className="flex items-center gap-3 text-sm transition-colors hover:text-[#155563]"
            >
              <FiMail size={18} className="shrink-0" />
              <span>shofy@support.com</span>
            </a>

            <div className="flex items-center gap-3 text-sm">
              <FiMapPin size={18} className="shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

