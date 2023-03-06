// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  ;<div className="header-container">
    <div className="header-img">
      <img
        className="logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <p className="wave">Wave</p>
    </div>
    <ul className="blogs-container">
      <li>
        <Link className="headings" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="headings" to="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="headings" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
}
export default Header
