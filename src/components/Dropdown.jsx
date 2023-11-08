import { useState } from "react";
import { ArrowIcon } from "./Icon";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    {
      id: 1,
      text: "electronics",
    },
    {
      id: 2,
      text: "jewelery",
    },
    {
      id: 3,
      text: "men's clothing",
    },
    {
      id: 4,
      text: "women's clothing",
    },
  ];

  return (
    <div className="relative flex flex-col items-center">
      <button className="text-left bg-transparent ml-4" onClick={handleClick}>
        <span>Categories</span>
        <ArrowIcon
          className={`w-8 h-8 pr-2 cursor-pointer inline-block ${
            isOpen && "rotate-180"
          } transition-all duration-300`}
        />
      </button>
      <ul
        className={`${
          isOpen ? "max-h-60 py-4" : "max-h-0 py-0 "
        } absolute max-md:static w-max bg-[var(--background-color)] text-base z-50 rounded shadow max-md:my-0 mt-12 transition-all text-center duration-500 overflow-hidden`}
      >
        {dropdownItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:bg-[var(--card-background-color)] px-4 py-2 "
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
