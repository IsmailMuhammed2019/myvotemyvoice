import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Image from 'next/image'
import Link from 'next/link'

function faq () {
  return (
    <>
      <Header />
      {/* Center Section */}
      <section id="center" className="center_faq">
        <div className="center_om bg_backn1">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">FAQ</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> Faq
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Text Section */}
      <section id="footer_t" className="p_3">
        <div className="container-xl">
          <div className="goal_1 row text-center">
            <div className="col-md-12">
              <h1 className="col_blue">We Work Transparent & Hard</h1>
              <p className="mb-0">Achievements are now made easy using Political WordPress Theme! Share the news and press <br /> releases to your focus group and complete causes using donations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="footer">
        <div className="footer_m bg_backn1 pt-5 pb-5">
          <div className="container-xl">
            <div className="footer_1 row">
              <div className="col-md-7">
                <div className="footer_1l">
                  <ul className="nav nav-tabs mb-0 border-0">
                    <li className="nav-item d-inline-block">
                      <Link href="#home" className="nav-link active" data-bs-toggle="tab" aria-expanded="false">
                        <span className="d-md-block">JOIN US</span>
                      </Link>
                    </li>
                    <li className="nav-item d-inline-block">
                      <Link href="#profile" className="nav-link" data-bs-toggle="tab" aria-expanded="true">
                        <span className="d-md-block">SHOP GOODIES</span>
                      </Link>
                    </li>
                    <li className="nav-item d-inline-block">
                      <Link href="#profile1" className="nav-link" data-bs-toggle="tab" aria-expanded="true">
                        <span className="d-md-block">DONATIONS</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content p-4">
                    <div className="tab-pane active" id="home">
                      <div className="footer_1li">
                        <h5>Join the Crowd. Be Unite!</h5>
                        <p>Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce fermentum odio nec arcu integer tincidunt cras ultricies sem orci lectus, aliquam ut, faucibus non, aliquam ut, faucibus non.</p>
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/15.jpg" className="w-100" alt="abc" width={500} height={300} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="profile">
                      <div className="footer_1li">
                        <h5>Shop Goodies from our Boutique!</h5>
                        <p>Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce fermentum odio nec arcu integer tincidunt cras ultricies sem orci lectus, aliquam ut, faucibus non, aliquam ut, faucibus non.</p>
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/16.jpg" className="w-100" alt="abc" width={500} height={300} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="profile1">
                      <div className="footer_1li">
                        <h5>Donations Helps the People</h5>
                        <p>Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce fermentum odio nec arcu integer tincidunt cras ultricies sem orci lectus, aliquam ut, faucibus non, aliquam ut, faucibus non.</p>
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/17.jpg" className="w-100" alt="abc" width={500} height={300} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer_1r">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item mb-0">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Why Us?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-0 mt-3">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Future Social Goals
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-0 mt-3">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Past Achievements
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-0 mt-3">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Approving Donations
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-0 mt-3">
                      <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Shop Goodies
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-0 mt-3">
                      <h2 className="accordion-header" id="headingsix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                          Be with Us
                        </button>
                      </h2>
                      <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="line_1 m-0" />
      <hr className="line_1 m-0" />
      <Footer />
    </>
  )
}

export default faq
