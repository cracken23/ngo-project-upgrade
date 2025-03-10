import React from 'react'

import PropTypes from 'prop-types'

import './Styles/contacttemp.css'

const Contacttemp = (props) => {
  return (
    <div className={`contacttemp-container ${props.rootClassName} `}>
      <div className="contacttemp-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contacttemp-image"
        />
      </div>
      <div className="contacttemp-container2">
        <div className="contacttemp-container3">
          <h1 className="contacttemp-text">{props.heading}</h1>
          <span className="contacttemp-text01">{props.text}</span>
        </div>
        <div className="contacttemp-container4">
          <h1 className="contacttemp-text02">{props.heading1}</h1>
          <span className="contacttemp-text03">{props.text1}</span>
        </div>
        <div className="contacttemp-container5">
          <h1 className="contacttemp-text04">
            <span>Mail</span>
            <br></br>
          </h1>
          <span className="contacttemp-text07">{props.text2}</span>
        </div>
        <div className="contacttemp-container6">
          <h1 className="contacttemp-text08">
            <span>Call us</span>
            <br></br>
          </h1>
          <span className="contacttemp-text11">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

Contacttemp.defaultProps = {
  heading1: 'Address',
  rootClassName: '',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.',
  imageAlt: 'image',
  heading: 'Contact Us',
  text2:
    'Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.',
  text1:
    'Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.',
  text3:
    'Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.',
}

Contacttemp.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default Contacttemp
