"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const categories = [
  'Technology', 'Fashion', 'Sports', 'Entertainment', 'Health', 'Science', 'Travel', 'Food', 'Finance', 'Education',
  'Art', 'Photography', 'Music', 'Books', 'Business', 'Politics', 'Gaming', 'Nature', 'Movies', 'Television',
  'History', 'Culture', 'Religion', 'Philosophy', 'Psychology', 'Fitness', 'Relationships', 'Lifestyle', 'DIY',
  'Gardening', 'Automotive', 'Pets', 'Real Estate', 'Parenting', 'Environment', 'Social Media', 'Cryptocurrency',
  'Programming', 'Startups', 'Investing'
];

const CategoriesNav: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category: string) => {

    // Redirect to a URL with the search query
    if (category.trim()) {
      router.push(`/search?category=${encodeURIComponent(category)}`);
       console.log(category);
     }
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <nav className="bg-[#232f3e] w-full py-1">
      <div className=" mx-auto lg:px-4  h-[40px] flex items-center justify-between w-full">
        {/* "All" Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md shadow-sm hover:bg-gray-700 focus:outline-none  gap-2"
          >
            <FiMenu size={20} className="text-white" />
            <span className="text-sm font-medium">All</span>
            <IoIosArrowDown className="text-white" />
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10 max-h-[400px] overflow-y-auto scrollbar-hidden">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer text-white hover:bg-gray-700"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Categories List */}
        <div className="flex space-x-2 md:space-x-4 overflow-x-auto no-scrollbar">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="  text-xs md:text-base font-medium text-white whitespace-nowrap hover:text-blue-500 transition-colors focus:outline-none"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoriesNav;
