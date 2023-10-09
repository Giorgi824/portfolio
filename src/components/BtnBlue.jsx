function BtnBlue({ children }) {
  return (
    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer self-center	mt-8">
      {children}
    </button>
  );
}

export default BtnBlue;
