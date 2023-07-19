import React from 'react'

import PropTypes from 'prop-types'

const Mark = (props) => {
  return (
    <>
      <div className="mark-mark">
        <div className="mark-icon">
          <svg viewBox="0 0 1024 1024" className="mark-icon1">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <p className="mark-label c-16-600">{props.Label}</p>
      </div>
      <style jsx>
        {`
          .mark-mark {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mark-icon {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            border-radius: 50%;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-anahat-500);
          }
          .mark-icon1 {
            fill: var(--dl-color-success-birincil);
            width: 12px;
            height: 12px;
          }
          .mark-label {
            color: var(--dl-color-anahat-white);
          }
        `}
      </style>
    </>
  )
}

Mark.defaultProps = {
  Label: 'merhaba',
}

Mark.propTypes = {
  Label: PropTypes.string,
}

export default Mark
