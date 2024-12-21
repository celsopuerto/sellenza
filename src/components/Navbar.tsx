"use client"

import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon
import ModeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { auth } from '@/firebase/config';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

const Navbar = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Logout successful!');
      router.push('/login');
    } catch (error) {
      toast.error('Logout failed!');
      console.error("Error: d", error);
    }
  }

  return (
    <nav className="bg-zinc-50 dark:bg-zinc-900 p-4 border-zinc-300 dark:border-zinc-800">
      <div className="mx-auto flex justify-between items-center text-sm">

        {/* Menu items */}
        <div className="flex text-[13px]">
          {/* Logo */}
          <Button variant="linktitle">
            <Link href="/" className="text-lg flex items-center justify-center">
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
          {/* All filter button */}
          <Button variant="link">
            <Link href="/search" className="text-sm">All</Link>
          </Button>
          {/* Category buttons */}
          <Button variant="link">
            <Link href="/search?q=shirts" className="text-sm">Shirt</Link>
          </Button>
          <Button variant="link">
            <Link href="/search?q=shoes" className="text-sm">Shoes</Link>
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
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <small className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {loading ? 'Loading...' : user?.email}
              </small>
              <Button variant="default" onClick={handleLogout} aria-label="Logout">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <ModeToggle />
              <Button variant="transparent" asChild>
                <Link className="text-sm" href="/login" aria-label="Login">
                  Login
                </Link>
              </Button>
              <Button variant="default" asChild>
                <Link className="text-sm" href="/register" aria-label="Register">
                  Register
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
