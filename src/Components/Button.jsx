import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classnames(
    rest.className + " px-3 py-1.5 border flex items-center gap-[5px]",
    {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-600 bg-yellow-500 text-black": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-900": outline && warning,
      "text-red-500": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Only one of the prop can be added");
    }
  },
};

export default Button;
