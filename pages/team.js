import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Image from 'next/image'
import Link from 'next/link'

function Team() {
  return (
    <>
    <Header />
    {/* Center Section */}
    <section id="center" className="center_team">
        <div className="center_om bg_backn1">
          <div className="container-fluid">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
              <h1 className="text-white">Team Detail</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> Team 
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* Team Section */}
    <section id="team_h" className="pt-4 pb-3">
        <div className="container-fluid">
          <div className="team_1 row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html">
                          <Image src="/Image/10.jpg" className="w-100" alt="abc" width={500} height={300} style={{ borderRadius: '10px' }} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-facebook"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-pinterest"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-instagram"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block" href="team_detail.html"><i className="fa fa-share-alt"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="team_detail.html">Lorem Amet</Link></h5>
                  <h6 className="mb-0">Ceo and Founder</h6>
                </div>
              </div>
            </div>
            {/* Repeat for other team members */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html">
                          <Image src="/Image/11.jpg" className="w-100" alt="abc" width={500} height={300} style={{ borderRadius: '10px' }} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-facebook"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-pinterest"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-instagram"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block" href="team_detail.html"><i className="fa fa-share-alt"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="team_detail.html">Dolor Quis</Link></h5>
                  <h6 className="mb-0">Expert</h6>
                </div>
              </div>
            </div>
            {/* Additional team members can be added similarly */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html">
                          <Image src="/Image/12.jpg" className="w-100" alt="abc" width={500} height={300} style={{ borderRadius: '10px' }} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-facebook"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-pinterest"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-instagram"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block" href="team_detail.html"><i className="fa fa-share-alt"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="team_detail.html">Dolor Quis</Link></h5>
                  <h6 className="mb-0">Department Head</h6>
                </div>
              </div>
            </div>
            {/* Repeat for other team members */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html">
                          <Image src="/Image/11.jpg" className="w-100" alt="abc" width={500} height={300} style={{ borderRadius: '10px' }} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-facebook"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-pinterest"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block d-none" href="team_detail.html"><i className="fa-brands fa-instagram"></i></Link></li>
                      <li><Link className="bg_red text-center d-inline-block" href="team_detail.html"><i className="fa fa-share-alt"></i></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="team_detail.html">Dolor Quis</Link></h5>
                  <h6 className="mb-0">Expert</h6>
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

export default Team
