import React from 'react'
import {Link} from 'react-router-dom'

export const Main = () => {
  return (
    <div className="container">
      <Link to="/vendors">
        <h1>Bundles.</h1>
      </Link>
    </div>
  )
}
