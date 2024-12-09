import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Guitar Shop</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guitars">
                <a className="hover:underline">Guitars</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a className="hover:underline">Register</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

