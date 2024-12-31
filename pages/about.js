import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/footer';

const About = () => {
  return (
    <>
      <Head>
        <title>MyVoteMyVoice - Civic Engagement Platform</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap" rel="stylesheet" />
      </Head>

      {/* Header Section */}
      <Header />

      {/* About Section */}
      <section id="center" className="center_about">
        <div className="container-fluid">
          <div className="row center_o1 text-center">
            <div className="col-md-12">
              <h1 className="text-white">About MyVoteMyVoice</h1>
              <h6 className="col_red mb-0 mt-3 fw-bold">
                <Link href="/" className="text-light">Home</Link>
                <span className="mx-2 text-white-50">/</span> About Us
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section id="about_pg" className="p_3">
        <div className="container-fluid">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12">
              <h1>Why Choose MyVoteMyVoice</h1>
              <p className="mb-0">
                MyVoteMyVoice is your trusted platform for democratic engagement. We provide verified information, <br />
                transparent analysis, and tools to make your voice heard in our democracy.
              </p>
            </div>
          </div>
          <div className="about_pg1 row">
            <div className="col-md-6">
              <div className="about_pg1l">
                <div className="grid clearfix">
                  <figure className="effect-jazz mb-0">
                    <Link href="#">
                      <Image src="/Image/17.jpg" alt="Civic Engagement" width={600} height={400} className="w-100" style={{ borderRadius: '10px' }} />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_pg1r">
                <h4><i className="fa fa-check-circle me-1 col_red"></i> Verified Information</h4>
                <p className="mb-4">We rigorously fact-check and verify all information about candidates, legislation, and civic processes to ensure you can make informed decisions.</p>
                <h4><i className="fa fa-users me-1 col_red"></i> Community Driven</h4>
                <p className="mb-4">Our platform thrives on community participation, fostering meaningful dialogue and collective action for democratic engagement.</p>
                <h4><i className="fa fa-shield me-1 col_red"></i> Non-Partisan Approach</h4>
                <p className="mb-0">We maintain strict neutrality and transparency in our analysis and presentation of information to serve all citizens equally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="p_3 bg_blue">
        <div className="container-fluid">
          <div className="event_1 row">
            <div className="col-md-5">
              <div className="event_1l">
                <div className="center_h1r rounded-3">
                  <div className="event_1li bg_red p-4" style={{ borderRadius: '10px' }}>
                    <h3 className="text-white">Get Involved</h3>
                    <p className="text-light mb-0">Join our community of engaged citizens</p>
                  </div>
                  <div className="event_1li1 bg-white p-4 pt-5 pb-5" style={{ borderRadius: '10px' }}>
                    <h6 className="mb-2 fw-bold font_14">Full Name</h6>
                    <input className="form-control" type="text" style={{ borderRadius: '10px' }} />
                    <h6 className="mb-2 mt-3 fw-bold font_14">Email Address</h6>
                    <input className="form-control" type="text" style={{ borderRadius: '10px' }} />
                    <h6 className="mb-2 mt-3 fw-bold font_14">Your Interest Area</h6>
                    <input className="form-control" type="text" style={{ borderRadius: '10px' }} />
                    <h6 className="mb-2 mt-3 fw-bold font_14">Message</h6>
                    <input className="form-control" type="text" style={{ borderRadius: '10px' }} />
                    <h6 className="mb-0 mt-4">
                      <Link className="button_2" href="#" style={{ borderRadius: '10px' }}>Join Now</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="event_1r">
                <div className="row course_1">
                  <div className="col-md-9">
                    <div className="course_1l">
                      <h3 className="text-white">Upcoming Events</h3>
                      <p className="mb-0 text-light">Join our community events and make your voice heard in democracy</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="course_1r text-end">
                      <h6 className="mb-0"><Link className="button_1" href="#" style={{ borderRadius: '10px' }}>View All</Link></h6>
                    </div>
                  </div>
                </div>
                {/* Event Item */}
                <div className="event_1ri row bg-white p-3 mx-0 mt-4 rounded-3" style={{ borderRadius: '10px' }}>
                  <div className="col-md-5 p-0">
                    <div className="event_1ril">
                      <div className="grid clearfix">
                        <figure className="effect-jazz mb-0">
                          <Link href="#"><Image src="/Image/7.jpg" className="w-100" alt="Voter Education" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="event_1rir">
                      <h5>Voter Education Workshop</h5>
                      <h6 className="font_14 mt-3">
                        <i className="fa fa-calendar col_red me-1"></i> 15 Dec, 2024
                        <i className="fa fa-clock col_red me-1 ms-3"></i> 10:00 AM - 12:00 PM
                      </h6>
                      <p className="font_14 mt-3">Learn about the voting process, your rights, and how to make informed decisions.</p>
                      <h6 className="mb-0 mt-3"><Link className="button_2 pt-2 pb-2 px-3" href="#" style={{ borderRadius: '10px' }}>Register Now</Link></h6>
                    </div>
                  </div>
                </div>
                {/* Additional Event Items can be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team_h" className="p_3 bg_light">
        <div className="container-fluid">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12">
              <h1>Our Team</h1>
              <p className="mb-0">Meet the dedicated professionals working to strengthen democracy through technology, education, and community engagement.</p>
            </div>
          </div>
          <div className="team_1 row">
            {/* Team Member 1 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html"><Image src="/Image/24.jpg" className="w-100" alt="Team Member" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block" href="#"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="#">Mr. Ntochukwu</Link></h5>
                  <h6 className="mb-0">Executive Director</h6>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html"><Image src="/Image/25.jpg" className="w-100" alt="Team Member" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block" href="#"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="#">Ismail Muhammed</Link></h5>
                  <h6 className="mb-0">Tech Lead</h6>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html"><Image src="/Image/26.jpg" className="w-100" alt="Team Member" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block" href="#"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="#">Maria Rodriguez</Link></h5>
                  <h6 className="mb-0">Community Manager</h6>
                </div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="team_detail.html"><Image src="/Image/27.jpg" className="w-100" alt="Team Member" width={500} height={300} style={{ borderRadius: '10px' }} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block" href="#"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="#">James Wilson</Link></h5>
                  <h6 className="mb-0">Content Director</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testim" className="p_3 bg-light carousel_p">
        <div className="container-xl">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12">
              <h1>Community Voices</h1>
              <p className="mb-0">Hear from our community members about how MyVoteMyVoice has helped them become more engaged and informed citizens.</p>
            </div>
          </div>
          <div className="row testim_1">
            <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testim_1i row text-center">
                    <div className="col-md-12">
                      <h3>MyVoteMyVoice has transformed how I engage with <span className="col_red">local <br /> democracy</span></h3>
                      <p className="mb-3 mt-3">
                        <i className="fa fa-quote-left col_red me-1"></i>
                        The platform's verified information and easy-to-use tools have made it simple to stay informed about local issues and make my voice heard. I feel more confident in my civic participation than ever before.
                        <i className="fa fa-quote-right col_red ms-1"></i>
                      </p>
                      <Link href="#"><Image src="/Image/11.jpg" className="rounded-circle" alt="Community Member" width={90} height={90} /></Link>
                      <h4 className="mt-3">David Park</h4>
                      <h6 className="mt-2 mb-0 col_red">Community Member</h6>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testim_1i row text-center">
                    <div className="col-md-12">
                      <h3>As a first-time voter, this platform was <span className="col_red">exactly <br /> what I needed</span></h3>
                      <p className="mb-3 mt-3">
                        <i className="fa fa-quote-left col_red me-1"></i>
                        The educational resources and community support helped me understand the voting process and make informed decisions. It's an invaluable resource for new voters like me.
                        <i className="fa fa-quote-right col_red ms-1"></i>
                      </p>
                      <Link href="#"><Image src="/Image/12.jpg" className="rounded-circle" alt="Community Member" width={90} height={90} /></Link>
                      <h4 className="mt-3">Emily Chen</h4>
                      <h6 className="mt-2 mb-0 col_red">Student Voter</h6>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testim_1i row text-center">
                    <div className="col-md-12">
                      <h3>The fact-checking features are <span className="col_red">incredibly <br /> valuable</span></h3>
                      <p className="mb-3 mt-3">
                        <i className="fa fa-quote-left col_red me-1"></i>
                        In today's world of misinformation, having a trusted source for verified political information is crucial. MyVoteMyVoice provides exactly that, helping me make well-informed decisions.
                        <i className="fa fa-quote-right col_red ms-1"></i>
                      </p>
                      <Link href="#"><Image src="/Image/10.jpg" className="rounded-circle" alt="Community Member" width={90} height={990} /></Link>
                      <h4 className="mt-3">Robert Martinez</h4>
                      <h6 className="mt-2 mb-0 col_red">Engaged Citizen</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default About;