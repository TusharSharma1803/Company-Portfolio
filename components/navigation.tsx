"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: "fas fa-home" },
    { href: "/about", label: "About", icon: "fas fa-user" },
    { href: "/skills", label: "Skills", icon: "fas fa-code" },
    { href: "/projects", label: "Projects", icon: "fas fa-folder" },
    { href: "/contact", label: "Contact", icon: "fas fa-envelope" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".floating-nav")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav className="floating-nav w-[95%] md:w-auto">
      <div className="nav-container">
        <div className="nav-inner px-4 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between relative z-10">
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold">
              <span className="nav-brand">Tushar</span>
              <span className="text-white font-light"> Sharma</span>
              <span className="text-white text-base font-light italic"> - Software Engineer L1</span>
            </Link>
            
            {/* Desktop Navigation
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-white px-5 py-3 relative ${pathname === item.href ? "active" : ""}`}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div> */}

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden mobile-menu-btn p-3 relative z-20 ${isMobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="hamburger-line w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
                <span className="hamburger-line w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1"></span>
                <span className="hamburger-line w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`mobile-menu md:hidden absolute top-full left-0 right-0 mt-2 ${
              isMobileMenuOpen ? "active" : ""
            }`}
          >
            <div className="nav-container">
              <div className="nav-inner p-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`mobile-nav-link text-white px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 ${
                        pathname === item.href ? "active" : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      <i className={`${item.icon} mr-2`}></i>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
