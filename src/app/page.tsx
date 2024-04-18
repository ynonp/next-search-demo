"use client";

import { search } from './data/search';
import {FormEvent, useState} from 'react';

export default function Home() {
  const [options, setOptions] = useState<Array<string>>([]);

  async function handleInput(ev: FormEvent<HTMLInputElement>) {
    if (ev.target) {
      const input = ev.target as HTMLInputElement;
      const text = input.value;
      const options = await search(text);
      setOptions(options);
    }
  } 

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Next.JS Search Example</h1>      
      <input 
        type="search"
        className="w-1/2 text-gray-800 px-4 py-2 mt-2 text-xl rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        onInput={handleInput}
        placeholder="Search..." />
        <div className='relative w-1/2'>
          <ul className="absolute w-full bg-white rounded-lg shadow-lg z-10">
            {options.map((opt, index) => (
              <li key={index}
                className="text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">{opt}</li>
            ))}
          </ul>
        </div>
    </main>
  );
}
