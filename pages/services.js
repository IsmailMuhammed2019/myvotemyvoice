import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'
import Link from 'next/link'
import Image from 'next/image'

function Services() {
  return (
    <>
    <Header />

    {/* Center Section */}
    <section id="center" className="center_serv">
        <div className="center_om bg_backn1">
          <div className="container-fluid">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">Services</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> Services
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Page Section */}
      <section id="serv_pg" className="p_3">
        <div className="container-fluid">
          <div className="row serv_pg1">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 col_red lh-1"><i className="fa fa-capsules"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>MEDICINES</h5>
                      <h6 className="mb-0">Duis tempor id nul</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 text-warning lh-1"><i className="fa fa-stethoscope"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>MEDICAL AID</h5>
                      <h6 className="mb-0">Duis tempor id nul</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 text-info lh-1"><i className="fa fa-donate"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>DONATIONS</h5>
                      <h6 className="mb-0">Duis tempor id nul</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 col_blue lh-1"><i className="fa fa-user-shield"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>VOLUNTEERS</h5>
                      <h6 className="mb-0">Duis tempor id nul</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row serv_pg2 mt-5 text-center mb-4">
            <div className="col-md-12">
              <h6><span className="me-2 col_red fw-bold fs-5 align-middle">|</span> A help to those who need it</h6>
              <h2 className="mt-3 mb-0">Each donation is an essential help <br /> which improves everyone's life</h2>
            </div>
          </div>
          <div className="row serv_pg3">
            <div className="col-md-4 col-12">
              <div className="serv_pg3l">
                <div className="serv_pg3l1 position-relative">
                  <div className="serv_pg3l1i">
                    <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
  <Link href="#">
    <Image src="/Image/30.jpg" className="w-100" alt="abc" width={500} height={350} style={{ borderRadius: '10px' }} />
  </Link>
</figure>
                    </div>
                  </div>
                  <div className="serv_pg3l1i1 position-absolute">
                    <h6 className="mb-0"><Link className="d-inline-block p-2 px-3 font_14 bg_blue text-white" href="#">DONATE NOW</Link></h6>
                  </div>
                </div>
                <div className="serv_pg3l2 shadow_box p-4">
                  <h3><Link href="#">Social Help</Link></h3>
                  <p className="font_14 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                  <h5 className="font_14 mt-3">GOAL : <span className="fw-normal">1400 $</span> <span className="float-end">RAISED : <span className="fw-normal">300 $</span></span></h5>
                  <h6 className="mb-0 mt-4 text-center"><Link className="button_2 text-center" href="#">View Details</Link></h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="serv_pg3l">
                <div className="serv_pg3l1 position-relative">
                  <div className="serv_pg3l1i">
                    <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
  <Link href="#">
    <Image src="/Image/31.jpg" className="w-100" alt="abc" width={500} height={350} style={{ borderRadius: '10px' }} />
  </Link>
</figure>
                    </div>
                  </div>
                  <div className="serv_pg3l1i1 position-absolute">
                    <h6 className="mb-0"><Link className="d-inline-block p-2 px-3 font_14 bg_red text-white" href="#">DONATE NOW</Link></h6>
                  </div>
                </div>
                <div className="serv_pg3l2 shadow_box p-4 serv_pg3l2o">
                  <h3><Link href="#">Ethical Support</Link></h3>
                  <p className="font_14 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '82%' }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">82%</div>
                  </div>
                  <h5 className="font_14 mt-3">GOAL : <span className="fw-normal">3400 $</span> <span className="float-end">RAISED : <span className="fw-normal">2800 $</span></span></h5>
                  <h6 className="mb-0 mt-4 text-center"><Link className="button text-center" href="#">View Details</Link></h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="serv_pg3l">
                <div className="serv_pg3l1 position-relative">
                  <div className="serv_pg3l1i">
                    <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
  <Link href="#">
    <Image src="/Image/32.jpg" className="w-100" alt="abc" width={500} height={350} style={{ borderRadius: '10px' }} />
  </Link>
</figure>
                    </div>
                  </div>
                  <div className="serv_pg3l1i1 position-absolute">
                    <h6 className="mb-0"><Link className="d-inline-block p-2 px-3 font_14 bg_blue text-white" href="#">DONATE NOW</Link></h6>
                  </div>
                </div>
                <div className="serv_pg3l2 shadow_box p-4">
                  <h3><Link href="#">New Fundraiser</Link></h3>
                  <p className="font_14 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                  <h5 className="font_14 mt-3">GOAL : <span className="fw-normal">24000 $</span> <span className="float-end">RAISED : <span className="fw-normal">13000 $</span></span></h5>
                  <h6 className="mb-0 mt-4 text-center"><Link className="button_2 text-center" href="#">View Details</Link></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section id="serv">
        <div className="serv_m bg_back">
          <div className="container-fluid">
            <div className="serv_1 row">
              <div className="col-md-6 col-12">
                <div className="serv_1l">
                  <Image src="/Image/26.jpg" width="100" height="100" className="rounded-circle" alt="Service Image" />
                  <h2 className="mt-4 text-white">A concrete help for a better and kind world</h2>
                  <p className="mt-3 mb-4 text-light font_15">Cras fringilla sapien in libero ullamcorper efficitur. Donec interdum nulla quis neque tristique, id condimentum sapien commodo. Donec non augue molestie, euismod quam eu, gravida nisl.</p>
                  <ul className="mb-0">
                    <li className="d-inline-block"><Link className="col_red font_50" href="#"><i className="fa fa-capsules"></i></Link></li>
                    <li className="d-inline-block ms-4"><Link className="col_red font_50" href="#"><i className="fa fa-stethoscope"></i></Link></li>
                    <li className="d-inline-block ms-4"><Link className="col_red font_50" href="#"><i className="fa fa-donate"></i></Link></li>
                    <li className="d-inline-block ms-4"><Link className="col_red font_50" href="#"><i className="fa fa-user-shield"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="serv_1r">
                  {/* Additional content can be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="serv_o" className="p_3">
        <div className="container-fluid">
          <div className="serv_o1 row">
            <div className="col-md-6 col-12">
              <div className="serv_o1l">
                <h6><span className="me-2 col_red fw-bold fs-5 align-middle">|</span> Donate with love</h6>
                <h1 className="mt-3">Donate for a better future</h1>
                <p className="mt-3 mb-4 font_15">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et quisque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim sem ut ips.</p>
                <div className="serv_o1li row">
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li>Lorem Ipsum</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li><i className="fa fa-check col_red me-1 font_12 fw-bold"></i> Cons Samet si</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li>Sil abat</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="serv_o1li row">
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li>Dolor Sit Amet</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li><i className="fa fa-check col_red me-1 font_12 fw-bold"></i> Lorem Ipsm dolor</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li>Dolor Sit Amet</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="serv_o1li row">
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li>Dolor Sit Amet</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li><i className="fa fa-check col_red me-1 font_12 fw-bold"></i> Null Quis dolor</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="serv_o1lil">
                      <ul className="mb-0 font_15">
                        <li>Samir Salus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h6 className="mb-0 mt-4"><Link className="button p-2 px-4" href="#">More Info</Link></h6>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="serv_o1r">
                <div className="serv_o1ri row">
                  <div className="col-md-6 col-sm-6">
                    <div className="serv_o1rim">
                      <div className="serv_o1rim1 bg_blue p-4 text-center">
                        <h5 className="text-white">Volunteers</h5>
                        <h6 className="mb-0 text-light mt-3 font_14">LOREM IPSUM</h6>
                      </div>
                      <div className="serv_o1rim2 mt-3">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/34.jpg" className="w-100" alt="abc" width={500} height={350}/></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="serv_o1rim">
                      <div className="serv_o1rim2 mb-3">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="#"><Image src="/Image/35.jpg" className="w-100" alt="abc" width={500} height={350}/></Link>
                          </figure>
                        </div>
                      </div>
                      <div className="serv_o1rim1 bg_red p-4 text-center">
                        <h5 className="text-white">Organizers</h5>
                        <h6 className="mb-0 text-light mt-3 font_14">LOREM IPSUM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="serv_o2 row mt-5">
            <div className="col-md-6">
              <div className="serv_o2l shadow_box p-5 px-4">
                <div className="serv_o2li row">
                  <div className="col-md-2">
                    <div className="serv_o2lil">
                      <h1 className="mb-0 family_1">1</h1>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="serv_o2lir">
                      <h5>Recurring Donations</h5>
                      <p className="mb-0 font_15 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="serv_o2l shadow_box p-5 px-4">
                <div className="serv_o2li row">
                  <div className="col-md-2">
                    <div className="serv_o2lil">
                      <h1 className="mb-0 family_1 col_red">2</h1>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="serv_o2lir">
                      <h5>Ongoing Aid</h5>
                      <p className="mb-0 font_15 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
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

export default Services
