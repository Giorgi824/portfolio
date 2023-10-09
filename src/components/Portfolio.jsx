import Title from "./Title";
import BtnPortfolio from "./BtnPortfolio";
import { portfolios } from "../components/portfolioData";

function Portfolio() {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-full">
        <Title par1={"Projects"} par2={"Check out some of my work here"} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg relative"
            >
              <span className="h-[175px] relative flex overflow-hidden">
                <img
                  src={src}
                  alt={href}
                  className={`rounded-md  absolute duration-200   max-w-full w-full object-cover h-full  ${
                    src.includes("symmetra") ? "object-center" : "object-top"
                  }`}
                />
              </span>
              <BtnPortfolio href={href} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
