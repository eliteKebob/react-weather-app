import { usePosition } from "use-position"
import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { BiErrorAlt } from "react-icons/bi"
import { MdLocationPin } from "react-icons/md"
import DailyWeather from "./DailyWeather"

const Weather = () => {
  const watch = true
  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  })

  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=tr`
      )
      if (response.data) {
        setWeatherData(response.data)
        console.log(response.data)
        setLoading(false)
      } else {
        toast.dark("Hava durumu bilgilerine ulaşırken bir problem oluştu")
      }
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line
  }, [latitude, longitude])

  if (!latitude && !longitude && loading)
    return (
      <>
        <h1>
          <BiErrorAlt fill="red" /> <span style={{ color: "red" }}>Hata: </span>
          Konum Devre Dışı
        </h1>
        <h4>
          Hava durumunu görüntülemek için konum bilgilerine ihtiyacımız var.
        </h4>
      </>
    )

  return (
    <div className="weatherContent">
      <div className="location">
        <p>
          <MdLocationPin /> {weatherData.timezone}
        </p>
      </div>
      <div className="weatherSection">
        <div className="currentWeather">
          <div className="weatherDesc">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}@4x.png`}
              alt=""
            />
            <p style={{ color: "#eb5424", fontWeight: "700" }}>
              {" "}
              {weatherData.current?.weather[0].description}{" "}
            </p>
            <p style={{ fontWeight: "300" }}>
              {" "}
              {new Date(weatherData.current?.dt * 1000).toLocaleString()}{" "}
            </p>
          </div>
          <div className="temp">
            <h2>
              {Math.round(weatherData.current?.temp)} <span>&deg;C</span>
            </h2>
            <h5>
              <span>Hissedilen: </span>{" "}
              {Math.round(weatherData.current?.feels_like)} <span>&deg;C</span>
            </h5>
          </div>
          <div className="currInfo">
            <p> {weatherData.current?.humidity}% Nem</p>
            <p> {weatherData.current?.clouds}% Yağış</p>
          </div>
        </div>
        <div className="dailyWeather">
          {weatherData.daily?.map((weather, idx) => (
            <DailyWeather weather={weather} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Weather
