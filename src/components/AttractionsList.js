import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";

function AttractionsList({ attractions, loading }) {
  return (
    <div className="flex flex-col items-left w-full">
      <h2 className="font-bebas text-3xl 2xl:text-5xl lg:pt-0 md:pt-15 sm:pt-10 pt-15">Main attraction</h2>
      {loading && (
        <div className="flex items-center mt-8">
          <LoadingSpinner text="attractions" />
        </div>
      )}
      {!loading && (
        <>
          {attractions.length > 0 ? (
            <ul className="list-disc font-work text-base sm:text-md 2xl:text-lg pl-4 sm:pl-8 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 w-full">
              {attractions.map((attr, idx) => (
                <li key={idx} className="relative">
                  <a
                    href={attr.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 relative group"
                  >
                    {attr.name}
                    <span className="absolute left-0 -bottom-1 h-1 w-0 bg-amber-500 rounded transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="font-work text-base sm:text-lg 2xl:text-md mt-8">No attractions found.</div>
          )}
        </>
      )}
    </div>
  );
}

AttractionsList.propTypes = {
  attractions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
};

AttractionsList.defaultProps = {
  attractions: [],
  loading: false,
};

export default AttractionsList;