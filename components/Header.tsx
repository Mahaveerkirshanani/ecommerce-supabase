"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "./ui/input";
import { IoMdSearch } from "react-icons/io";
import LanguageSelector from "./LanguageSelector";
import { ShoppingBagIcon, ShoppingCart } from "lucide-react";
import CategoriesNav from "./SecondNav";
import { useRouter } from "next/navigation";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
     router.push(`/search?category=${encodeURIComponent(query)}`);
      console.log(query);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="">
      <nav className=" bg-[#131921]  text-white h-[60px]  flex items-center  md:px-5 px-2 py-2 gap-4 justify-between">
        <Image
          src={"/logos/amazon-logo-2.webp"}
          alt="logo"
          width={1000}
          height={1000}
          className="lg:max-w-[140px] sm:w-[100px] w-[70px] h-[20px] sm:h-[30px]"
        />

        <div className="lg:flex hidden gap-1  ">
          <div className="flex items-end mb-[4px]">
            <FaLocationDot />
          </div>
          <div className=" cursor-pointer">
            <p className="text-xs text-gray-300">Delivering to Karachi</p>
            <h2 className="text-base font-semibold leading-4 tracking-wide text-white">
              Update location
            </h2>
          </div>
        </div>

        <div className="text-black flex items-center flex-1">
          <div className="md:flex hidden items-center justify-center px-3 h-10 bg-[#e6e6e6] text-[16px] text-black/80 tracking-wide rounded-l-[5px]">
            All
          </div>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search Amazon.in"
            className="border-none max-md:rounded-l-md rounded-none focus:outline-none bg-white placeholder:text-black/50 text-[16px] "
          />
          <div className="flex items-center   rounded-r-[5px] justify-center px-2 h-10 bg-[#febd69]  cursor-pointer ">
            <IoMdSearch size={27} onClick={handleSearch} />
          </div>
        </div>

        <div className="lg:flex hidden">
          <LanguageSelector />
        </div>

        <div className="md:flex hidden flex-col cursor-pointer">
          <p className="text-white/80 text-xs"> Hello, sign in</p>
          <h2 className="text-sm  leading-3 tracking-wide">Account & Lists</h2>
        </div>

        <div className="md:flex hidden flex-col cursor-pointer">
          <p className="text-white/80 text-xs"> Returns</p>
          <h2 className="text-sm  leading-3 tracking-wide">& orders</h2>
        </div>

        <div className="relative flex items-center cursor-pointer">
          {/* Cart Icon */}
          <div className="relative">
            <ShoppingCart
              size={40}
              className=" dark:text-gray-200 transition-colors duration-300 ease-in-out hover:text-red-500"
            />

            {/* Item Count Badge */}
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-800">
              0
            </span>
          </div>
        </div>
      </nav>
      <section>
        <CategoriesNav />
      </section>
    </div>
  );
};

export default Header;
