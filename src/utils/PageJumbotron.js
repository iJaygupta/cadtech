import React from 'react'
import { Link } from 'react-router-dom'

const PageJumbotron = (props) => {
  return (
    <section className="bg-cover bg-position mb-4" className="page-jumbotron" >
      <div className="dark-overlay dark-overlay-lighter py-5">
        <div className="overlay-content">
          <div className="container text-center py-5">
            <h1 className="text-white">{props.headerTitle}</h1>
            <nav className="d-flex justify-content-center" aria-label="breadcrumb">
              <ol className="breadcrumb bg-none mb-0" style={{ background: 'none' }}>
                <li className="breadcrumb-item"><Link to="/home" style={{ color: 'red' }}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: 'white' }}>{props.headerTitle}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageJumbotron