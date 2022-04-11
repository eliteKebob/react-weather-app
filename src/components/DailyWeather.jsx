const DailyWeather = (weather) => {
  return (
    <div className="singleDaily">
      <div className="singleDesc">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather?.weather[0].icon}.png`}
          alt=""
        />
        <div className="singleTemp">
          <p
            style={{ color: "#eb5424", fontWeight: "700", fontSize: "1.5rem" }}
          >
            {Math.round(weather.weather?.temp.morn)}{" "}
            <span
              style={{
                color: "#d0d2d3",
                fontWeight: "300",
                fontSize: "0.75rem",
              }}
            >
              &deg;C
            </span>
          </p>
          <p
            style={{ color: "#eb5424", fontWeight: "700", fontSize: "0.75rem" }}
          >
            {Math.round(weather.weather?.feels_like.morn)}{" "}
            <span
              style={{
                color: "#d0d2d3",
                fontWeight: "300",
                fontSize: "0.75rem",
              }}
            >
              &deg;C
            </span>
          </p>
        </div>
      </div>
      <div className="singleDate">
        <p style={{ fontWeight: "300" }}>
          {new Date(weather.weather?.dt * 1000).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
export default DailyWeather
