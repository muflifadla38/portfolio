const Button = ({ type = "bg-primary-400", text, icon, ...rest }) => {
  return (
    <a
      {...rest}
      className={`${type} inline-flex items-center justify-center rounded-lg py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90`}
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {text}
    </a>
  );
};

export default Button;
