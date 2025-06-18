"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">Southeast Asian Delicacy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">Order Now</Button>
            </Link>

          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-orange-600 hover:bg-orange-700 mt-4">Order Now</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
