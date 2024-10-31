"use client";

import { useState } from "react";

export const RevalidatePathTest = () => {
  const [path, setPath] = useState("");

  const handleClick = async () => {
    console.log(`calling handleClick path=${path}`);

    await fetch(`/api/revalidate-path?path=${path}`);

    console.log(`finished handleClick path=${path}`);
  };

  return (
    <div>
      <h1>revalidatePathTest</h1>
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        revalidate path
      </button>
    </div>
  );
};
