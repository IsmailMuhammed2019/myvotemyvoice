import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/footer';
import Head from 'next/head';

const NewsDetails = () => {
  return (
    <>
      <Head>
        <title>News Details</title>
      </Head>
      <Header />
      {/* Center Section */}
      <section id="center" className="center_blogdt">
        <div className="center_om bg_backn1">
          <div className="container-fluid">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">News Detail</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> News Detail
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="p_3">
        <div className="container-fluid">
          <div className="row blog_1">
            <div className="col-md-9 col-12">
              <div className="blog_1dt">
                <div className="blog_1dt1">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <Link href="#">
                        <Image src="/Image/21.jpg" className="w-100" alt="Image25" width={500} height={300} style={{ borderRadius: '10px' }} />
                      </Link>
                    </figure>
                  </div>
                  <ul className="mt-3">
                    <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i> <Link href="#">Ante Quis</Link> <span className="text-muted mx-2">|</span></li>
                    <li className="d-inline-block"><i className="fa fa-comment me-1 col_red"></i> <Link href="#">2 Comments</Link> <span className="text-muted mx-2">|</span></li>
                    <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i> <Link href="#">28 July, 2021</Link></li>
                  </ul>
                  <h2><Link href="#">Senate Races Flooded With Social Ngo</Link></h2>
                  <p className="mt-3">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
                  <p>Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace.</p>
                  <div className="blog_1dt1i bg-light p-4 text-center" style={{ borderRadius: '10px' }}>
                    <p className="mb-0 fs-5 col_red">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely.</p>
                  </div>
                  <p className="mt-3">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                </div>
                <div className="blog_1d2 mt-4">
                  <div className="blog_1d2m row">
                    <div className="col-md-6 col-12">
                      <div className="blog_1d2l">
                        <h5 className="mb-3">Tags:</h5>
                        <ul className="mb-0 tags">
                          <li className="d-inline-block"><Link href="blog_detail.html">NEWS</Link></li>
                          <li className="d-inline-block"><Link href="blog_detail.html">BLOG</Link></li>
                          <li className="d-inline-block"><Link href="blog_detail.html">HEADLINES</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 text-end">
                      <div className="blog_1d2r">
                        <h5 className="mb-3">Social:</h5>
                        <ul className="social_tag mb-0">
                          <li className="d-inline-block"><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                          <li className="d-inline-block"><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                          <li className="d-inline-block"><Link href="#"><i className="fa-brands fa-youtube-square"></i></Link></li>
                          <li className="d-inline-block"><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                          <li className="d-inline-block"><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_1d3 mt-4">
                  <h4>RELATED POSTS</h4>
                  <hr className="line mb-4" />
                  <div className="row blog_h1">
                    <div className="col-md-6 col-12">
                      <div className="blog_h1i shadow_box">
                        <div className="blog_h1i1 position-relative">
                          <div className="blog_h1i1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <Link href="#"><Image src="/Image/15.jpg" className="w-100" alt="Image25" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                              </figure>
                            </div>
                          </div>
                          <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                            <span className="d-inline-block"><Link href="#"><i className="fa fa-link"></i></Link></span>
                          </div>
                        </div>
                        <div className="blog_h1i2 p-4 bg-white text-center" style={{ borderRadius: '10px' }}>
                          <ul>
                            <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i> <Link href="#">Lorem Amet</Link> <span className="text-muted mx-2">|</span></li>
                            <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i> <Link href="#">29 July, 2021</Link></li>
                          </ul>
                          <h4><Link href="#">Liberty Divided Over Criticism Justice League</Link></h4>
                          <p>Andouille ball tip turducken landjaeger cupim tail. Ball tip shankle shank kevin, bacon…</p>
                          <h6 className="mb-0 fw-bold"><Link href="#">Learn More <i className="fa fa-chevron-right ms-1 font_12"></i></Link></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="blog_h1i shadow_box">
                        <div className="blog_h1i1 position-relative">
                          <div className="blog_h1i1i">
                            <div className="grid clearfix">
                              <figure className="effect-jazz mb-0">
                                <Link href="#"><Image src="/Image/true.jpg" className="w-100" alt="Image25" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                              </figure>
                            </div>
                          </div>
                          <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                            <span className="d-inline-block"><Link href="#"><i className="fa fa-link"></i></Link></span>
                          </div>
                        </div>
                        <div className="blog_h1i2 p-4 bg-white text-center" style={{ borderRadius: '10px' }}>
                          <ul>
                            <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i> <Link href="#">Dolor Porta</Link> <span className="text-muted mx-2">|</span></li>
                            <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i> <Link href="#">30 July, 2021</Link></li>
                          </ul>
                          <h4><Link href="#">Lorem Ipsum Dolor Nulla Quis Porta Semper</Link></h4>
                          <p>Andouille ball tip turducken landjaeger cupim tail. Ball tip shankle shank kevin, bacon…</p>
                          <h6 className="mb-0 fw-bold"><Link href="#">Learn More <i className="fa fa-chevron-right ms-1 font_12"></i></Link></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_1d4 mt-4">
                  <h4 className="text-uppercase">2 Comments</h4>
                  <hr className="line mb-4" />
                  <div className="blog_1d4i row">
                    <div className="col-md-2 col-sm-2">
                      <div className="blog_1d4il">
                        <Image src="/Image/10.jpg" className="w-100 rounded-circle" alt="abc" width={70} height={100} />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <div className="blog_1d4ir">
                        <h5><Link href="#">Admin</Link></h5>
                        <h6 className="text-muted font_14">December 7, 2020 at 9:30 am</h6>
                        <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
                        <h6 className="mb-0 mt-3"><Link href="#" className="button p-2 px-4">Reply</Link></h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="blog_1d4i row">
                    <div className="col-md-2 col-sm-2">
                      <div className="blog_1d4il">
                        <Image src="/Image/13.jpg" className="w-100 rounded-circle" alt="abc" width={70} height={100} />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-10">
                      <div className="blog_1d4ir">
                        <h5><Link href="#">Admin</Link></h5>
                        <h6 className="text-muted font_14">December 9, 2020 at 9:30 am</h6>
                        <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
                        <h6 className="mb-0 mt-3"><Link href="#" className="button p-2 px-4">Reply</Link></h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_1d5 mt-4">
                  <h4 className="text-uppercase">LEAVE A COMMENT</h4>
                  <hr className="line mb-4" />
                  <div className="contact_1li row">
                    <div className="col-md-6 col-12">
                      <div className="contact_1lil">
                        <div className="input-group border_1 rounded_8 p-3">
                          <input type="text" className="form-control border-0 p-0" placeholder="Your Name" style={{ borderRadius: '10px' }} />
                          <span className="input-group-btn m-0">
                            <i className="fa fa-user col_red"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="contact_1lil">
                        <div className="input-group border_1 rounded_8 p-3">
                          <input type="text" className="form-control border-0 p-0" placeholder="Email" style={{ borderRadius: '10px' }} />
                          <span className="input-group-btn m-0">
                            <i className="fa fa-envelope col_red"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_1li row mt-4">
                    <div className="col-md-6 col-12">
                      <div className="contact_1lil">
                        <div className="input-group border_1 rounded_8 p-3">
                          <input type="text" className="form-control border-0 p-0" placeholder="Phone" style={{ borderRadius: '10px' }} />
                          <span className="input-group-btn m-0">
                            <i className="fa fa-phone col_red"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="contact_1lil">
                        <div className="input-group border_1 rounded_8 p-3">
                          <input type="text" className="form-control border-0 p-0" placeholder="Subject" style={{ borderRadius: '10px' }} />
                          <span className="input-group-btn m-0">
                            <i className="fa fa-comment-o col_red"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_1li row mt-4">
                    <div className="col-md-12 col-12">
                      <div className="contact_1lil">
                        <textarea placeholder="Comment" className="form-control form_text rounded_8" style={{ borderRadius: '10px' }}></textarea>
                        <div className="form-check mt-3">
                          <input type="checkbox" className="form-check-input" id="customCheck1" />
                          <label className="form-check-label" htmlFor="customCheck1">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <h6 className="mb-0 mt-4 text-center">
                          <Link href="#" className="button" style={{ borderRadius: '10px' }}><i className="fa fa-check-circle me-1"></i> Add Comment</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="blog_1r">
                <div className="blog_1r1">
                  <div className="input-group p-2 border_1">
                    <input type="text" className="form-control border-0 bg-transparent" placeholder="Search" style={{ borderRadius: '10px' }} />
                    <span className="input-group-btn">
                      <button className="btn btn-primary bg-transparent border-0 fs-6 col_red" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="blog_1r1 mt-4">
                  <h5>RECENT COMMENTS</h5>
                  <hr className="line mb-4" />
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Senate Races Flooded With Social</Link></p>
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Charity deflects on claims of senate attempt</Link></p>
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Liberty Divided Over Criticism Justice League</Link></p>
                  <p className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">The races that could flip the Senate</Link></p>
                  <p className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Dontion build huge early People lead</Link></p>
                </div>
                <div className="blog_1r1 mt-4">
                  <h5>RECENT POSTS</h5>
                  <hr className="line mb-4" />
                  <div className="footer_b1ri row">
                    <div className="col-md-4 col-4">
                      <div className="footer_b1ril">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <Link href="blog_detail.html"><Image src="/Image/7.jpg" className="w-100" alt="abc" width={200} height={90} style={{ borderRadius: '10px' }} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5><Link href="blog_detail.html" className="font_14">Dontion build huge early People lead</Link></h5>
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
                            <Link href="blog_detail.html"><Image src="/Image/8.jpg" className="w-100" alt="abc" width={200} height={90} style={{ borderRadius: '10px' }} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5><Link href="blog_detail.html" className="font_14">Senate Races Flooded With Social</Link></h5>
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
                            <Link href="blog_detail.html"><Image src="/Image/9.jpg" className="w-100" alt="abc" width={200} height={90} style={{ borderRadius: '10px' }} /></Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-8 ps-0">
                      <div className="footer_b1rir">
                        <h5><Link href="blog_detail.html" className="font_14">Charity deflects on claims of senate attempt</Link></h5>
                        <h6 className="font_14 mb-0"><i className="fa fa-calendar col_red me-1"></i> Feb 27, 2022</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_1r1 mt-4">
                  <h5>ARCHIVES</h5>
                  <hr className="line mb-4" />
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">November 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">October 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">September 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">August 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">July 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">June 2021</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">April 2021</Link></h6>
                  <h6 className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">January 2021</Link></h6>
                </div>
                <div className="blog_1r1 mt-4">
                  <h5>CATEGORIES</h5>
                  <hr className="line mb-4" />
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Campaign</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Donation</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Government</Link></h6>
                  <h6 className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Charity</Link></h6>
                </div>
                <div className="blog_1r1 mt-4">
                  <h5>META</h5>
                  <hr className="line mb-4" />
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Log in</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Entries feed</Link></h6>
                  <h6 className="font_14 mb-2"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Comments feed</Link></h6>
                  <h6 className="font_14 mb-0"><i className="fa fa-long-arrow-right col_red me-1"></i> <Link href="blog_detail.html">Info@gmail.com</Link></h6>
                </div>
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
                              <Link href="blog_detail.html">
                                <Image src="/Image/11.jpg" className="rounded-circle" width={100} height={100} alt="abc" />
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
                              <Link href="blog_detail.html">
                                <Image src="/Image/12.jpg" className="rounded-circle" width={100} height={100} alt="abc" />
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
  );
};

export default NewsDetails;