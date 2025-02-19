import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Image from 'next/image'
import Link from 'next/link'

function FAQ() {
  return (
    <>
      <Header />
      <section id="center" className="center_faq">
        <div className="center_om bg_backn1">
          <div className="container-fluid">
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
        <div className="container-fluid">
          <div className="goal_1 row text-center">
            <div className="col-md-12">
              <h1 className="col_blue">We Work Transparent & Hard</h1>
              <p className="mb-0">Our mission is to empower citizens through education and engagement. Join us in making a difference in our community!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="footer">
        <div className="footer_m bg_backn1 pt-5 pb-5">
          <div className="container-fluid">
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
                        <h5>Join the Crowd. Be United!</h5>
                        <p>We invite you to become part of our community. Your voice matters, and together we can create impactful change.</p>
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/15.jpg" className="w-100" alt="Join Us" width={500} height={300} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="profile">
                      <div className="footer_1li">
                        <h5>Shop Goodies from our Boutique!</h5>
                        <p>Explore our collection of merchandise that supports our mission. Every purchase helps fund our programs.</p>
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/16.jpg" className="w-100" alt="Shop Goodies" width={500} height={300} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="profile1">
                      <div className="footer_1li">
                        <h5>Donations Help the People</h5>
                        <p>Your generous donations allow us to continue our work in the community. Every dollar counts and makes a difference.</p>
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/17.jpg" className="w-100" alt="Donations" width={500} height={300} /></Link>
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
                          <p className="mb-0">We are committed to transparency and accountability. Our team works tirelessly to ensure that your contributions are used effectively.</p>
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
                          <p className="mb-0">Our future goals include expanding our outreach programs and increasing community engagement through workshops and events.</p>
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
                          <p className="mb-0">We have successfully launched several initiatives that have positively impacted our community, including educational programs and health services.</p>
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
                          <p className="mb-0">All donations are reviewed and approved by our team to ensure they align with our mission and goals.</p>
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
                          <p className="mb-0">Visit our shop to find unique items that support our cause. Your purchases help fund our initiatives.</p>
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
                          <p className="mb-0">Join us in our mission to create a better community. Together, we can make a difference!</p>
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
      <Footer />
    </>
  )
}

export default FAQ
