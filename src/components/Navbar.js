import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        
        <div id="preloader">
          <div className="preloader">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div> 
        {/*
  End Preloader
  ==================================== */}
        {/*
Fixed Navigation
==================================== */}
        <header className="navigation fixed-top">
          <div className="container">
            {/* main nav */}
            <nav className="navbar navbar-expand-lg navbar-light">
              {/* logo */}
              <a className="navbar-brand logo" href="index.html">
                <img className="logo-default" src="images/logo.png" alt="logo" />
                <img className="logo-white" src="images/logo-white.png" alt="logo" />
              </a>
              {/* /logo */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto text-center">
                  <li className="nav-item dropdown active">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Homepage
                    </Link>
                   
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/serve">SER</Link>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="team.html">Team</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="pricing.html">Pricing</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pages
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="404.html">404 Page</a>
                      <a className="dropdown-item" href="blog.html">Blog Page</a>
                      <a className="dropdown-item" href="single-post.html">Blog Single Page</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            {/* /main nav */}
          </div>
        </header>
        {/*
End Fixed Navigation
==================================== */}

    </div>
  )
}

export default Navbar