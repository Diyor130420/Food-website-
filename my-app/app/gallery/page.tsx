"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "food", name: "Food" },
    { id: "events", name: "Events" },
    { id: "customers", name: "Happy Customers" },
    { id: "truck", name: "Our Truck" },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Korean BBQ Tacos",
      category: "food",
      title: "Korean BBQ Tacos",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Happy customers enjoying food",
      category: "customers",
      title: "Happy Customers",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Food truck at festival",
      category: "events",
      title: "Food Truck Festival",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Gourmet burger",
      category: "food",
      title: "Signature Burger",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Rolling Bites truck exterior",
      category: "truck",
      title: "Our Beautiful Truck",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Loaded fries",
      category: "food",
      title: "Loaded Fries",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Community event",
      category: "events",
      title: "Community Gathering",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Family enjoying meal",
      category: "customers",
      title: "Family Fun",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Fresh ingredients",
      category: "food",
      title: "Fresh Ingredients",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Truck interior kitchen",
      category: "truck",
      title: "Our Kitchen",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Corporate catering event",
      category: "events",
      title: "Corporate Catering",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Satisfied customer with food",
      category: "customers",
      title: "Satisfied Customer",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Take a visual journey through our delicious food, happy customers, and memorable events
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white hover:bg-opacity-20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Be Featured?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Tag us in your photos @rollingbites and you might see yourself in our gallery!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Like on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
