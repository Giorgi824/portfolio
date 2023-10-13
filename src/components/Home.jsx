import { MdKeyboardArrowRight } from "react-icons/md";
import BtnBlue from "./BtnBlue";
import { Link } from "react-scroll";
function Home() {
  return (
    <div
      name="home"
      className="flex h-screen min-h-screen  w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hi, I'm Giorgi Gonadze. A passionate Front-end Web Developer based
            in Tbilisi, Georgia.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}>
              <BtnBlue>
                Portfolio
                <span className="group-hover:rotate-90 duration-300 origin-center">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </BtnBlue>
            </Link>
          </div>
        </div>
        <div className="image-div"></div>
      </div>
    </div>
  );
}

export default Home;
