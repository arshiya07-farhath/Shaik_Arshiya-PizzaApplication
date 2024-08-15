import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav  class="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
        <div className="container-fluid" colour="yellow">
          <Link className="navbar-brand" href="">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-logo-design-template-56caf4f5ac2bf2f93f6134e1cf516a0d_screen.jpg?ts=1618677930"
              alt=""
              width="80px"
              height="80px"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourmenu">
                  {" "}
                  Our Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {""}
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
