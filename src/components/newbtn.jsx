
import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import './Styles/newbtn.css'

const Newbtn = (props) => {
  const history = useHistory();
  const path = props.onClick || '/';
  const isActive = window.location.pathname === path;

  const handleRedirect = (path) => {
    history.push(path);
  };
  
  return (
    <div className={`newbtn-container ${props.rootClassName}`}>
      <button 
        onClick={() => handleRedirect(path)} 
        type={props.buttonType} 
        className={`newbtn-button group tw-relative tw-bg-transparent tw-px-4 tw-py-2 tw-rounded-md tw-transition-all tw-duration-300 tw-font-medium
          ${isActive 
            ? 'tw-text-[#4CCD99] tw-font-semibold' 
            : 'tw-text-neutral-dark hover:tw-text-[#ea5507]'
          }`}
      >
        <span className="tw-relative">
          {props.button1}
          <span className={`tw-absolute tw-bottom-0 tw-left-0 tw-h-0.5 tw-bg-[#4CCD99] tw-transition-all tw-duration-300 
            ${isActive ? 'tw-w-full' : 'tw-w-0 group-hover:tw-w-full'}`}>
          </span>
        </span>
      </button>
    </div>
  )
}

Newbtn.defaultProps = {
  rootClassName: '',
  buttonType: 'button',
  button1: 'About',
}

Newbtn.propTypes = {
  rootClassName: PropTypes.string,
  buttonType: PropTypes.string,
  button1: PropTypes.string,
}

export default Newbtn
