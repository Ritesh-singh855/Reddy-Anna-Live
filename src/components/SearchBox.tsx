import React from 'react';
import { Search } from 'lucide-react';

const SearchBox = () => {
  return (
    <div className="relative w-full max-w-md mx-auto mt-8 mb-10">
      <input
        type="text"
        placeholder="Search our site..."
        className="w-full p-3 pl-10 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBox;
