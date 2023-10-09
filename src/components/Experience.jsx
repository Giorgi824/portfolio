import Title from "./Title";
import { techs } from "./experienceData";
function Experience() {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <Title
          par1={"Experience"}
          par2={"These are technologies I've worked with"}
        />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center shadow-md hover:shadow-lg hover:shadow-white duration-500 p-4 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className={`w-20 mx-auto ${title === "GitHub" ? "invert" : ""}`}
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
