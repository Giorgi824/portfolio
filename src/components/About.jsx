import Title from "./Title";

function About() {
  return (
    <div
      name="about"
      className="w-full flex justify-center items-center min-h-screen py-10 md:py-0 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Title par1={"About"} />
        <p className="text-xl mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          maiores reiciendis delectus quo aperiam. Sint saepe eos quod assumenda
          natus qui aut animi ut? Molestiae incidunt, earum aliquam officiis
          fuga quod eaque neque labore libero quam ducimus maxime, sed
          recusandae explicabo aperiam hic similique porro. Ducimus corrupti
          magni illum sit?
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure
          excepturi eius, temporibus eligendi veniam, consequuntur facilis
          perferendis dignissimos ab debitis consectetur explicabo hic tempore
          modi unde. Necessitatibus a doloremque harum repudiandae veritatis
          animi sed, eaque nisi iste quo officiis! Vitae nemo repellat officia
          laboriosam excepturi iste iusto, ducimus eos.
        </p>
      </div>
    </div>
  );
}

export default About;
