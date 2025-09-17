// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-400 text-white font-bold w-20 h-20 rounded-full border-b-4 border-red-700 hover:border-red-500 text-4xl"
    >
      {children}
    </button>
  );
};

export default Button;
