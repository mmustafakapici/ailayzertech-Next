import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <div className="component-div">
          <React.Fragment>
            <React.Fragment>
              <iframe
                data-tally-src="https://tally.so/embed/31kXN4?transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height={1000}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Ailayzer - Software Engineer"
              />
              <Script>{`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`}</Script>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            display: flex;
            position: relative;
          }
          .component-div {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
