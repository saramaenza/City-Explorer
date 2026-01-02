import PropTypes from "prop-types";

function LoadingSpinner({text}) {
  return (
    <>
    <svg className="animate-spin h-6 w-6 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    <span className="font-work text-gray-700">Loading {text}...</span>
    </>
  )
}

LoadingSpinner.propTypes = {
  text: PropTypes.string
};

LoadingSpinner.defaultProps = {
  text: ""
};

export default LoadingSpinner