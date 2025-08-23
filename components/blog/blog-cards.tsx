import React from "react";

const blogs = [
  {
    date: "August 19, 2025",
    title1: "Welding protective\nclothing redefined:\nHow KVE brings\n",
    highlight: "comfort, compliance",
    title2: "...",
    image: "/images/blog/blog1.jpg",
    link: "#"
  },
  {
    date: "July 15, 2025",
    title1: "Lifecycle assess-\nment in welding: ",
    highlight: "A\ndata-driven path\nto sustainability",
    title2: "",
    image: "/images/blog/blog2.jpeg",
    link: "#"
  },
  {
    date: "June 24, 2025",
    title1: "KVE's ad-\nvanced welding\nprocesses:\n",
    highlight: "MIG/MAG welding",
    title2: "",
    image: "/images/blog/blog3.jpeg",
    link: "#"
  }
];

export default function BlogCards() {
  return (
    <div className="min-h-screen bg-white pt-1 pb-2 px-8 flex items-center justify-center">
      <div className="flex flex-row gap-6 w-full max-w-7xl">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className={`relative h-[520px] overflow-hidden flex flex-col justify-end shadow-lg ${
              idx === 0 ? 'w-[50%]' : 'w-[25%]'
            }`}
            style={{
              backgroundImage: `url('${blog.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* White shadow effects for middle card */}
            {idx === 1 && (
              <>
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent opacity-60"></div>
                <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent opacity-60"></div>
                <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent opacity-60"></div>
              </>
            )}
            {/* Black shadow effects for third card */}
            {idx === 2 && (
              <>
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent opacity-60"></div>
                <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-black to-transparent opacity-60"></div>
              </>
            )}
            {/* Content */}
            <div className="relative z-10 px-6 pb-8 pt-10 flex flex-col justify-between h-full">
              <div>
                <div className={`text-base font-medium mb-2 ${
                  idx === 1 ? 'text-gray-600' : 'text-gray-300'
                }`}>{blog.date}</div>
                <div className={`text-3xl font-bold leading-tight whitespace-pre-line ${
                  idx === 1 ? 'text-black' : 'text-white'
                }`}>
                  {blog.title1}
                  {/* Changed highlight text color to red-600 */}
                  <span className="text-red-600">{blog.highlight}</span>
                  {blog.title2}
                </div>
              </div>
              <a
                href={blog.link}
                // Conditionally apply button styles based on index, adjusted padding and text size
                // Reduced horizontal padding from px-8 to px-6
                className={`text-base font-medium py-3 px-6 w-max transition duration-300 ease-in-out border-b-2 border-transparent
                  ${
                    (idx === 0 || idx === blogs.length - 1)
                      ? 'bg-white text-black hover:bg-gray-200 hover:border-red-600' // First and Last card: White background, Black text, Red border on hover
                      : 'bg-black text-white hover:bg-gray-800 hover:border-red-600' // Middle card: Black background, White text, Red border on hover
                  }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}