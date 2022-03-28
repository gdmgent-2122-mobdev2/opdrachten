import PropTypes from "prop-types";

// TODO style this alert
const Alert = ({ color, children }) => {
  <div className={`alert alert--${color}`}>{children}</div>;
};

Alert.propTypes = {
  color: PropTypes.oneOf(["warning", "info"]),
};

export default Alert;
