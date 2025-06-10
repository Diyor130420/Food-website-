"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <Card className="bg-orange-50 border-orange-200">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated!</h3>
          <p className="text-gray-600">Get notified about our locations, new menu items, and special offers.</p>
        </div>

        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium">Thanks for subscribing! We'll keep you updated.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
              Subscribe
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
