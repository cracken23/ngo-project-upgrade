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
    <div  className={`newbtn-container ${props.rootClassName}  `}>
      <button onClick={()=>handleRedirect(props.onClick)} type={props.buttonType} className="tw-text-white newbtn-button button hover:-tw-translate-y-2 hover:tw-rounded-lg hover:tw-bg-[#7d230d] focus:tw-bg-gray-300">
       <p className="tw-text-white">{props.button1}</p> 
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
