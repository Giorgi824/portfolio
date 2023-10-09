function BtnPortfolio({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="duration-200  absolute top-0 left-0 w-full h-full opacity-30 bg-black flex justify-center items-center z-10 hover:bg-transparent"
    ></a>
  );
}

export default BtnPortfolio;
