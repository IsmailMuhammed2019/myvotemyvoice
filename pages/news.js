import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'; // Make sure this is imported
import Header from './components/Header';
import Footer from './components/footer'

function news() {
  return (
    <>
    <Header />
    <section id="center" className="center_blog">
        <div className="center_om bg_backn1">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">News</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> News
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="p_3">
        <div className="container-xl">
          <div className="row blog_1">
            <div className="col-md-9">
              <div className="blog_1l">
                {/* Blog Post 1 */}
                <div className="blog_h1i">
                  <div className="blog_h1i1 position-relative">
                    <div className="blog_h1i1i">
                      <div className="grid clearfix">
                        <figure className="effect-jazz mb-0">
                          <Link href="/news_details">
                            <Image src="/Image/20.jpg" className="w-100" alt="Image25" width={500} height={300} />
                          </Link>
                        </figure>
                      </div>
                    </div>
                    <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                      <span className="d-inline-block">
                        <Link href="/news_details"><i className="fa fa-link"></i></Link>
                      </span>
                    </div>
                  </div>
                  <div className="blog_h1i2 p-4 bg-light">
                    <ul>
                      <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i><Link href="/news_details">Ante Quis</Link><span className="text-muted mx-2">|</span></li>
                      <li className="d-inline-block"><i className="fa fa-comment me-1 col_red"></i><Link href="/news_details">2 Comments</Link><span className="text-muted mx-2">|</span></li>
                      <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i><Link href="/news_details">28 July, 2021</Link></li>
                    </ul>
                    <h2><Link href="/news_details">Early donation data in 3 key states show spike</Link></h2>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                    <h6 className="mb-0"><Link href="/news_details" className="button">Read More <i className="fa fa-chevron-right ms-1 font_14"></i></Link></h6>
                  </div>
                </div>
                <hr />

                {/* Blog Post 2 */}
                <div className="blog_h1i">
                  <div className="blog_h1i1 position-relative">
                    <div className="blog_h1i1i">
                      <div className="grid clearfix">
                        <figure className="effect-jazz mb-0">
                          <Link href="/news_details">
                            <Image src="/Image/21.jpg" className="w-100" alt="Image25" width={500} height={300} />
                          </Link>
                        </figure>
                      </div>
                    </div>
                    <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                      <span className="d-inline-block">
                        <Link href="/news_details"><i className="fa fa-link"></i></Link>
                      </span>
                    </div>
                  </div>
                  <div className="blog_h1i2 p-4 bg-light">
                    <ul>
                      <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i><Link href="/news_details">Ante Quis</Link><span className="text-muted mx-2">|</span></li>
                      <li className="d-inline-block"><i className="fa fa-comment me-1 col_red"></i><Link href="/news_details">2 Comments</Link><span className="text-muted mx-2">|</span></li>
                      <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i><Link href="/news_details">28 July, 2021</Link></li>
                    </ul>
                    <h2><Link href="/news_details">Senate Races Flooded With Social Ngo</Link></h2>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                    <h6 className="mb-0"><Link href="/news_details" className="button">Read More <i className="fa fa-chevron-right ms-1 font_14"></i></Link></h6>
                  </div>
                </div>
                <hr />

                {/* Blog Post 3 */}
                <div className="blog_h1i">
                  <div className="blog_h1i1 position-relative">
                    <div className="blog_h1i1i">
                      <div className="grid clearfix">
                        <figure className="effect-jazz mb-0">
                          <Link href="/news_details">
                            <Image src="/Image/22.jpg" className="w-100" alt="Image25" width={500} height={300} />
                          </Link>
                        </figure>
                      </div>
                    </div>
                    <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                      <span className="d-inline-block">
                        <Link href="/news_details"><i className="fa fa-link"></i></Link>
                      </span>
                    </div>
                  </div>
                  <div className="blog_h1i2 p-4 bg-light">
                    <ul>
                      <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i><Link href="/news_details">Ante Quis</Link><span className="text-muted mx-2">|</span></li>
                      <li className="d-inline-block"><i className="fa fa-comment me-1 col_red"></i><Link href="/news_details">2 Comments</Link><span className="text-muted mx-2">|</span></li>
                      <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i><Link href="/news_details">28 July, 2021</Link></li>
                    </ul>
                    <h2><Link href="/news_details">Charity take the lead in Miami early equation</Link></h2>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                    <h6 className="mb-0"><Link href="/news_details" className="button">Read More <i className="fa fa-chevron-right ms-1 font_14"></i></Link></h6>
                  </div>
                </div>
                <hr />

                {/* Pagination */}
                <div className="pages text-center">
                  <ul className="mb-0">
                    <li><Link href="/news_details"><i className="fa fa-chevron-left"></i></Link></li>
                    <li><Link href="/news_details" className="act">1</Link></li>
                    <li><Link href="/news_details">2</Link></li>
                    <li><Link href="/news_details">3</Link></li>
                    <li><Link href="/news_details">4</Link></li>
                    <li><Link href="/news_details">5</Link></li>
                    <li><Link href="/news_details">6</Link></li>
                    <li><Link href="/news_details"><i className="fa fa-chevron-right"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="col-md-3">
              <div className="blog_1r">
                <div className="blog_1r1">
                  <div className="input-group p-2 border_1">
                    <input type="text" className="form-control border-0 bg-transparent" placeholder="Search" />
                    <span className="input-group-btn">
                      <button className="btn btn-primary bg-transparent border-0 fs-6 col_red" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>

                {/* Recent Comments */}
                <div className="blog_1r1 mt-4">
                  <h5>RECENT COMMENTS</h5>
                  <hr className="line mb-4" />
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Senate Races Flooded With Social</Link></p>
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Charity deflects on claims of senate attempt</Link></p>
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Liberty Divided Over Criticism Justice League</Link></p>
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">The races that could flip the Senate</Link></p>
                  <p className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Dontion build huge early People lead</Link></p>
                </div>

                {/* Recent Posts */}
                <div className="blog_1r1 mt-4">
                  <h5>RECENT POSTS</h5>
                  <hr className="line mb-4" />
                  <div className="footer_b1ri row">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="/news_details">
                              <Image src="/Image/7.jpg" className="w-100" alt="abc" width={200} height={90} />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5><Link href="/news_details" className="font_14">Dontion build huge early People lead</Link></h5>
                        <h6 className="font_14 mb-0"><i className="fa fa-calendar col_red me-1"></i> Feb 24, 2022</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="footer_b1ri row">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="/news_details">
                              <Image src="/Image/8.jpg" className="w-100" alt="abc" width={200} height={90} />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5><Link href="/news_details" className="font_14">Senate Races Flooded With Social</Link></h5>
                        <h6 className="font_14 mb-0"><i className="fa fa-calendar col_red me-1"></i> Feb 25, 2022</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="footer_b1ri row">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="/news_details">
                              <Image src="/Image/9.jpg" className="w-100" alt="abc" width={200} height={90} />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5><Link href="/news_details" className="font_14">Charity deflects on claims of senate attempt</Link></h5>
                        <h6 className="font_14 mb-0"><i className="fa fa-calendar col_red me-1"></i> Feb 27, 2022</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Archives */}
                <div className="blog_1r1 mt-4">
                  <h5>ARCHIVES</h5>
                  <hr className="line mb-4" />
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">November 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">October 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">September 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">August 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">July 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">June 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">April 2021</Link></h6>
                  <h6 className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">January 2021</Link></h6>
                </div>

                {/* Categories */}
                <div className="blog_1r1 mt-4">
                  <h5>CATEGORIES</h5>
                  <hr className="line mb-4" />
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Campaign</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Donation</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Government</Link></h6>
                  <h6 className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Charity</Link></h6>
                </div>

                {/* Meta */}
                <div className="blog_1r1 mt-4">
                  <h5>META</h5>
                  <hr className="line mb-4" />
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Log in</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Entries feed</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Comments feed</Link></h6>
                  <h6 className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i><Link href="/news_details">Info@gmail.com</Link></h6>
                </div>

                {/* Testimonials */}
                <div className="blog_1r1 mt-4">
                  <h5>TESTIMONIALS</h5>
                  <hr className="line mb-4" />
                  <div className="blog_1r1i p-4 bg-light">
                    <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="testim_1i row">
                            <div className="col-md-12">
                              <p className="mb-3">Human progress is neither automatic nor inevitable… Every step toward the goal of justice requires sacrifice, suffering, and</p>
                              <Link href="/news_details">
                                <Image src="/Image/11.jpg" className="rounded-circle" width={100} height={90} alt="abc" />
                              </Link>
                              <h5 className="mt-3">Nulla Quis</h5>
                              <h6 className="mt-2 mb-0 col_red">Expert</h6>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testim_1i row">
                            <div className="col-md-12">
                              <p className="mb-3">Human progress is neither automatic nor inevitable… Every step toward the goal of justice requires sacrifice, suffering, and</p>
                              <Link href="/news_details">
                                <Image src="/Image/12.jpg" className="rounded-circle" width={100} height={90} alt="abc" />
                              </Link>
                              <h5 className="mt-3">Semper Porta</h5>
                              <h6 className="mt-2 mb-0 col_red">Manager</h6>
                            </div>
                          </div>
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

export default news
