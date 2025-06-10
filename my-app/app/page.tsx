import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Clock, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"

export default function HomePage() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Find Us Anywhere",
      description: "Track our location in real-time and never miss your favorite meal",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Fresh Daily",
      description: "All ingredients sourced fresh daily for the best taste experience",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Community Focused",
      description: "Proudly serving our local community with love and dedication",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best tacos in the city! The Korean BBQ fusion is absolutely incredible.",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Always fresh, always delicious. The staff is super friendly too!",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "I follow them everywhere they go. Worth every mile!",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Delicious food truck meals"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Rolling Bites</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Gourmet street food that comes to you. Fresh, fast, and absolutely delicious.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                <Link href="/menu">See Our Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3"
              >
                <Link href="/schedule">Track Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Rolling Bites?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just a food truck - we're a mobile culinary experience bringing gourmet flavors to your
              neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Favorites</h2>
            <p className="text-xl text-gray-600">Taste the dishes that keep our customers coming back for more</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Korean BBQ Tacos", price: "$12", image: "/placeholder.svg?height=300&width=400" },
              { name: "Gourmet Burger", price: "$14", image: "/placeholder.svg?height=300&width=400" },
              { name: "Loaded Fries", price: "$8", image: "/placeholder.svg?height=300&width=400" },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-xl font-bold text-orange-600">{item.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </div>
  )
}
