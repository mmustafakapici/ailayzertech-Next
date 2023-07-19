import React from 'react'
import Script from 'next/script'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>ailayzer.tech</title>
          <meta property="og:title" content="ailayzer.tech" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <section id="Hero" className="home-hero">
          <div className="home-hero1">
            <div className="home-content">
              <main className="home-main">
                <header className="home-header">
                  <h1 className="home-heading h1-64-600">
                    Unleashing the Potential of Data, Embracing the Future
                  </h1>
                  <span className="home-caption">
                    Harness the power of artificial intelligence to gain
                    valuable insights, make data-driven decisions, and drive
                    success for your business.
                  </span>
                </header>
                <div className="home-buttons">
                  <div className="home-get-started button">
                    <span className="home-text c-16-500">Coming Soon</span>
                  </div>
                  <a href="#Features" className="home-link">
                    <div className="home-get-started1 button">
                      <span className="home-text01 c-16-500">
                        View features
                      </span>
                    </div>
                  </a>
                </div>
              </main>
              <div className="home-highlight">
                <div className="home-avatars">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image01 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image02 avatar"
                  />
                </div>
                <label className="home-caption1 c-16-400">
                  Loved by 10,000+ people like you.
                </label>
              </div>
            </div>
            <div className="home-container1">
              <div className="home-container2">
                <iframe
                  src="https://my.spline.design/biblicallyaccurateo-286f4450dd691581d4e72f88f7fe3ea3/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </section>
        <div id="Features" className="home-features">
          <div className="home-header1">
            <span className="home-section">FEATURES</span>
            <div className="home-heading1">
              <h2 className="home-text02 h2-40-600">
                Everything you get with AILAYZER
              </h2>
              <span className="home-text03">
                Explore Our Features: Discover the cutting-edge capabilities
                that set us apart and revolutionize the way you analyze data.
              </span>
            </div>
          </div>
          <div className="home-feature-list">
            <div className="home-feature">
              <img
                alt="image"
                src="/external/vector.svg"
                className="home-image03"
              />
              <div className="home-content01">
                <span className="home-title c-20-500">
                  Personalized Indicators
                </span>
                <span className="home-description c-14-400">
                  {' '}
                  Customize your indicators to track the specific metrics that
                  matter most to your business
                </span>
              </div>
            </div>
            <div className="home-feature1">
              <img
                alt="image"
                src="/external/vector6113-r6dl.svg"
                className="home-image04"
              />
              <div className="home-content02">
                <span className="home-title1 c-20-500">Accurate Insight</span>
                <span className="home-description1 c-14-400">
                  Make informed decisions based on accurate and reliable
                  insights generated by our advanced algorithms
                </span>
              </div>
            </div>
            <div className="home-feature2">
              <img
                alt="image"
                src="/external/vector6113-6zj.svg"
                className="home-image05"
              />
              <div className="home-content03">
                <span className="home-title2 c-20-500">
                  User-Friendly Interface:
                </span>
                <span className="home-description2 c-14-400">
                  {' '}
                  Experience a seamless and intuitive user interface that
                  simplifies the data analysis process
                </span>
              </div>
            </div>
            <div className="home-feature3">
              <img
                alt="image"
                src="/external/vector6113-lvvs.svg"
                className="home-image06"
              />
              <div className="home-content04">
                <span className="home-title3 c-20-500">
                  AI-Powered Analysis
                </span>
                <span className="home-description3 c-14-400">
                  {' '}
                  Gain a competitive edge with our AI-powered analysis tools
                </span>
              </div>
            </div>
            <div className="home-feature4">
              <img
                alt="image"
                src="/external/vector6114-cupp.svg"
                className="home-image07"
              />
              <div className="home-content05">
                <span className="home-title4 c-20-500">
                  Accurate Predictions
                </span>
                <span className="home-description4 c-14-400">
                  Benefit from precise and reliable predictions that assist you
                  in making data-driven decisions
                </span>
              </div>
            </div>
            <div className="home-feature5">
              <img
                alt="image"
                src="/external/vector6114-6m1e.svg"
                className="home-image08"
              />
              <div className="home-content06">
                <span className="home-title5 c-20-500">
                  Market Data Analysis
                </span>
                <span className="home-description5 c-14-400">
                  Uncover valuable insights from market data through our
                  AI-driven analysis tools
                </span>
              </div>
            </div>
            <div className="home-feature6">
              <img
                alt="image"
                src="/external/vector6114-yjl.svg"
                className="home-image09"
              />
              <div className="home-content07">
                <span className="home-title6 c-20-500">
                  Data-Driven Decision Making
                </span>
                <span className="home-description6 c-14-400">
                  Make data-driven decisions backed by reliable analysis,
                  enabling you to optimize your business strategies
                </span>
              </div>
            </div>
            <div className="home-feature7">
              <img
                alt="image"
                src="/external/vector6113-lvvs.svg"
                className="home-image10"
              />
              <div className="home-content08">
                <span className="home-title7 c-20-500">
                  Support and Assistance
                </span>
                <span className="home-description7 c-14-400">
                  Enjoy dedicated customer support and assistance to ensure a
                  smooth experience and maximize the benefits of AILAYZER
                </span>
              </div>
            </div>
          </div>
        </div>
        <section id="WhatIs" className="home-why-us">
          <header className="home-header2">
            <h2 className="home-text04 h2-40-600">
              Why do you need an AI-Powered analysis ?
            </h2>
            <span className="home-text05">
              Unlock the potential of AI-Powered analysis for unparalleled
              insights and success.
            </span>
          </header>
          <section className="home-note">
            <div className="home-image11">
              <div className="home-container3">
                <div className="home-container4">
                  <iframe
                    src="https://my.spline.design/chips-1428cba460ce2228ffae1c3f47aee1ca/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className="home-content09">
              <div className="home-main1">
                <div className="home-caption2">
                  <span className="home-section1 c-20-500">WHAT IS?</span>
                </div>
                <div className="home-heading2">
                  <h2 className="home-heading3 section-heading">
                    {' '}
                    AI-Powered Analysis
                  </h2>
                  <p className="home-paragraph">
                    Unleashing the Potential of Data, Embracing the Future:
                    Harness the power of artificial intelligence to gain
                    valuable insights, make data-driven decisions, and drive
                    success for your business. With AI-powered analysis, you can
                    unlock the true potential of your data, tapping into its
                    wealth of information to uncover hidden patterns, trends,
                    and opportunities. By embracing the future of technology,
                    you empower your business to stay ahead of the competition,
                    adapt to changing market dynamics, and make informed
                    decisions that lead to tangible results. Let the
                    transformative capabilities of AI guide you on a path of
                    growth, innovation, and unparalleled success.
                  </p>
                </div>
              </div>
              <div className="home-get-started2 button">
                <span className="home-text06 c-16-500">Coming Soon</span>
              </div>
            </div>
          </section>
          <section id="join" className="home-note1">
            <div className="home-image12">
              <div className="home-container5">
                <div className="home-container6">
                  <iframe
                    src="https://my.spline.design/cyberflower-2885f140b71038be1e13de9b17cb9697/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className="home-content10">
              <main className="home-main2">
                <header className="home-caption3">
                  <span className="home-section2 c-20-500">JOIN US</span>
                </header>
                <main className="home-heading4">
                  <header className="home-header3">
                    <h2 className="home-heading5 section-heading">
                      Unleash Your Coding Potential
                    </h2>
                    <p className="home-paragraph1">
                      Empower your programming journey with AILAYZER and unlock
                      limitless possibilities in the world of coding
                    </p>
                  </header>
                  <div className="home-checkmarks">
                    <div className="home-mark">
                      <div className="home-icon">
                        <svg viewBox="0 0 1024 1024" className="home-icon01">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                      </div>
                      <p className="home-label c-16-600">
                        Volunteer-based teamwork
                      </p>
                    </div>
                    <div className="home-mark1">
                      <div className="home-icon03">
                        <svg viewBox="0 0 1024 1024" className="home-icon04">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                      </div>
                      <p className="home-label1 c-16-600">
                        Flexible development and coding times
                      </p>
                    </div>
                    <div className="home-mark2">
                      <div className="home-icon06">
                        <svg viewBox="0 0 1024 1024" className="home-icon07">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                      </div>
                      <p className="home-label2 c-16-600">
                        Enjoyment of remote support
                      </p>
                    </div>
                    <div className="home-mark3">
                      <div className="home-icon09">
                        <svg viewBox="0 0 1024 1024" className="home-icon10">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                      </div>
                      <p className="home-label3 c-16-600">
                        Great prestige to add to your resume
                      </p>
                    </div>
                  </div>
                </main>
              </main>
            </div>
          </section>
        </section>
        <section id="Apply" className="home-apply">
          <div className="home-cube">
            <div className="home-top side"></div>
            <div className="home-front side"></div>
            <div className="home-left side"></div>
          </div>
          <main className="home-banner">
            <div className="home-header4">
              <h2 className="home-heading6 h2-40-600">
                Apply Early for empower your programming journey with AILAYZER
              </h2>
              <p className="home-description8">Unleash Your Coding Potential</p>
            </div>
            <div className="home-buttons1">
              <a
                href="https://tally.so/r/31kXN4"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-get-started3 button">
                  <span className="home-text07">
                    <span>APPLY FOR JOIN US !</span>
                    <br></br>
                  </span>
                </div>
              </a>
              <div className="home-book-demo button">
                <span className="home-text10 c-16-500">Book a demo</span>
              </div>
            </div>
          </main>
        </section>
        <footer className="home-footer">
          <div className="home-content11">
            <main className="home-main-content">
              <div className="home-content12">
                <header className="home-main3">
                  <div className="home-header5">
                    <div className="home-branding-logo">
                      <span className="home-text11 logo-24-700">AILAYZER</span>
                    </div>
                    <span className="home-text12">
                      Unleashing the Potential of Data, Embracing the Future
                    </span>
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://www.linkedin.com/company/ailayzer/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link2"
                    >
                      <img
                        alt="image"
                        src="/Icons/linkedin-200h.png"
                        className="social"
                      />
                    </a>
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="home-instagram social"
                    />
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link3"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="home-twitter social"
                      />
                    </a>
                  </div>
                </header>
              </div>
              <section className="home-copyright">
                <span className="home-text13 c-14-400">
                  © 2023 AILAYZER. All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe">
              <main className="home-main4">
                <h1 className="home-heading7 c-20-500">
                  Subscribe to our newsletter
                </h1>
                <div className="home-input-field">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="home-textinput c-16-400 input"
                  />
                  <div className="home-buy button">
                    <span className="home-text14">-&gt;</span>
                    <span className="home-text15 c-16-500">
                      <span>Subscribe now</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </main>
              <h1 className="home-notice c-14-400">
                By subscribing to our newsletter you agree with our Terms and
                Conditions.
              </h1>
            </main>
            <section className="home-copyright1">
              <span className="home-text18">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
        <div className="home-accordion-code">
          <Script>{`
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
`}</Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .home-hero {
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            color: var(--dl-color-anahat-white);
            width: 100%;
          }
          .home-caption {
            color: var(--dl-color-anahat-900);
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-get-started {
            display: flex;
            background-color: var(--dl-color-success-birincil);
          }
          .home-text {
            color: #0c100c;
          }
          .home-link {
            display: contents;
          }
          .home-get-started1 {
            text-decoration: none;
            background-color: var(--dl-color-anahat-500);
          }
          .home-text01 {
            color: var(--dl-color-anahat-white);
          }
          .home-highlight {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-avatars {
            width: 115px;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-image {
            left: 0px;
            position: absolute;
          }
          .home-image01 {
            left: var(--dl-space-space-twounits);
            position: absolute;
            object-fit: cover;
          }
          .home-image02 {
            left: var(--dl-space-space-fourunits);
            position: absolute;
            object-fit: cover;
          }
          .home-caption1 {
            color: var(--dl-color-anahat-white);
          }
          .home-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
          }
          .home-container2 {
            display: contents;
          }
          .home-features {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-header1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-section {
            color: var(--dl-color-success-birincil);
            font-style: normal;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text02 {
            color: var(--dl-color-anahat-white);
            width: 100%;
            max-width: 400px;
          }
          .home-text03 {
            color: var(--dl-color-anahat-900);
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-feature-list {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-feature {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature:hover {
            border-color: #ade2df;
          }
          .home-image03 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content01 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description {
            color: var(--dl-color-anahat-900);
          }
          .home-feature1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature1:hover {
            border-color: #ade2df;
          }
          .home-image04 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content02 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title1 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description1 {
            color: var(--dl-color-anahat-900);
          }
          .home-feature2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature2:hover {
            border-color: #ade2df;
          }
          .home-image05 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content03 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title2 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description2 {
            color: var(--dl-color-anahat-900);
          }
          .home-feature3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature3:hover {
            border-color: #ade2df;
          }
          .home-image06 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content04 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title3 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description3 {
            color: var(--dl-color-anahat-900);
          }
          .home-feature4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature4:hover {
            border-color: #ade2df;
          }
          .home-image07 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content05 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title4 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description4 {
            color: var(--dl-color-anahat-900);
          }
          .home-feature5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature5:hover {
            border-color: #ade2df;
          }
          .home-image08 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content06 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title5 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description5 {
            color: var(--dl-color-anahat-900);
          }
          .home-feature6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature6:hover {
            border-color: #ade2df;
          }
          .home-image09 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content07 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title6 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description6 {
            color: var(--dl-color-anahat-900);
          }
          .home-feature7 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-feature7:hover {
            border-color: #ade2df;
          }
          .home-image10 {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .home-content08 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title7 {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .home-description7 {
            color: var(--dl-color-anahat-900);
          }
          .home-why-us {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-header2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text04 {
            color: var(--dl-color-anahat-white);
          }
          .home-text05 {
            color: var(--dl-color-anahat-900);
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .home-note {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image11 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container3 {
            width: 100%;
            height: 650px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container4 {
            display: contents;
          }
          .home-content09 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section1 {
            color: var(--dl-color-success-birincil);
            font-style: normal;
          }
          .home-heading2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading3 {
            color: var(--dl-color-anahat-white);
          }
          .home-paragraph {
            color: var(--dl-color-anahat-900);
          }
          .home-get-started2 {
            display: flex;
            background-color: var(--dl-color-success-birincil);
          }
          .home-text06 {
            color: var(--dl-color-anahat-black);
          }
          .home-note1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: center;
          }
          .home-image12 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container5 {
            width: 100%;
            height: 680px;
            display: flex;
          }
          .home-container6 {
            display: contents;
          }
          .home-content10 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section2 {
            color: var(--dl-color-success-birincil);
            font-style: normal;
          }
          .home-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading5 {
            color: var(--dl-color-anahat-white);
          }
          .home-paragraph1 {
            color: var(--dl-color-anahat-700);
          }
          .home-checkmarks {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-anahat-500);
          }
          .home-icon01 {
            fill: var(--dl-color-success-birincil);
            width: 12px;
            height: 12px;
          }
          .home-label {
            color: var(--dl-color-anahat-white);
          }
          .home-mark1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-anahat-500);
          }
          .home-icon04 {
            fill: var(--dl-color-success-birincil);
            width: 12px;
            height: 12px;
          }
          .home-label1 {
            color: var(--dl-color-anahat-white);
          }
          .home-mark2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon06 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-anahat-500);
          }
          .home-icon07 {
            fill: var(--dl-color-success-birincil);
            width: 12px;
            height: 12px;
          }
          .home-label2 {
            color: var(--dl-color-anahat-white);
          }
          .home-mark3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon09 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-anahat-500);
          }
          .home-icon10 {
            fill: var(--dl-color-success-birincil);
            width: 12px;
            height: 12px;
          }
          .home-label3 {
            color: var(--dl-color-anahat-white);
          }
          .home-apply {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube {
            top: 20px;
            left: 0px;
            width: 120px;
            height: 120px;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(25deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top {
            transform: translateZ(-120px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left {
            width: 120px;
            transform: translateZ(-120px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            justify-content: center;
            background-color: #292929;
          }
          .home-header4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading6 {
            color: var(--dl-color-anahat-900);
          }
          .home-description8 {
            color: var(--dl-color-anahat-white);
          }
          .home-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-link1 {
            display: contents;
          }
          .home-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: var(--dl-color-success-birincil);
          }
          .home-text07 {
            color: var(--dl-color-anahat-black);
            white-space: nowrap;
          }
          .home-book-demo {
            display: none;
            background-color: var(--dl-color-anahat-white);
          }
          .home-text10 {
            color: var(--dl-color-anahat-black);
            white-space: nowrap;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-content11 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-branding-logo {
            width: 118px;
            height: 24px;
            display: flex;
          }
          .home-text11 {
            color: var(--dl-color-anahat-white);
          }
          .home-text12 {
            color: var(--dl-color-anahat-white);
            width: 100%;
            max-width: 260px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link2 {
            display: contents;
          }
          .home-instagram {
            display: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-twitter {
            display: none;
          }
          .home-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text13 {
            color: var(--dl-color-anahat-700);
            width: 100%;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading7 {
            color: rgb(255, 255, 255);
            max-width: 275px;
            font-style: normal;
            text-align: left;
          }
          .home-input-field {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-anahat-500);
          }
          .home-textinput {
            flex: 1;
            color: var(--dl-color-anahat-white);
            height: 24px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            outline-style: none;
            background-color: var(--dl-color-anahat-500);
          }
          .home-buy {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-birincil);
          }
          .home-text14 {
            color: rgb(12, 16, 12);
            display: none;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-text15 {
            color: var(--dl-color-anahat-black);
            display: flex;
          }
          .home-notice {
            color: var(--dl-color-anahat-700);
            max-width: 400px;
            text-align: left;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text18 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-accordion-code {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              height: 1000px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero1 {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-content {
              position: relative;
              align-items: center;
            }
            .home-main {
              align-items: center;
            }
            .home-heading {
              text-align: left;
            }
            .home-caption {
              text-align: left;
            }
            .home-buttons {
              width: 100%;
            }
            .home-get-started {
              flex: 1;
            }
            .home-get-started1 {
              flex: 1;
            }
            .home-highlight {
              width: 100%;
              flex-direction: column;
            }
            .home-feature-list {
              width: 100%;
            }
            .home-text04 {
              text-align: center;
            }
            .home-banner {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-get-started3 {
              width: 100%;
            }
            .home-book-demo {
              width: 100%;
            }
            .home-content11 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright {
              display: none;
            }
            .home-copyright1 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 1000px;
            }
            .home-hero1 {
              height: 800px;
              align-self: center;
            }
            .home-content {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading {
              font-size: 40px;
            }
            .home-caption {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-get-started {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-caption1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-features {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header1 {
              gap: var(--dl-space-space-unit);
            }
            .home-text02 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text03 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-feature-list {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: column;
            }
            .home-feature {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content01 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description {
              line-height: 24px;
            }
            .home-feature1 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content02 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title1 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description1 {
              line-height: 24px;
            }
            .home-feature2 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content03 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title2 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description2 {
              line-height: 24px;
            }
            .home-feature3 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content04 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title3 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description3 {
              line-height: 24px;
            }
            .home-feature4 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content05 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title4 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description4 {
              line-height: 24px;
            }
            .home-feature5 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content06 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title5 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description5 {
              line-height: 24px;
            }
            .home-feature6 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content07 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title6 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description6 {
              line-height: 24px;
            }
            .home-feature7 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .home-content08 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-title7 {
              font-size: 18px;
              line-height: 27px;
            }
            .home-description7 {
              line-height: 24px;
            }
            .home-why-us {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text04 {
              font-size: 32px;
              text-align: center;
            }
            .home-note {
              flex-direction: column-reverse;
            }
            .home-note1 {
              flex-direction: column-reverse;
            }
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content12 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main3 {
              gap: var(--dl-space-space-twounits);
            }
            .home-branding-logo {
              width: 80px;
            }
            .home-text15 {
              color: rgb(12, 16, 12);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 1000px;
            }
            .home-hero1 {
              height: auto;
            }
            .home-content {
              max-width: auto;
            }
            .home-header {
              align-items: flex-start;
            }
            .home-heading {
              width: 100%;
              max-width: 280px;
            }
            .home-get-started1 {
              display: flex;
            }
            .home-container1 {
              height: 100%;
            }
            .home-container2 {
              flex: 1;
              width: 100%;
              height: 100%;
              align-self: center;
            }
            .home-feature {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature1 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature2 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature3 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature4 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature5 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature6 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature7 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-container5 {
              justify-content: center;
            }
            .home-textinput {
              flex: 1;
            }
            .home-text14 {
              color: rgb(12, 16, 12);
              display: flex;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
              white-space: nowrap;
            }
            .home-text15 {
              color: rgb(12, 16, 12);
              display: none;
              font-size: 24px;
              font-style: normal;
              font-family: Inter;
              font-weight: 700;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
