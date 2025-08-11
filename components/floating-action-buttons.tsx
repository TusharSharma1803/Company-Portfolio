"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FloatingActionButtons() {
  const pathname = usePathname()

  const fabItems = [
    { href: "/", icon: "fas fa-home", tooltip: "Home", title: "Home" },
    { href: "/about", icon: "fas fa-user", tooltip: "About", title: "About" },
    { href: "/skills", icon: "fas fa-code", tooltip: "Skills", title: "Skills" },
    { href: "/projects", icon: "fas fa-folder", tooltip: "Projects", title: "Projects" },
    { href: "/contact", icon: "fas fa-envelope", tooltip: "Contact", title: "Contact" },
  ]

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4 hidden lg:block">
      <div className="floating-fab-container text-center">
        {fabItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`floating-fab group ${pathname === item.href ? "active" : ""}`}
          >
            <i className={`${item.icon} text-lg`}><br /><span style={{fontFamily: "sans-serif", fontSize: "12px"}}>{item.title}</span></i>
            <span className="fab-tooltip">{item.tooltip}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
