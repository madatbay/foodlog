import React from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import { HeartIcon } from "@heroicons/react/outline";

export default function PublicGrid() {
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
      <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-2/3">
            <Image src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80" 
            layout="fill" className="object-cover hover:scale-110 transition"
            />
          </div>
          <div className="h-1/3 px-4 py-3">
              <p className="text-2xl text-gray-600 truncate">Recipe 1Recipe 1Recipe 1Recipe 1</p>
              <Avatar 
                src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=10&w=776&q=80"
                name="Julia Doe"
                />
                <hr className="mt-2"/>
                <span className="flex items-center justify-center space-x-2 mt-2 text-pink-500">
                    <span>4.7</span><HeartIcon className="w-4 h-4"/>
                </span>
          </div>
      </div>
    </div>
  );
}
