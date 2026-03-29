"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";
import { FOOTER_COLUMNS } from "@/lib/constants";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

const contactInfo = [
  {
    icon: <Mail size={18} className="text-brand-gold" />,
    text: "hello@elodtx.com",
    href: "mailto:hello@elodtx.com",
  },
  {
    icon: <MapPin size={18} className="text-brand-gold" />,
    text: "Mauritius & United Kingdom",
  },
  {
    icon: <Globe size={18} className="text-brand-gold" />,
    text: "elodtx.com",
    href: "https://elodtx.com",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-4 md:m-8">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="4" cy="10" r="2.5" fill="#C9A84C" />
                <circle cx="16" cy="10" r="2.5" fill="#C9A84C" />
                <line x1="6.5" y1="10" x2="13.5" y2="10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-brand-gold text-3xl font-bold">EloDtx</span>
            </div>
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.5)]">
              The Connection Intelligence Platform. Purpose-built AI that
              understands, predicts and improves how humans connect.
            </p>
          </div>

          {/* Footer link columns */}
          {FOOTER_COLUMNS.slice(0, 2).map((column) => (
            <div key={column.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[rgba(255,255,255,0.5)] hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[rgba(255,255,255,0.5)] hover:text-brand-gold transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[rgba(255,255,255,0.5)]">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Extra links */}
            <div className="mt-6 space-y-2">
              {FOOTER_COLUMNS.slice(2).map((column) =>
                column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-[rgba(255,255,255,0.4)] hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-brand-gold transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright + legal */}
          <div className="text-center md:text-right">
            <p className="text-[rgba(255,255,255,0.4)] text-xs">
              © 2026 Urban Space Web Technologies Ltd · Mauritius · Built in partnership with Eloclouds Limited UK
            </p>
            <div className="flex items-center gap-3 mt-1 justify-center md:justify-end">
              <Link href="#" className="text-[rgba(255,255,255,0.4)] hover:text-brand-gold text-xs transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[rgba(255,255,255,0.2)] text-xs">|</span>
              <Link href="#" className="text-[rgba(255,255,255,0.4)] hover:text-brand-gold text-xs transition-colors">
                Terms of Service
              </Link>
              <span className="text-[rgba(255,255,255,0.2)] text-xs">|</span>
              <Link href="#" className="text-[rgba(255,255,255,0.4)] hover:text-brand-gold text-xs transition-colors">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Text hover effect — large "EloDtx" with interactive glow on hover */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="EloDtx" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
