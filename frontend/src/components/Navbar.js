import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-light" >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="foo" width="112" height="28" />
          </a>

          {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/home">Home</Link>
            <Link className="navbar-item"to="/products">Products</Link>
          </div>
        </div>

    
        <div className="navbar-end">
          <Link className="navbar-item" to="/logout">Log Out</Link>
          </div>
        </div>


    </nav>
  )
}

export default Navbar
