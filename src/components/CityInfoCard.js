import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";

function CityInfoCard({ cityDetails, loading, error }) {

  if (Array.isArray(cityDetails) && cityDetails.length === 0 && !loading) {
    return (
      <div className="font-sans text-base mt-6 text-center">Nessun dettaglio trovato.</div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center py-6">
          <LoadingSpinner text="city info" />
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-5 w-full mx-auto shadow-xl font-work">
          <div className="mb-4 pb-3 border-b border-gray-100">
            <h1 className="text-3xl 2xl:text-5xl font-bebas tracking-wides text-gray-900 mb-1">
              {cityDetails?.name || "-"}
            </h1>
            <div className="text-amber-600 font-medium flex items-center gap-2 country text-md 2xl:text-lg">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="inline-block h-5 w-5 2xl:h-6 2xl:w-6">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
              {cityDetails?.country || "-"}
            </div>
          </div>
          <div className="grid gap-3 info-grid">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
              <div className="icon w-8 h-8 2xl:w-9 2xl:h-9 rounded flex items-center justify-center bg-linear-to-br from-amber-700 to-amber-500">
                <svg viewBox="0 0 24 24" 
                  className="w-4 h-4 2xl:w-5 2xl:h-5" 
                  stroke="white" 
                  fill="none" 
                  strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-xs 2xl:text-md text-gray-500 font-semibold uppercase mb-0.5">Population</div>
                <div className="text-sm 2xl:text-lg text-gray-900 font-medium">
                  {cityDetails?.population !== "Unknown" && !isNaN(Number(cityDetails?.population))
                    ? Number(cityDetails?.population).toLocaleString()
                    : cityDetails?.population || "-"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
              <div className="icon w-8 h-8 2xl:w-9 2xl:h-9 rounded flex items-center justify-center bg-linear-to-br from-amber-700 to-amber-500">
                <svg viewBox="0 0 24 24" className="w-4 h-4 2xl:w-5 2xl:h-5" stroke="white" fill="none" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-xs 2xl:text-md text-gray-500 font-semibold uppercase mb-0.5">Region</div>
                <div className="text-sm 2xl:text-lg text-gray-900 font-medium">{cityDetails?.region || "-"}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
              <div className="icon w-8 h-8 2xl:w-9 2xl:h-9 rounded flex items-center justify-center bg-linear-to-br from-amber-700 to-amber-500">
                <svg viewBox="0 0 24 24" className="w-4 h-4 2xl:w-5 2xl:h-5" stroke="white" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-xs 2xl:text-md text-gray-500 font-semibold uppercase mb-0.5">Timezone</div>
                <div className="text-sm 2xl:text-lg text-gray-900 font-medium">
                  {cityDetails?.timezone !== "Unknown"
                    ? cityDetails?.timezone?.replace("__", "/") || "-"
                    : cityDetails?.timezone || "-"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
              <div className="icon w-8 h-8 2xl:w-9 2xl:h-9 rounded flex items-center justify-center bg-linear-to-br from-amber-700 to-amber-500">
                <svg viewBox="0 0 24 24" className="w-4 h-4 2xl:w-5 2xl:h-5" stroke="white" fill="none" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-xs 2xl:text-md text-gray-500 font-semibold uppercase mb-0.5">Elevation</div>
                <div className="text-sm 2xl:text-lg text-gray-900 font-medium">
                  {cityDetails?.elevationMeters !== undefined && cityDetails?.elevationMeters !== "Unknown"
                    ? `${cityDetails?.elevationMeters} m`
                    : (cityDetails?.elevationMeters === "Unknown" ? "Sconosciuta" : "-")}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
              <div className="icon w-8 h-8 2xl:w-9 2xl:h-9 rounded flex items-center justify-center bg-linear-to-br from-amber-700 to-amber-500">
                <svg viewBox="0 0 24 24" className="w-4 h-4 2xl:w-5 2xl:h-5" stroke="white" fill="none" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-xs 2xl:text-md text-gray-500 font-semibold uppercase mb-0.5">Coordinates</div>
                <div className="text-sm 2xl:text-lg text-gray-900 font-medium">{cityDetails?.latitude || "-"}, {cityDetails?.longitude || "-"}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

CityInfoCard.propTypes = {
  cityDetails: PropTypes.shape({
    name: PropTypes.string,
    region: PropTypes.string,
    country: PropTypes.string,
    population: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    elevationMeters: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    timezone: PropTypes.string,
    latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  loading: PropTypes.bool,
  error: PropTypes.any,
};

CityInfoCard.defaultProps = {
  cityDetails: {},
  loading: false,
  error: null,
};

export default CityInfoCard;