"use client";
import React from 'react';
import { useRouter } from 'next/router'; // Ensure correct import for useRouter

export default function PageNotFound() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <main className='text-center'>
        <h1 className='text-red-600 text-3xl font-bold m-4'>
          You are on the wrong page.
        </h1>
        <p className='text-red-600 text-xl m-4'>
          Please go back to the home page.
        </p>
        <button
          onClick={handleClick}
          className='mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-700 transition-all'
          aria-label="Go back to home page"
        >
          Home Page
        </button>
      </main>
    </div>
  );
}
