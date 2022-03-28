import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  className,
  color = "primary",
  onClick,
  disabled,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${color} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
