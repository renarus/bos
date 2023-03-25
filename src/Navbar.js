import React from 'react'
import { Link} from 'react-router-dom';
import useThemeSwitcher from './UseThemeSwicther';
const Navbar = () => {
  const ThemeSwitcher=useThemeSwitcher();
  
  return (
    <div>
          {/* <Posts/> */}
      <nav className="navbar navbar-expand-lg  nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link to='/' className="nav-link" href="#">Users</Link>
            </li>
            <li className="nav-item active">
              <Link to='/posts' className="nav-link" href="#">Posts <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to='/comments' className="nav-link" href="#">Comments</Link>
            </li>

            {ThemeSwitcher}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar