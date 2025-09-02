import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Reddy Anna Live has been my go-to platform for cricket betting since 2015. The instant withdrawals and 24/7 support are unmatched. I've won over ₹2 lakhs in the last IPL season alone!",
    amount: "₹2,50,000",
    game: "Cricket Betting"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, NCR",
    rating: 5,
    text: "The live casino games are amazing! I love playing Teen Patti and Andar Bahar. The dealers are professional and the payouts are instant. Best betting platform in India!",
    amount: "₹1,80,000",
    game: "Live Casino"
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "Customer service is outstanding. They resolved my withdrawal issue within 5 minutes. The platform is secure and trustworthy. Highly recommended for serious bettors.",
    amount: "₹3,20,000",
    game: "Sports Betting"
  },
  {
    id: 4,
    name: "Sunita Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "I've been using Reddy Anna Live for 3 years now. The odds are competitive and the variety of games is impressive. Fast deposits and withdrawals make it perfect for me.",
    amount: "₹1,95,000",
    game: "All Games"
  },
  {
    id: 5,
    name: "Vikram Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "The mobile app is fantastic! I can bet on cricket matches while traveling. The live scores and updates are real-time. This platform has changed my betting experience completely.",
    amount: "₹4,10,000",
    game: "Mobile Betting"
  },
  {
    id: 6,
    name: "Kavitha Nair",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "Reddy Anna Live offers the best odds for football betting. I've been profitable for 2 consecutive years. The support team is always helpful and responsive.",
    amount: "₹2,75,000",
    game: "Football Betting"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Reddy Anna Live Customers Say
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust Reddy Anna Live for their betting needs. 
            Read their success stories and see why Reddy Anna Live is India's #1 betting platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="ml-auto">
                    <span className="text-yellow-400 font-bold text-lg">{testimonial.amount}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 text-sm font-medium">{testimonial.game}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10L+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">₹500Cr+</div>
            <div className="text-gray-400">Total Winnings</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Customer Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">14+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Trusted by Reddy Anna Live customers across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white text-black px-4 py-2 rounded font-bold">🔒 SSL Secured</div>
            <div className="bg-white text-black px-4 py-2 rounded font-bold">⚡ Instant Payouts</div>
            <div className="bg-white text-black px-4 py-2 rounded font-bold">🏆 Licensed Platform</div>
            <div className="bg-white text-black px-4 py-2 rounded font-bold">📱 Mobile Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
};
