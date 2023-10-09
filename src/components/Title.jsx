function Title({ par1, par2 }) {
  return (
    <div>
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        {par1}
      </p>
      {par2 && <p className="py-6">{par2}</p>}
    </div>
  );
}

export default Title;
