import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <section className={`card-card ${props.rootClassName} `}>
        <div className="card-icon">
          <img alt={props.IconAlt} src={props.Icon} className="card-icon1" />
        </div>
        <main className="card-content">
          <h1 className="card-header h3-24-600">{props.Header}</h1>
          <p className="card-description c-16-400">{props.Description}</p>
        </main>
      </section>
      <style jsx>
        {`
          .card-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-anahat-500);
          }
          .card-icon {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            aspect-ratio: 1;
            border-radius: 50%;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-success-birincil);
          }
          .card-icon1 {
            height: 30px;
            object-fit: cover;
          }
          .card-content {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .card-header {
            color: var(--dl-color-anahat-white);
          }
          .card-description {
            color: var(--dl-color-anahat-900);
          }

          @media (max-width: 991px) {
            .card-root-class-name {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name2 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name3 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name4 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name5 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name6 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name7 {
              flex: 0 0 auto;
              width: 100%;
            }
            .card-root-class-name8 {
              flex: 0 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  Icon: '/Icons/group%201316-200w.png',
  IconAlt: 'image',
  Header: 'Sima Mosbacher',
}

Card.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Icon: PropTypes.string,
  IconAlt: PropTypes.string,
  Header: PropTypes.string,
}

export default Card
