import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Footer() {
  return (
    <>
     <section id="footer_b">
        <div className="footer_m bg_backn1 p_3">
          <div className="container-xl">
            <div className="footer_b1 row">
              <div className="col-md-6">
                <div className="footer_b1l">
                  <h2 className="mb-4">
                    <Link href="/">
                      <p className="text-white">
                        <i className="fa-solid fa-check-to-slot col_red me-1"></i> MyVote
                        <span className="col_red">MyVoice</span>
                      
                    </p></Link>
                  </h2>
                  <p className="text-light font_15">
                    MyVoteMyVoice is dedicated to empowering citizens through verified information and civic engagement tools. We believe that informed
                    citizens are essential for a thriving democracy. Our platform combines cutting-edge technology with rigorous fact-checking to provide
                    reliable, non-partisan information about elected officials, legislation, and civic processes.
                  </p>
                  <p className="text-light font_15">
                    Join us in building a more transparent and accountable democratic system. Together, we can ensure every voice is heard and every vote is
                    informed.
                  </p>
                  <ul className="social-network social-circle mb-0">
                    <li>
                      <Link href="#" className="icoRss" title="Twitter">
                        <i className="fa-brands fa-twitter"></i></Link>
                      
                    </li>
                    <li>
                      <Link href="#" className="icoFacebook" title="Facebook">
                        <i className="fa-brands fa-facebook"></i></Link>
                      
                    </li>
                    <li>
                      <Link href="#" className="icoGoogle" title="Instagram">
                        <i className="fa-brands fa-instagram"></i></Link>
                      
                    </li>
                    <li>
                      <Link href="#" className="icoLinkedin" title="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i></Link>
                      
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_b1m">
                  <h4 className="text-white mb-4">Our Location</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d-80.29949920266738!3d25.782390733064336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C+FL%2C+USA!5e0!3m2!1sen!2sin!4v1530774403788"
                    height="200"
                    style={{ border: '0', width: '100%' }}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_b1r">
                  <h4 className="text-white mb-4">Latest Updates</h4>
                  <div className="footer_b1ri row">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#">
                                <Image src="/Image/7.jpg" alt="Voting Rights" width={200} height={100} />
                              
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5>
                          <Link href="#">
                            <p className="font_14 text-white">New Voting Rights Bill Analysis Released
                          </p>
                          </Link>
                        </h5>
                        <h6 className="text-light font_14 mb-0">
                          <i className="fa fa-calendar col_red me-1"></i> Jun 15, 2024
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="footer_b1ri row mt-3">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#">
                                <Image src="/Image/8.jpg" alt="Platform Update" width={200} height={100} />
                              
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5>
                          <Link href="#">
                            <p className="font_14 text-white">Platform Updates: Enhanced Fact-Checking Tools
                          </p>
                          </Link>
                        </h5>
                        <h6 className="text-light font_14 mb-0">
                          <i className="fa fa-calendar col_red me-1"></i> Jun 10, 2024
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="footer_b1ri row mt-3">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#">
                                <Image src="/Image/9.jpg" alt="Community Impact" width={200} height={100} />
                              
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5>
                          <Link href="#">
                            <p className="font_14 text-white">Community Impact: 50,000 Users Milestone
                          </p>
                          </Link>
                        </h5>
                        <h6 className="text-light font_14 mb-0">
                          <i className="fa fa-calendar col_red me-1"></i> Jun 5, 2024
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section id="footer_bt" className="pt-3 pb-3 bg-dark">
        <div className="container-xl">
          <div className="footer_bt1 row text-center">
            <div className="col-md-12">
              <p className="mb-0 text-light font_15">
                © 2024 MyVoteMyVoice. All Rights Reserved | Empowering Informed Democracy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer