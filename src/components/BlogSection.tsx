import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import featuredImage from "../assets/ipl2025.webp";
import regularPostsImage1 from '../assets/How-to-Play-Teen-Patti-on-Reddy-Anna-2.webp';
import regularPostsImage2 from '../assets/Tips-to-Make-Money-by-Online-Sports-Betting.webp';
import regularPostsImage3 from '../assets/Premier-League-Betting-Tips.webp';
import regularPostsImage4 from '../assets/bankroll-management-sports-betting.webp';
import regularPostsImage5 from '../assets/top-10-Andar-Bahar-online-casino.webp';




const blogPosts = [
  {
    id: 1,
    title:
      "Reddy Anna Live IPL 2025 Betting Guide: Top Teams and Players to Watch",
    excerpt:
      "Get expert insights on the best Reddy Anna Live betting strategies for IPL 2024. Learn about top-performing teams, key players, and winning tips.",
    category: "Cricket Betting",
    author: "Reddy Anna Team",
    date: "2024-12-19",
    readTime: "5 min read",
    image: featuredImage,
    featured: true,
  },
  {
    id: 2,
    title: "Reddy Anna Live Teen Patti Strategy: How to Win More Games",
    excerpt:
      "Master the art of Teen Patti on Reddy Anna Live with our comprehensive strategy guide. Learn when to fold, when to raise, and how to read your opponents.",
    category: "Casino Tips",
    author: "Expert Player",
    date: "2024-12-18",
    readTime: "7 min read",
    image: regularPostsImage1,
    featured: false,
  },
  {
    id: 3,
    title: "Reddy Anna Live Betting Tips: Maximize Your Winnings",
    excerpt:
      "Discover the secrets of successful live betting on Reddy Anna Live. Learn how to analyze in-play odds and make profitable decisions during live matches.",
    category: "Betting Tips",
    author: "Live Betting Pro",
    date: "2024-12-17",
    readTime: "6 min read",
    image: regularPostsImage2,
    featured: false,
  },
  {
    id: 4,
    title: "Reddy Anna Live Football Betting: Premier League Analysis",
    excerpt:
      "In-depth analysis of Premier League teams, form guides, and Reddy Anna Live betting opportunities. Stay ahead with our expert predictions.",
    category: "Football",
    author: "Football Analyst",
    date: "2024-12-16",
    readTime: "8 min read",
    image: regularPostsImage3,
    featured: false,
  },
  {
    id: 5,
    title: "Reddy Anna Live Bankroll Management: Protect Your Betting Capital",
    excerpt:
      "Learn essential bankroll management techniques for Reddy Anna Live to protect your betting capital and ensure long-term profitability.",
    category: "Strategy",
    author: "Finance Expert",
    date: "2024-12-15",
    readTime: "4 min read",
    image: regularPostsImage4,
    featured: false,
  },
  {
    id: 6,
    title: "Reddy Anna Live Andar Bahar: Complete Game Guide and Tips",
    excerpt:
      "Everything you need to know about Andar Bahar on Reddy Anna Live. From basic rules to advanced strategies for consistent wins.",
    category: "Casino Games",
    author: "Casino Expert",
    date: "2024-12-14",
    readTime: "5 min read",
    image: regularPostsImage5,
    featured: false,
  },
];

export const BlogSection = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reddy Anna Live Betting Tips & News
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Stay ahead of the game with expert Reddy Anna Live betting tips,
            strategy guides, and the latest sports news from our team of
            professionals.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="mb-12 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-yellow-400 text-black mb-4">
                    Featured Article
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors flex items-center">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div className="bg-gray-700 rounded-lg h-70 overflow-hidden mb-4">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-gray-700 text-gray-300 mb-3">
                    {post.category}
                  </Badge>
                        <div className="bg-gray-700 rounded-lg h-70 overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <button className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-yellow-400/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Daily Reddy Anna Live Betting Tips
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter and receive expert Reddy Anna Live
                betting tips, match predictions, and exclusive offers directly
                in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
