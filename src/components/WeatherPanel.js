import LoadingSpinner from "./LoadingSpinner";

function WeatherPanel({ weather, forecast, loading }) {
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center py-8">
            <LoadingSpinner text="weather" />
        </div>
      ) : (
        <>
          {weather && (
            <div className="px-6 mt-3 mb-3 py-2 flex flex-col items-center">
              <div className="flex items-center gap-3">
                {weather.weather && weather.weather[0] && (
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon.replace(/n$/, "d")}@2x.png`}
                    alt={weather.weather[0].description}
                    className="w-22 h-22"
                  />
                )}
                <div>
                  <div className="text-5xl font-medium text-gray-900 font-work">
                    {Math.round(weather.main.temp)}°
                  </div>
                  <div className="text-gray-900 capitalize font-work text-xl">
                    {weather.weather[0].description}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-7 text-md text-gray-700 font-work">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f">
                    <path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z"/>
                  </svg>
                  {weather.main.humidity}%
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f">
                    <path d="M460-160q-32 0-59.5-16T356-220q-11-20-.5-40t32.5-20q13 0 23 8t18 18q5 7 13.5 10.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h340q50 0 85 35t35 85q0 50-35 85t-85 35ZM120-560q-17 0-28.5-11.5T80-600q0-17 11.5-28.5T120-640h500q25 0 42.5-17.5T680-700q0-25-17.5-42.5T620-760q-16 0-30 7.5T568-731q-7 12-17 21.5t-24 9.5q-20 0-32.5-15t-6.5-32q14-42 50.5-67.5T620-840q58 0 99 41t41 99q0 58-41 99t-99 41H120Zm678 308q-20 9-39-2.5T740-288q0-14 9.5-23.5T771-328q14-8 21.5-22t7.5-30q0-25-17.5-42.5T740-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h620q58 0 99 41t41 99q0 42-22 76.5T798-252Z"/>
                  </svg>
                  {weather.wind.speed} m/s
                </div>
              </div>
            </div>
          )}
          {forecast && forecast.length > 0 && (
            <div className="px-2 pt-2 mb-4">
              <div className="grid grid-cols-5 gap-3">
                {forecast.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center justify-between px-2 py-3 min-w-0"
                  >
                    {idx !== forecast.length - 1 && (
                      <div className="absolute right-0 top-6 h-30 w-px bg-gray-600"></div>
                    )}
                    <div className="text-lg text-gray-800 font-work mb-2">
                      {item.dt_txt.slice(11, 16)}
                    </div>
                    {item.weather && item.weather[0] && (
                      <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon.replace(/n$/, "d")}@2x.png`}
                        alt={item.weather[0].description}
                        className="w-14 h-14"
                      />
                    )}
                    <div className="text-2xl font-medium text-gray-800 font-work">
                      {Math.round(item.main.temp)}°
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default WeatherPanel;