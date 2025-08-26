'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { dummyBlogs } from '@/data/blog';
import Footer from '@/components/common/footer';
import Navigation from '@/components/common/navigation';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center lg:text-start text-gray-800 mb-4">
          Blog & News
        </h1>
        <p className="text-lg text-center lg:text-start text-gray-600">
          Welcome to our blog! Here you will find the latest news, updates, and insights on welding and our products.
        </p>
      </div>
    </section>
  );
};

const FeaturedPosts = () => {
  const featuredBlogs = dummyBlogs.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-start text-gray-800 mb-12">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {featuredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`relative rounded-lg shadow-md overflow-hidden ${
                index === 0 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={index === 0 ? 1000 : 500}
                height={600}
                className="object-cover w-full h-64 md:h-96"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-2">{blog.date}</p>
               <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{blog.title}</h3>
                <Link
                  href={`/blog-news/${blog.id}`}
                  className="text-black rounded hover:text-red-500 px-3 py-2 bg-white w-fit font-semibold"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterToolbar = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const blogSubcategories = [
    'All',
    'People',
    'Manual Welding',
    'Welding ABC',
    'Innovation',
    'Welding Automation',
    'Safety',
    'Digitalization',
  ];

  return (
    <div className="flex flex-col space-y-4 w-fit font-medium">
      <button
        onClick={() => setActiveFilter('All')}
        className={`py-2 text-left text-gray-700 hover:text-red-600 ${
          activeFilter === 'All' ? 'text-red-600 underline' : ''
        } focus:outline-none`}
      >
        All
      </button>
      <button
        onClick={() => setActiveFilter('News')}
        className={`py-2 text-left text-gray-700 hover:text-red-600 ${
          activeFilter === 'News' ? 'text-red-600 underline' : ''
        } focus:outline-none`}
      >
        News
      </button>
      <div className="relative">
        <button
          onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
          className={`py-2 text-left w-fit text-gray-700 hover:text-red-600 ${
            activeFilter.startsWith('Blog posts') ? 'text-red-600 underline' : ''
          } focus:outline-none flex justify-between items-center`}
        >
          <span className='mr-4'>Blog posts</span>
          <svg
            className={`w-4 h-4 transform transition-transform duration-300 ${
              isBlogDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isBlogDropdownOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="mt-2  rounded-md shadow-lg">
            {blogSubcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => {
                  setActiveFilter(`Blog posts: ${subcategory}`);
                  setIsBlogDropdownOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-gray-700 hover:text-red-600 ${
                  activeFilter === `Blog posts: ${subcategory}` ? 'text-red-600 underline' : ''
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setActiveFilter('Whitepapers')}
        className={`py-2 text-left text-gray-700 hover:text-red-600 ${
          activeFilter === 'Whitepapers' ? 'text-red-600 underline' : ''
        } focus:outline-none`}
      >
        Whitepapers
      </button>
    </div>
  );
};

const MorePosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const postsPerPage = 6;

  const filteredBlogs = dummyBlogs.slice(3).filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter.startsWith('Blog posts')) {
      const subcategory = activeFilter.split(': ')[1];
      if (subcategory === 'All') return matchesSearch && blog.category.includes('Blog');
      return matchesSearch && blog.category.includes(subcategory);
    }
    return matchesSearch && blog.category.includes(activeFilter);
  });

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const currentPosts = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page:number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-start text-gray-800 mb-12">
          All Posts
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <FilterToolbar />
          </div>
          <div className="md:w-3/4">
            <div className="mb-8 flex justify-end">
              <div className="relative w-full max-w-md">
                <Input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 pl-10 rounded-md border border-border"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.length > 0 ? (
                currentPosts.map((blog) => (
                  <div key={blog.id} className="bg-white border overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-6">
                      <p className="text-red-600 text-sm font-semibold mb-2">
                        {blog.category.join(', ')}
                      </p>
                      <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2">
                        {blog.title}
                      </h3>
                      <Link
                        href={`/blog-news/${blog.id}`}
                        className="text-red-600 hover:underline font-semibold"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 col-span-full text-center">
                  No posts found matching your criteria.
                </p>
              )}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-start mt-12 space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogNewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeaturedPosts />
        <MorePosts />
      </main>
      <Footer />
    </div>
  );
};

export default BlogNewsPage;