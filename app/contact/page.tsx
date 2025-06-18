"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Questions, catering requests, or just want to say hello? We would love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="text-green-600 text-lg font-semibold mb-2">Thank you for your message!</div>
                      <p className="text-gray-600">We will get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@rollingbites.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-gray-600">Downtown & Surrounding Areas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-gray-600">Mon-Sun: 11:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stay updated with our latest locations, menu items, and special offers!
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:bg-blue-50">
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-pink-50">
                      <Instagram className="h-5 w-5 text-pink-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-50">
                      <Twitter className="h-5 w-5 text-blue-400" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Catering */}
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">Catering Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4">
                    Planning an event? Let Rolling Bites cater your next corporate meeting, wedding, or private party!
                  </p>
                  <ul className="text-orange-700 space-y-1 mb-4">
                    <li>• Corporate events</li>
                    <li>• Private parties</li>
                    <li>• Weddings & celebrations</li>
                    <li>• Community events</li>
                  </ul>
                  <Button className="bg-orange-600 hover:bg-orange-700">Request Catering Quote</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
