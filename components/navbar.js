import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar-navbar ${props.rootClassName} `}>
        <div className="navbar-branding-logo">
          <Link href="/">
            <a className="navbar-link logo-24-700">{props.BrandingLOGO}</a>
          </Link>
        </div>
        <div className="navbar-nav-content">
          <div className="navbar-nav-links">
            <a href="#Features" className="navbar-link1 c-16-400">
              Features
            </a>
            <a href="#WhatIs" className="navbar-link2 c-16-400">
              Why us
            </a>
            <a href="#join" className="navbar-link3">
              Join
            </a>
            <a
              href="https://tally.so/r/31kXN4"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-link4"
            >
              Apply
            </a>
          </div>
          <div className="navbar-get-started get-started">
            <span className="navbar-text c-16-400">Coming Soon</span>
          </div>
          <div id="open-mobile-menu" className="navbar-hamburger get-started">
            <img
              alt="image"
              src="/Icons/hamburger-200h.png"
              className="navbar-image"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img className="navbar-image1" />
            <div id="close-mobile-menu" className="navbar-container">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links1">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="navbar-text1">Get started</span>
          </div>
        </div>
        <div className="navbar-div">
          <React.Fragment>
            <Script>{`
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
`}</Script>
          </React.Fragment>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: 1200px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .navbar-branding-logo {
            width: 118px;
            height: 24px;
            display: flex;
          }
          .navbar-link {
            color: var(--dl-color-anahat-white);
            text-decoration: none;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-nav-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            border-color: transparent;
          }
          .navbar-link1 {
            color: var(--dl-color-anahat-white);
            text-decoration: none;
          }
          .navbar-link2 {
            color: var(--dl-color-anahat-white);
            text-decoration: none;
          }
          .navbar-link3 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
            text-decoration: none;
          }
          .navbar-link4 {
            color: var(--dl-color-anahat-white);
            font-size: 16px;
            font-family: Exo;
            font-weight: 400;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar-get-started {
            background-color: var(--dl-color-anahat-500);
          }
          .navbar-text {
            color: var(--dl-color-anahat-white);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-stretch: normal;
          }
          .navbar-hamburger {
            display: none;
          }
          .navbar-image {
            width: 100px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image1 {
            width: 100px;
            filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon {
            width: 24px;
            height: 24px;
          }
          .navbar-nav-links1 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-anahat-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-text1 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-div {
            display: contents;
          }

          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .navbar-branding-logo {
              width: 80px;
            }
            .navbar-nav-links {
              display: none;
            }
            .navbar-get-started {
              display: none;
            }
            .navbar-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-image {
              width: 16px;
              height: 14px;
            }
            .navbar-branding {
              width: 100%;
            }
            .navbar-nav-links1 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  BrandingLOGO: 'AILAYZER',
  rootClassName: '',
}

Navbar.propTypes = {
  BrandingLOGO: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
