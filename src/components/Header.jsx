import Logo from "../assets/logo.gif"
import { FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
      <div className="info">
        <p>Gerçek zamanlı konum bilgisi tabanlı hava durumu uygulaması</p>
      </div>
      <div className="footer">
        <a href="https://github.com/eliteKebob">
          <FaGithub />
        </a>
        <p>eliteKebob &copy; 2022</p>
      </div>
    </header>
  )
}
export default Header
