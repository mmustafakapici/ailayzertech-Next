import React from 'react'

import PropTypes from 'prop-types'

const Feature = (props) => {
  return (
    <>
      <div className={`feature-feature ${props.rootClassName} `}>
        <img
          alt={props.Thumbnail_alt}
          src={props.Thumbnail}
          className="feature-image"
        />
        <div className="feature-content">
          <span className="feature-title c-20-500">{props.Title}</span>
          <span className="feature-description c-14-400">
            {props.Description}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-feature {
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
          .feature-feature:hover {
            border-color: #ade2df;
          }
          .feature-image {
            height: 32px;
            display: none;
            object-fit: cover;
          }
          .feature-content {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-title {
            color: var(--dl-color-anahat-white);
            font-style: normal;
          }
          .feature-description {
            color: var(--dl-color-anahat-900);
          }
          @media (max-width: 767px) {
            .feature-feature {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 100%;
            }
            .feature-content {
              gap: var(--dl-space-space-halfunit);
            }
            .feature-title {
              font-size: 18px;
              line-height: 27px;
            }
            .feature-description {
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .feature-feature {
              padding-top: 0px;
              padding-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Feature.defaultProps = {
  Thumbnail_alt: 'image',
  Title: 'Title_value',
  Description: 'description_value',
  Thumbnail: '/external/vector.svg',
  rootClassName: '',
}

Feature.propTypes = {
  Thumbnail_alt: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Thumbnail: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Feature
