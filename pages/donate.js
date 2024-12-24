import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'    
import Image from 'next/image'
import Link from 'next/link'    

function donate() {
  return (
    <>
    <Header />
    <div className="center_team"></div>
    {/* Donation Section */}
    <section id="donation">
        <div className="donation_m bg_back pt-5 pb-5">
          <div className="container-xl">
            <div className="donation_1 row">
              <div className="col-md-5">
                <div className="donation_1l bg-white p-5">
                  <h4 className="text-center">Support Us</h4>
                  <p className="font_15 mt-3 mb-4 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisl, tempus ut sem a
                  </p>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button className="btn btn-primary bg_blue rounded-0 p-4 fs-3 border-0" type="button">
                        <i className="fa fa-dollar"></i>
                      </button>
                    </span>
                    <input type="text" className="form-control rounded-0 border_1 fw-bold px-5 font_50" placeholder="100.00" />
                  </div>
                  <ul className="mb-0 tags_blog mt-3">
                    <li className="d-inline-block"><Link href="blog_detail.html">100,00 $</Link></li>
                    <li className="d-inline-block"><Link href="blog_detail.html">150,00 $</Link></li>
                    <li className="d-inline-block"><Link href="blog_detail.html">200,00 $</Link></li>
                    <li className="d-inline-block"><Link href="blog_detail.html">Custom</Link></li>
                  </ul>
                  <h6 className="mb-0 mt-4">
                    <Link className="button_2 d-block text-center" href="#">Donate Now</Link>
                  </h6>
                </div>
              </div>
              <div className="col-md-7">
                <div className="donation_1r text-start mt-5">
                  <h1 className="text-white font_60 lh-base">10 Surgeons<br />21 Healed</h1>
                  <h5 className="mb-0 text-light mt-4">[ New professionals every year ]</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default donate
