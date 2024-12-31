import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Link from 'next/link'


function Register() {
  return (
    <>
    <Header />
        {/* Center Section */}
      <section id="center" className="center_reg">
        <div className="center_om bg_backn1">
          <div className="container-fluid">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">Register</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> Register
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="login" className="p_3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="login_1 p-4 mx-auto" style={{ borderRadius: '10px', backgroundColor: 'white' }}>
                <h3 className="col_red text-center">Register</h3>
                <p className="center_sm text-center">Create your account</p>
                <h6 className="mt-4">Full Name</h6>
                <input type="text" className="form-control" placeholder="Your Name" style={{ borderRadius: '10px' }} />
                <h6 className="mt-4">Email Address</h6>
                <input type="email" className="form-control" placeholder="Your Email" style={{ borderRadius: '10px' }} />
                <h6 className="mt-4">Password</h6>
                <input type="password" className="form-control" placeholder="Your Password" style={{ borderRadius: '10px' }} />
                <div className="d-flex justify-content-between mt-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                      I agree with the <Link className="col_red" href="#">Terms Of Service</Link>
                    </label>
                  </div>
                </div>
                <h6 className="mt-4 mb-0 center_sm text-center">
                  <Link className="button" href="#" style={{ borderRadius: '10px' }}>Register <i className="fa fa-location-arrow ms-1"></i></Link>
                </h6>
                <p className="mt-4 mb-0 text-center">Already have an account? <Link className="col_red" href="login.html">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default Register
