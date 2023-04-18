import Link from "next/link";

const Button = ({ type = "bg-primary-400", text, icon, href, ...rest }) => {
  const regex = /^\/?#/;
  const isHash = regex.test(href);
  const Component = isHash ? "a" : Link;
  return (
    <Component
      href={href}
      {...rest}
      className={`inline-flex items-center justify-center rounded-lg py-2.5 px-6 text-center text-base font-medium hover:bg-opacity-90 transition-all ease-in delay-0 duration-300 ${type} `}
    >
      {icon ? <span>{icon}</span> : null}      
      {icon ? <span className="ml-2">{text}</span> : <span>{text}</span>}
    </Component>
  );
};

export default Button;
