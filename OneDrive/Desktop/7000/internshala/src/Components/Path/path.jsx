import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './path.scss'
const Path = () => {
  return (
    <div className="path">
      <div className="path">
        <p style={{ color: 'blue' }}>Patient List</p>
        <span className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <p>Diane Cooper</p>
      </div>
      <div className="features">
      <span className='icon'><FontAwesomeIcon icon={faPrint}/></span>
      <div className=''
      </div>
    </div>
  )
}

export { Path }
