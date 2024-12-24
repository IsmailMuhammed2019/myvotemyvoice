import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/footer'   
import Image from 'next/image'
import Link from 'next/link'

function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
    <Header />

      {/* Contact Section */}
      <section id="contact" className="p_3">
        <div className="container-xl">
          <div className="row contact_1 px-5">
            <div className="col-md-4">
              <div className="contact_1l">
                <h5 className="mb-3">OUR HEADQUARTERS</h5>
                <h6><span className="fw-bold">Italy:</span> St. Semper Calling Roma</h6>
                <h6 className="mb-0"><span className="fw-bold">Belgium:</span> St. Lorem Calling Porta</h6>
                <h5 className="mb-3 mt-4">REACH US 24/7 VIA PHONE</h5>
                <h6><span className="fw-bold">Italy:</span> +(123) 456-7890</h6>
                <h6 className="mb-0"><span className="fw-bold">Belgium:</span> +(123) 456-7890</h6>
                <h5 className="mb-3 mt-4">MAIL US ANYTIME</h5>
                <h6>info@gmail.com</h6>
                <h6 className="mb-0">info@gmail.com</h6>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact_1r">
                <div className="contact_1li row">
                  <div className="col-md-6">
                    <div className="contact_1lil">
                      <div className="input-group border_1 rounded_8 p-3">
                        <input type="text" className="form-control border-0 p-0" placeholder="Your Name" />
                        <span className="input-group-btn m-0">
                          <i className="fa fa-user col_red"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact_1lil">
                      <div className="input-group border_1 rounded_8 p-3">
                        <input type="text" className="form-control border-0 p-0" placeholder="Email" />
                        <span className="input-group-btn m-0">
                          <i className="fa fa-envelope col_red"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_1li row mt-4">
                  <div className="col-md-6">
                    <div className="contact_1lil">
                      <div className="input-group border_1 rounded_8 p-3">
                        <input type="text" className="form-control border-0 p-0" placeholder="Phone" />
                        <span className="input-group-btn m-0">
                          <i className="fa fa-phone col_red"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact_1lil">
                      <div className="input-group border_1 rounded_8 p-3">
                        <input type="text" className="form-control border-0 p-0" placeholder="Subject" />
                        <span className="input-group-btn m-0">
                          <i className="fa fa-comment-o col_red"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_1li row mt-4">
                  <div className="col-md-12">
                    <div className="contact_1lil">
                      <textarea placeholder="Comment" className="form-control form_text rounded_8"></textarea>
                      <h6 className="mb-0 mt-4 center_sm">
                        <Link href="#" className="button"><i className="fa fa-check-circle me-1"></i> Submit Request </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_2 row mt-4">
            <div className="col-md-12">
              {isMounted && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788"
                  height="450"
                  style={{ border: 0, width: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default Contact
