"use client"
import React, { useState } from "react";

// Example data (replace images with your assets)
const postsData = [
  {
    id: 1,
    image: "/images/blog/blog1.jpg",
    categories: ["BLOG", "SAFETY"],
    date: "August 19, 2025",
    title: "Welding protective clothing redefined: How KVE brings...",
    link: "#"
  },
  {
    id: 2,
    image: "/images/blog/blog2.jpeg",
    categories: ["BLOG", "MANUAL WELDING"],
    date: "July 15, 2025",
    title: "Lifecycle assessment in welding: A data-driven path to...",
    link: "#"
  },
  {
    id: 3,
    image: "/images/blog/blog3.jpeg",
    categories: ["BLOG", "WELDING ABC", "MANUAL WELDING"],
    date: "June 24, 2025",
    title: "KVE's advanced welding processes: MIG/MAG welding",
    link: "#"
  },
  {
    id: 4,
    image: "/images/blog/blog6.jpeg",
    categories: ["BLOG", "DIGITALIZATION"],
    date: "May 27, 2025",
    title: "How WeldEye welding management software sets the...",
    link: "#"
  },
  {
    id: 5,
    image: "/images/blog/blog5.jpeg",
    categories: ["NEWS"],
    date: "April 30, 2025",
    title: "KVE Oy appoints new chair and board members to support...",
    link: "#"
  },
  {
    id: 6,
    image: "/images/blog/blog6.jpeg",
    categories: ["BLOG", "WELDING AUTOMATION"],
    date: "April 17, 2025",
    title: "Cobot welding automates manual welding for superior...",
    link: "#"
  },
];

// Sidebar categories
const categories = [
  "All",
  "News",
  "Blog posts",
  "Whitepapers"
];

const POSTS_PER_PAGE = 6;
const TOTAL_PAGES = 26;

const MorePosts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);

  // Filtering logic
  const filteredPosts = postsData.filter(p => {
    const matchesCategory =
      activeCategory === "All" ||
      p.categories.includes(activeCategory.toUpperCase());
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const paginatedPosts = filteredPosts.slice(
    (activePage - 1) * POSTS_PER_PAGE,
    activePage * POSTS_PER_PAGE
  );

  return (
    <div style={{
      display: "flex",
      fontFamily: "Arial, Helvetica, sans-serif",
      margin: "0 120px"
    }}>
      {/* Sidebar */}
      <aside style={{
        width: 160,
        minWidth: 120,
        marginRight: 24,
        paddingTop: 32
      }}>
        <ul style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: 16
        }}>
          {categories.map(cat => (
            <li
              key={cat}
              style={{
                fontWeight: activeCategory === cat ? "bold" : "normal",
                marginBottom: 20,
                cursor: "pointer",
                color: "#000"
              }}
              onClick={() => {
                setActiveCategory(cat);
                setActivePage(1);
              }}
            >
              {cat}
              {cat === "Blog posts" && <span style={{
                marginLeft: 6,
                fontWeight: "normal",
                fontSize: 14,
                verticalAlign: "middle"
              }}>▼</span>}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Section */}
      <main style={{ flex: 1, padding: "30px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
          <h2 style={{
            margin: 0, fontWeight: 700, fontSize: 32, color: "#000"
          }}>MORE POSTS</h2>
          <input
            type="text"
            placeholder="Search by topic"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: 290,
              padding: "8px 16px",
              border: "1px solid #ccc",
              borderRadius: 3,
              fontSize: 15
            }}
          />
        </div>

        {/* Posts Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginBottom: 34
        }}>
          {paginatedPosts.map(post => (
            <div key={post.id}>
              <img
                src={post.image}
                alt=""
                style={{
                  width: "100%",
                  aspectRatio: "3/2",
                  objectFit: "cover",
                  background: "#eee",
                  borderRadius: 5,
                  marginBottom: 12
                }}
              />
              <div style={{
                fontSize: 13,
                marginBottom: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "#000"
              }}>
                {post.categories.map((c, i) =>
                  <span key={c}>
                    {c}{i < post.categories.length - 1 ? '      ' : ''}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>{post.date}</div>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4, color: "#000" }}>
                {post.title}
              </div>
              <a href={post.link}
                style={{
                  color: "#222",
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: "underline"
                }}>Read more</a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          marginTop: 18
        }}>
          <button
            disabled={activePage === 1}
            onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
            style={{
              background: "white",
              border: "1px solid #ddd",
              borderRadius: 4,
              padding: "7px 15px",
              color: "#222",
              fontSize: 16,
              cursor: activePage === 1 ? "not-allowed" : "pointer"
            }}
            aria-label="Previous Page"
          >&#8592;</button>
          {[1, 2, 3, 4, 5].map(pageNumber => (
            <button
              key={pageNumber}
              disabled={pageNumber === activePage}
              onClick={() => setActivePage(pageNumber)}
              style={{
                background: pageNumber === activePage ? "#FF2828" : "white",
                color: pageNumber === activePage ? "white" : "#222",
                border: pageNumber === activePage ? "1px solid #FF2828" : "1px solid #ddd",
                borderRadius: 4,
                padding: "7px 15px",
                fontWeight: pageNumber === activePage ? "bold" : "normal",
                fontSize: 16,
                cursor: pageNumber === activePage ? "default" : "pointer"
              }}
              aria-label={`Go to page ${pageNumber}`}
            >
              {pageNumber}
            </button>
          ))}
          <span style={{padding: "0 5px", color: "#888", fontSize: 18}}>...</span>
          <button
            onClick={() => setActivePage(TOTAL_PAGES)}
            style={{
              background: activePage === TOTAL_PAGES ? "#FF2828" : "white",
              color: activePage === TOTAL_PAGES ? "white" : "#222",
              border: activePage === TOTAL_PAGES ? "1px solid #FF2828" : "1px solid #ddd",
              borderRadius: 4,
              padding: "7px 15px",
              fontWeight: activePage === TOTAL_PAGES ? "bold" : "normal",
              fontSize: 16,
              cursor: activePage === TOTAL_PAGES ? "default" : "pointer"
            }}
            aria-label={`Go to page ${TOTAL_PAGES}`}
          >
            {TOTAL_PAGES}
          </button>
          <button
            disabled={activePage === TOTAL_PAGES}
            onClick={() => setActivePage(prev => Math.min(prev + 1, TOTAL_PAGES))}
            style={{
              background: "white",
              border: "1px solid #ddd",
              borderRadius: 4,
              padding: "7px 15px",
              color: "#222",
              fontSize: 16,
              cursor: activePage === TOTAL_PAGES ? "not-allowed" : "pointer"
            }}
            aria-label="Next Page"
          >&#8594;
          </button>
        </div>
      </main>
    </div>
  );
};

export default MorePosts;