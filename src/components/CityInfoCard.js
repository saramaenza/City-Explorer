import LoadingSpinner from "./LoadingSpinner";

function CityInfoCard({ cityDetails, loading }) {

  if (Array.isArray(cityDetails) && cityDetails.length === 0 && !loading) {
    return (
        <div className="font-work text-lg mt-8">
            No city details found.
        </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <LoadingSpinner text="city info" />
        </div>
      ) : (
        <div className="bg-yellow-200/80 shadow-xl rounded-2xl p-7 text-lg border-2 border-yellow-500">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="M120-200v-400q0-33 23.5-56.5T200-680h160v-47q0-16 6-30.5t17-25.5l40-40q23-23 57-23t57 23l40 40q11 11 17 25.5t6 30.5v207h160q33 0 56.5 23.5T840-440v240q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200Zm80 0h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>                
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="text-gray-900">{cityDetails.name}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="m574-129-214-75-186 72q-10 4-19.5 2.5T137-136q-8-5-12.5-13.5T120-169v-561q0-13 7.5-23t20.5-15l186-63q6-2 12.5-3t13.5-1q7 0 13.5 1t12.5 3l214 75 186-72q10-4 19.5-2.5T823-824q8 5 12.5 13.5T840-791v561q0 13-7.5 23T812-192l-186 63q-6 2-12.5 3t-13.5 1q-7 0-13.5-1t-12.5-3Zm-14-89v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg>                  
              <span className="font-semibold text-gray-700">Region:</span>
              <span className="text-gray-900">{cityDetails.region}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Zm306 0h134v-240H543q-14 0-25-9t-14-23l-10-48H280v240h257q14 0 25 9t14 23l10 48Zm-86-160Z"/></svg>
              <span className="font-semibold text-gray-700">Country:</span>
              <span className="text-gray-900">{cityDetails.country}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="M40-240q-17 0-28.5-11.5T0-280v-23q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H40Zm240 0q-17 0-28.5-11.5T240-280v-25q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v25q0 17-11.5 28.5T680-240H280Zm500 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v23q0 17-11.5 28.5T920-240H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
              <span className="font-semibold text-gray-700">Population:</span>
              <span className="text-gray-900">{cityDetails.population?.toLocaleString() || "?"}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="M120-240q-25 0-36-22t4-42l160-213q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l148 197h300L560-586l-68 90q-12 16-28 16.5t-28-8.5q-12-9-16-24.5t8-31.5l100-133q6-8 14.5-12t17.5-4q9 0 17.5 4t14.5 12l280 373q15 20 4 42t-36 22H120Zm340-80h300-312 68.5H460Zm-260 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>
              <span className="font-semibold text-gray-700">Elevation:</span>
              <span className="text-gray-900">{cityDetails.elevationMeters ? `${cityDetails.elevationMeters} m` : "?"}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>                  
              <span className="font-semibold text-gray-700">Timezone:</span>
              <span className="text-gray-900">{cityDetails.timezone?.replace("__", "/") || "?"}</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-2.5 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-gray-700 w-6 h-6"><path d="M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 79q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-453Zm0 80q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z"/></svg>
              <span className="font-semibold text-gray-700">Coordinates:</span>
              <span className="text-gray-900">{cityDetails.latitude}, {cityDetails.longitude}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CityInfoCard;