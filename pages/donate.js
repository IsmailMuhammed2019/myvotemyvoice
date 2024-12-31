import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'    
import Image from 'next/image'
import Link from 'next/link'    

function Donate() {
  return (
    <>
    <Header />
    <section id="donation" className="p_3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12">
              <div className="donation_1l bg-white p-4" style={{ borderRadius: '10px' }}>
                <h4 className="text-center">Support Us</h4>
                <p className="font_15 mt-3 mb-4 text-center">
                  Your contributions play a vital role in helping us provide essential services and support to those in need. Every donation, no matter the size, makes a difference in our community and helps us continue our mission to promote civic engagement and education.
                </p>
                <div className="input-group mb-3">
                  <span className="input-group-btn">
                    <button className="btn btn-primary bg_blue rounded-0 p-4 fs-3 border-0" type="button" style={{ borderRadius: '10px' }}>
                      <i className="fa fa-dollar"></i>
                    </button>
                  </span>
                  <input type="text" className="form-control rounded-0 border_1 fw-bold px-5 font_50" placeholder="100.00" style={{ borderRadius: '10px' }} />
                </div>
                <ul className="mb-0 tags_blog mt-3 text-center">
                  <li className="d-inline-block">100.00 $</li>
                  <li className="d-inline-block">150.00 $</li>
                  <li className="d-inline-block">200.00 $</li>
                  <li className="d-inline-block">Custom</li>
                </ul>
                <h6 className="mb-0 mt-4 text-center">
                  <Link className="button_2 d-block" href="#" style={{ borderRadius: '10px' }}>Donate Now</Link>
                </h6>
              </div>
            </div>
            <div className="col-md-7 col-12 text-center">
              <div className="donation_1r mt-5">
                <h1 className="text-white font_60 lh-base">10 Surgeons<br />21 Healed</h1>
                <h5 className="mb-0 text-light mt-4">[ New professionals every year ]</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default Donate
