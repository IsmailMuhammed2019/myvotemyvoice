import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Link from 'next/link'


function register() {
  return (
    <>
    <Header />
        {/* Center Section */}
      <section id="center" className="center_reg">
        <div className="center_om bg_backn1">
          <div className="container-xl">
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
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <div className="login_1 p-4 m-auto">
                <h3 className="col_red">Register</h3>
                <p className="center_sm">Create your account</p>
                <h6 className="mt-4">Full Name</h6>
                <input type="text" className="form-control" placeholder="Your Name" />
                <h6 className="mt-4">Email Address</h6>
                <input type="email" className="form-control" placeholder="Your Email" />
                <h6 className="mt-4">Password</h6>
                <input type="password" className="form-control" placeholder="Your Password" />
                <div className="d-flex justify-content-between mt-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                      I agree with the <Link className="col_red" href="#">Terms Of Service</Link>
                    </label>
                  </div>
                </div>
                <h6 className="mt-4 mb-0 center_sm">
                  <Link className="button" href="#">Register <i className="fa fa-location-arrow ms-1"></i></Link>
                </h6>
                <p className="mt-4 mb-0">Already have an account? <Link className="col_red" href="login.html">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default register
