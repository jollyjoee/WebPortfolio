function Card({ title }) {
  return (
    <div className="mx-auto my-auto flex h-80 w-64 flex-col justify-center bg-blue-400 p-2 mb-10">
      <div className="mx-auto my-auto flex h-full w-full flex-col rounded-lg bg-black p-4" />
      <div className="text-center text-white">{title}</div>
    </div>
  );
}

export default Card;
