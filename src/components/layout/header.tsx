"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { mainNavItems } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between relative">
          {/* Logo Area - Much Larger */}
          <div className="flex items-center z-10">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <img
                  src="/veloxforce-logo-deep-blue.svg"
                  alt={siteConfig.name}
                  className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
                  width={300}
                  height={80}
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-700/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 hover:text-blue-600 relative py-2 px-2 whitespace-nowrap",
                    pathname === item.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700",
                    // Add underline effect for active state
                    pathname === item.href && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full after:transition-all after:duration-200"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side - CTA and Mobile Menu */}
          <div className="flex items-center gap-4 z-10">
            {/* Primary CTA - Desktop */}
            <Button
              asChild
              className="hidden md:flex velox-cta-primary text-sm font-semibold px-6 py-2.5 h-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Link href="/tools/business-audit">Free Efficiency Audit</Link>
            </Button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="h-10 w-10 hover:bg-gray-100 transition-colors duration-200 relative z-20"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg lg:hidden">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex w-full items-center rounded-xl px-4 py-4 text-base font-medium transition-all duration-200",
                      pathname === item.href
                        ? "bg-blue-50 text-blue-600 font-semibold border border-blue-100"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Button
                  asChild
                  className="w-full velox-cta-primary text-base font-semibold py-4 h-12 rounded-xl shadow-lg"
                >
                  <Link href="/tools/business-audit" onClick={() => setMobileMenuOpen(false)}>
                    Free Efficiency Audit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
