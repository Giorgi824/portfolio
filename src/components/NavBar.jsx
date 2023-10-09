import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "experience" },
  { id: 5, link: "contact" },
];

function NavBar() {
  const [nav, setNav] = useState(false);

  function handleMenu() {
    setNav((prev) => !prev);
  }

  return (
    <div className="flex z-10 justify-between items-center w-full text-white fixed h-20 bg-black px-4">
      <div>
        <h1 className="font-signature text-5xl ml-2">Portfolio</h1>
      </div>
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            id={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-300"
          >
            <Link to={link} smooth duration={300}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={handleMenu}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden hover:text-gray-300"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              id={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:text-gray-300"
            >
              <Link
                onClick={() => {
                  setNav((prev) => !prev);
                }}
                to={link}
                smooth
                duration={300}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
