import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SchedulePage() {
  const schedule = [
    {
      day: "Monday",
      location: "Downtown Plaza",
      address: "123 Main St, Downtown",
      time: "11:00 AM - 3:00 PM",
      status: "confirmed",
    },
    {
      day: "Tuesday",
      location: "Tech Park",
      address: "456 Innovation Blvd",
      time: "11:30 AM - 2:30 PM",
      status: "confirmed",
    },
    {
      day: "Wednesday",
      location: "University Campus",
      address: "789 College Ave",
      time: "12:00 PM - 4:00 PM",
      status: "confirmed",
    },
    {
      day: "Thursday",
      location: "Business District",
      address: "321 Corporate Way",
      time: "11:00 AM - 3:00 PM",
      status: "confirmed",
    },
    {
      day: "Friday",
      location: "Food Truck Festival",
      address: "555 Festival Grounds",
      time: "10:00 AM - 8:00 PM",
      status: "special-event",
    },
    {
      day: "Saturday",
      location: "Farmers Market",
      address: "888 Market Square",
      time: "9:00 AM - 2:00 PM",
      status: "confirmed",
    },
    {
      day: "Sunday",
      location: "Riverside Park",
      address: "999 Park Lane",
      time: "12:00 PM - 6:00 PM",
      status: "weather-dependent",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "special-event":
        return "bg-purple-100 text-purple-800"
      case "weather-dependent":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmed"
      case "special-event":
        return "Special Event"
      case "weather-dependent":
        return "Weather Dependent"
      default:
        return "TBD"
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Us This Week</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Check out our weekly schedule and never miss your favorite Rolling Bites experience!
          </p>
        </div>
      </section>

      {/* Current Location Alert */}
      <section className="py-6 bg-orange-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-orange-800">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">Currently at: Downtown Plaza</span>
            <Badge className="bg-green-100 text-green-800">Live Now</Badge>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">This Week's Schedule</h2>
            <p className="text-xl text-gray-600">Plan your visit and catch us at these locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{item.day}</CardTitle>
                    <Badge className={getStatusColor(item.status)}>{getStatusText(item.status)}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-semibold">{item.location}</p>
                        <p className="text-sm text-gray-600">{item.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-xl text-gray-600">Interactive map showing our current and upcoming locations</p>
          </div>

          {/* Placeholder for Google Maps */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">Google Maps integration will show our live location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Special Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Food Truck Festival</h3>
                    <p className="text-gray-600 mb-2">Join us for the biggest food truck gathering of the year!</p>
                    <p className="font-medium">Friday, 10:00 AM - 8:00 PM</p>
                    <p className="text-sm text-gray-500">Festival Grounds, 555 Festival Ave</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Corporate Catering</h3>
                    <p className="text-gray-600 mb-2">Book us for your next corporate event or private party!</p>
                    <p className="font-medium">Available by appointment</p>
                    <p className="text-sm text-gray-500">Call (555) 123-4567 to book</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
