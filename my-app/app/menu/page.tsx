"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDiet, setSelectedDiet] = useState("all")

  const categories = [
    { id: "all", name: "All Items" },
    { id: "tacos", name: "Tacos" },
    { id: "burgers", name: "Burgers" },
    { id: "sides", name: "Sides" },
    { id: "drinks", name: "Drinks" },
  ]

  const dietaryFilters = [
    { id: "all", name: "All" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "vegan", name: "Vegan" },
    { id: "gluten-free", name: "Gluten-Free" },
  ]

  const menuItems = [
    {
      id: 1,
      name: "Korean BBQ Tacos",
      category: "tacos",
      price: 12,
      description: "Marinated beef with kimchi, cilantro, and spicy mayo",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [],
    },
    {
      id: 2,
      name: "Fish Tacos",
      category: "tacos",
      price: 11,
      description: "Grilled mahi-mahi with cabbage slaw and chipotle crema",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["gluten-free"],
    },
    {
      id: 3,
      name: "Veggie Tacos",
      category: "tacos",
      price: 10,
      description: "Roasted vegetables with avocado and lime crema",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "vegan", "gluten-free"],
    },
    {
      id: 4,
      name: "Classic Burger",
      category: "burgers",
      price: 14,
      description: "Beef patty with lettuce, tomato, onion, and special sauce",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [],
    },
    {
      id: 5,
      name: "Veggie Burger",
      category: "burgers",
      price: 13,
      description: "House-made black bean patty with avocado",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "vegan"],
    },
    {
      id: 6,
      name: "Loaded Fries",
      category: "sides",
      price: 8,
      description: "Crispy fries with cheese, bacon, and green onions",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [],
    },
    {
      id: 7,
      name: "Sweet Potato Fries",
      category: "sides",
      price: 7,
      description: "Crispy sweet potato fries with chipotle aioli",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "vegan", "gluten-free"],
    },
    {
      id: 8,
      name: "Fresh Lemonade",
      category: "drinks",
      price: 4,
      description: "House-made lemonade with fresh mint",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "vegan", "gluten-free"],
    },
  ]

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
    const dietMatch = selectedDiet === "all" || item.dietary.includes(selectedDiet)
    return categoryMatch && dietMatch
  })

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fresh ingredients, bold flavors, and creative combinations that will make your taste buds dance.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
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

            {/* Dietary Filter */}
            <div>
              <h3 className="font-semibold mb-3">Dietary Options</h3>
              <div className="flex flex-wrap gap-2">
                {dietaryFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedDiet === filter.id ? "default" : "outline"}
                    onClick={() => setSelectedDiet(filter.id)}
                    className={selectedDiet === filter.id ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.dietary.map((diet) => (
                        <Badge key={diet} variant="secondary" className="text-xs">
                          {diet}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Add to Order</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
