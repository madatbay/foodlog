import React from "react";
import Link from "next/link";
import { UserIcon, SearchIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-24 mb-10 flex items-center justify-between">
      <Link href="/">
        <a className="text-2xl font-bold text-pink-500">Foodlog</a>
      </Link>
      <div className="flex items-center rounded-md shadow-lg text-pink-500 hover:bg-pink-500 hover:text-white transition">
        <input
          type="text"
          className="h-10 w-64 px-4 focus:outline-none hover:placeholder-white bg-transparent"
          placeholder="Search..."
        />
        <div className="cursor-pointer p-3">
          <SearchIcon className="w-5 h-5" />
        </div>
      </div>
      <Link href="#">
        <a
          href="#"
          className="p-3 flex items-center space-x-2 border-2 border-pink-50 rounded-md text-pink-500 hover:bg-pink-500 hover:text-white transition"
        >
          <UserIcon className="w-5 h-" />
          <p className=""> Log in or Register</p>
        </a>
      </Link>
    </nav>
  );
}
