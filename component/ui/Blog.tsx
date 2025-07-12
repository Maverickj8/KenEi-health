import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "About Us: The Heart of Kenei Health",
    excerpt:
      "Discover how Kenei Health transforms healthcare accessibility in Africa, bridging gaps with affordable, on-demand, and trusted medical solutions.",
    image: "/images/ste.jpg",
    category: "Information",
    date: "2024-12-03",
    readTime: "4 mins read",
    link: "#",
  },
  // Duplicate to simulate multiple posts
  {
    id: 2,
    title: "About Us: The Heart of Kenei Health",
    excerpt:
      "Discover how Kenei Health transforms healthcare accessibility in Africa, bridging gaps with affordable, on-demand, and trusted medical solutions.",
    image: "/images/ste.jpg",
    category: "Information",
    date: "2024-12-03",
    readTime: "4 mins read",
    link: "#",
  },
  {
    id: 3,
    title: "About Us: The Heart of Kenei Health",
    excerpt:
      "Discover how Kenei Health transforms healthcare accessibility in Africa, bridging gaps with affordable, on-demand, and trusted medical solutions.",
    image: "/images/ste.jpg",
    category: "Information",
    date: "2024-12-03",
    readTime: "4 mins read",
    link: "#",
  },
  {
    id: 4,
    title: "About Us: The Heart of Kenei Health",
    excerpt:
      "Discover how Kenei Health transforms healthcare accessibility in Africa, bridging gaps with affordable, on-demand, and trusted medical solutions.",
    image: "/images/ste.jpg",
    category: "Information",
    date: "2024-12-03",
    readTime: "4 mins read",
    link: "#",
  },
  {
    id: 5,
    title: "About Us: The Heart of Kenei Health",
    excerpt:
      "Discover how Kenei Health transforms healthcare accessibility in Africa, bridging gaps with affordable, on-demand, and trusted medical solutions.",
    image: "/images/ste.jpg",
    category: "Information",
    date: "2024-12-03",
    readTime: "4 mins read",
    link: "#",
  },
  {
    id: 6,
    title: "About Us: The Heart of Kenei Health",
    excerpt:
      "Discover how Kenei Health transforms healthcare accessibility in Africa, bridging gaps with affordable, on-demand, and trusted medical solutions.",
    image: "/images/ste.jpg",
    category: "Information",
    date: "2024-12-03",
    readTime: "4 mins read",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-500 px-6 py-12 md:py-20 ">
      <div className="text-center mb-10 space-y-4">
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
          Blog
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Stay Informed. Stay Healthy
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48 md:h-52">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>

            <div className="flex-1 flex flex-col p-4 space-y-3">
              <span className="text-gray-500 text-xs bg-gray-100 px-2 py-0.5 rounded-full self-start">
                {post.category}
              </span>

              <h3 className="font-semibold text-gray-900 text-lg">
                {post.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center text-gray-400 text-xs space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <a
                href={post.link}
                className="mt-auto text-teal-600 font-semibold flex items-center space-x-1 hover:underline"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
