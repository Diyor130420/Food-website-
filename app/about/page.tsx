import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Truck, Award } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Maria Rodriguez",
      role: "Head Chef & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With 15 years of culinary experience, Maria brings authentic flavors with a modern twist to every dish.",
    },
    {
      name: "James Kim",
      role: "Co-Founder & Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "James handles the business side and ensures we're always at the right place at the right time.",
    },
    {
      name: "Sofia Chen",
      role: "Sous Chef",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sofia's creativity and attention to detail make every plate a work of art.",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passion for Food",
      description: "Every dish is crafted with love and attention to detail",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community First",
      description: "We're proud to serve and support our local community",
    },
    {
      icon: <Truck className="h-8 w-8 text-green-500" />,
      title: "Mobile Excellence",
      description: "Bringing restaurant-quality food directly to you",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Quality Ingredients",
      description: "Only the freshest, locally-sourced ingredients make it to our kitchen",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From a dream to the streets - discover the passion behind Southeast Asian Delicacy
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It All Started</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Southeast Asian Delicacy began as a dream shared by two food lovers who wanted to bring gourmet flavors to the
                  streets. In 2020, Maria and James converted an old delivery truck into a mobile kitchen and hit the
                  road with a simple mission: serve amazing food wherever people gather.
                </p>
                <p>
                  What started as weekend farmers market visits has grown into a full-time operation serving thousands
                  of happy customers across the city. We have maintained our commitment to fresh ingredients, creative
                  recipes, and exceptional service.
                </p>
                <p>
                  Today, Southeast Asian Delicacy is more than just a food truck - we are a community gathering point, a source of
                  comfort food, and a testament to the power of following your passion.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Southeast Asian Delicacy food truck"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from ingredient selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your favorite meals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To bring people together through exceptional food experiences, one neighborhood at a time. We believe that
            great food has the power to create connections, spark conversations, and build community wherever we park
            our truck.
          </p>
          <div className="mt-8 text-lg text-gray-600">
            <p>- Maria Rodriguez, Head Chef & Founder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
