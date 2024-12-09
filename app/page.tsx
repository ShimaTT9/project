'use client'
import React, { useEffect, useState } from 'react';

interface Guitar {
  id: string;
  name: string;
  brand: string;
  price: number;
  likeScore: number;
}

export default function Home() {
  const [guitars, setGuitars] = useState<Guitar[]>([]);

  useEffect(() => {
    async function fetchGuitars() {
      const response = await fetch('/api/guitars');
      const data = await response.json();
      setGuitars(data);
    }

    fetchGuitars();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">List of Guitars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {guitars.map((guitar) => (
          <div key={guitar.id} className="p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{guitar.name}</h2>
            <p>Brand: {guitar.brand}</p>
            <p>Price: ${guitar.price.toFixed(2)}</p>
            <p>Likes: {guitar.likeScore}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
