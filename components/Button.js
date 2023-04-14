import Link from "next/link";

const Button = ({ type = "bg-primary-400", text, icon, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center rounded-lg py-3 px-6 text-center text-base font-medium hover:bg-opacity-90 transition-all ease-in delay-0 duration-300 ${type} `}
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {text}
    </Link>
  );
};

export default Button;
