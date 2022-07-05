import React from 'react'

import './Card.css'

function Card({msg}) {
  return (
	<div className='card-container'>
		<p>
          <b>First Name: </b> {msg.first_name}
        </p>
        <p>
          <b>Last Name: </b> {msg.last_name}
        </p>
        <p>
          <b>Email: </b> {msg.email}
        </p>
        <p>
          <b>Zip Code: </b> {msg.zip_code}
        </p>
        <p>
          <b>Phone #: </b> {msg.phone_number}
        </p>
        <p>
          <b>Message: </b> {msg.message}
        </p>
        <p>
          <b>Spa?: </b> {msg.spa ? 'Yes': "No" }
        </p>
	</div>
  )
}

export default Card