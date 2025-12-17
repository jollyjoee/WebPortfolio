function Card({ title, className }) {
  return (
    <div className={`
        mx-auto my-auto flex h-80 min-w-64 flex-col items-center justify-center bg-[#3b8ebe] p-4 rounded-xl shadow-2xl ${className}
        `}>{title}</div>
  );
}

export default Card;
