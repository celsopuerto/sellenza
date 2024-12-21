"use client"

import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon
import ModeToggle from './ThemeToggle';
import { Button } from './ui/button';
// import { useState } from 'react';

const Navbar = () => {
  // const [user, setUser] = useState({});

  return (
    <nav className="bg-zinc-50 dark:bg-zinc-900 p-4 border-zinc-300 dark:border-zinc-800">
      <div className=" mx-auto flex justify-between items-center text-sm">

        {/* Menu items */}
        <div className="flex space-x-0 text-[13px]">
          {/* Logo */}
          <Button variant="linktitle">
            <Link href="/" className="text-lg flex items-center space-x-2 justify-center">
              <Image 
                src="/sellenza-logo.png" 
                alt="Sellenza Logo" 
                width={40} 
                height={40} 
                className="mr-2 border-[1px] border-zinc-800 rounded-lg"
              />
              Sellenza
            </Link>
          </Button>
          <Button variant="link">
            <Link href="/search">All</Link>
          </Button>
          <Button variant="link">
            <Link href="/search/shirt">Shirt</Link>
          </Button>
          <Button variant="link">
            <Link href="/search/shoes">Shoes</Link>
          </Button>
        </div>

        {/* Search bar */}
        <div className="mx-8">
          <form action="/search" method="GET" className="relative">
            <input
              type="text"
              name="q"
              placeholder="Search products..."
              className="w-80 px-4 py-1.5 text-[12px] rounded-md border border-zinc-300 dark:border-input bg-transparent text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zinc-600 dark:text-zinc-400"
              aria-label="Search"
            >
              <AiOutlineSearch size={20} /> {/* React Icons Search Icon */}
            </button>
          </form>
        </div>

        {/* Authentication */}
        <div className="flex items-center space-x-3">
          <ModeToggle />
          
          <Button variant="transparent" asChild>
            <Link className="text-sm" href="/login">Login</Link>
          </Button>
          <Button variant="default" asChild>
            <Link className="text-sm" href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
