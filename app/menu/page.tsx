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
    { id: "all", name: "Items" },
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
      name: "Laksa",
      category: "Items",
      price: 12,
      description: "Spicy coconut noodle soup with shrimp and tofu",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [""],
    },
    {
      id: 2,
      name: "Satay",
      category: "Items",
      price: 11,
      description: "Grilled skewers of chicken with peanut sauce",
      image: "",
      dietary: ["gluten-free", "dairy-free"],
    },
    {
      id: 3,
      name: "Nasi Ayam",
      category: "Items",
      price: 10,
      description: "Fragrant rice with grilled chicken, cucumber, and sambal",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [""],
    },
    {
      id: 4,
      name: "Nasi Goreng",
      category: "Items",
      price: 14,
      description: "Fried rice with vegetables, egg, and your choice of protein",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [""],
    },
    {
      id: 5,
      name: "Mee Goreng",
      category: "Items",
      price: 13,
      description: "Stir-fried noodles with vegetables, egg, and your choice of protein",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "vegan"],
    },
    {
      id: 6,
      name: "Curry Chicken",
      category: "sides",
      price: 8,
      description: "Rich and aromatic chicken curry served",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [],
    },
    { id: 7,
      name: "Rendang",
      category: "sides",
      price: 4,
      description: "Slow-cooked beef in a spicy coconut sauce",
      image: "/placeholder.svg?height=300&width=400",
      dietary:[""],

    },
    { id: 8,
      name:"Egg sambal",
      category: "sides",
      price: 3,
      description: "Hard-boiled eggs in a spicy sambal sauce",
      image: "/placeholder.svg?height=300&width=400", 
      dietary: ["vegetarian", "gluten-free"],
    },
    { id: 9,
      name: "veggies",
      category: "sides",
      price: 2,
      description: "Stir-fried seasonal vegetables with garlic",
      image: "/placeholder.svg?height=300&width=400", 
      dietary: ["vegetarian", "vegan", "gluten-free"],

    },
    {
      id: 10,
      name: "Lemon grass Iced Tea",
      category: "drinks",
      price: 4,
      description: "Refreshing iced tea infused with lemongrass and mint",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "vegan", "gluten-free"],
    },
    { id : 11,
      name: "Teh Tarik",
      category: "drinks",
      price: 3,
      description: "Traditional Malaysian pulled tea with condensed milk",
      image: "/placeholder.svg?height=300&width=400",
      dietary: ["vegetarian", "gluten-free"],

    },
    { id: 12,
      name: "Bandung",
      category: "drinks",
      price: 5,
      description: "Sweet rose milk drink with a hint of evaporated milk",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [""],
    },
    { Id: 13,
      name: "Pokka Green Tea",
      category: "drinks",
      price: 6,
      description: "Refreshing green tea with a hint of honey",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [""],

    },
    {
      id: 14,
      name: "Home-made Soy Milk",
      category: "drinks",
      price: 3,
      description: "Freshly made soy milk with a touch of sweetness",
      image: "/placeholder.svg?height=300&width=400",
      dietary: [""],
    }
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
