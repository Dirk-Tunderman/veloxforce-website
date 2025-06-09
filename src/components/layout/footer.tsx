import Link from "next/link"

import { footerLinks } from "@/config/navigation"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Company Info Section - Enhanced */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group mb-6">
              <img
                src="/veloxforce-logo-deep-blue.svg"
                alt={siteConfig.name}
                className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                width={200}
                height={48}
              />
            </Link>
            <p className="text-base text-gray-700 max-w-md leading-relaxed mb-6">
              Elevate your team from operators to innovators. Outcomes delivered, complexity handled.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-sm font-medium text-gray-800">
                  {siteConfig.contact.email}
                </p>
              </div>
            </div>
          </div>
          {/* Footer Links - Enhanced Design */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-5">
              <h3 className="text-base font-bold text-gray-900 border-b border-blue-200 pb-2">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-all duration-200 hover:text-blue-600 hover:translate-x-1 inline-block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section - Enhanced */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-sm text-gray-600 font-medium">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Social Media Links - Enhanced */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-medium">Follow us:</span>
              <div className="flex items-center gap-3">
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span className="text-xs font-bold">T</span>
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span className="text-xs font-bold">in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
