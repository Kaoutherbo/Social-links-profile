import React from "react";

export default function CustomBtn({ link, linkName}) {
  return (
    <button className="text-gray-300 rounded-lg h-11 w-full bg-grey hover:bg-primary hover:text-grey duration-300 mb-4">
      <a href={link}>{linkName}</a>
    </button>
  );
}
