import Weather from "../components/Weather"

const Landing = () => {
  return (
    <div className="content">
      <div className="head">
        <h1>Hoşgeldiniz</h1>
        <h4>Geçerli Hava Durumu Bilgileri</h4>
      </div>
      <div className="weather">
        <Weather />
      </div>
    </div>
  )
}
export default Landing
