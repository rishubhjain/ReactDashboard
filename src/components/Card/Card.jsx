import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'

function Card({ title}) {
  return (
    <CCard>
      <CCardHeader>
           {title}

           <button style={{float:'right'}} >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                <path fill='none' d='M0 0h24v24H0z' />
                <path d='M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z' />
              </svg>
          </button>
      </CCardHeader>
      <CCardBody></CCardBody>
    </CCard>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
}

export default Card