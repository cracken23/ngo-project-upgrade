
import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import './Styles/newbtn.css'

const Newbtn = (props) => {
  const history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };
  
  return (
    <div className={`newbtn-container ${props.rootClassName}`}>
      <button 
        onClick={() => handleRedirect(props.onClick)} 
        type={props.buttonType} 
        className="newbtn-button button tw-bg-transparent tw-text-neutral-dark tw-font-medium tw-border-none tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-[#f0f0f0] hover:tw-scale-105 tw-duration-300 tw-transition-all"
      >
        <span className="tw-relative">
          {props.button1}
          <span className="tw-absolute tw-bottom-0 tw-left-0 tw-w-0 tw-h-0.5 tw-bg-[#4CCD99] tw-transition-all tw-duration-300 group-hover:tw-w-full"></span>
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
