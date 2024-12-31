import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'; // Make sure this is imported
import Header from './components/Header';
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>MyVoteMyVoice - Civic Engagement Platform</title>
      </Head>

      <Header />

      <section id="center" className="center_home">
        <div className="container-fluid">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src="/Image/1.jpg" width={1920} height={1080} className="d-block w-100" alt="..." style={{ objectFit: 'cover', borderRadius: '10px' }} />
                <div className="carousel-caption d-md-block">
                  <h1 className="font_70 text-uppercase family_1">Your Voice <br /> Your <span className="col_red">Vote</span></h1>
                  <p className="mt-3 w-75 text-light fs-5">Empowering citizens with knowledge and tools to strengthen democracy through informed participation and accountability.</p>
                  <h6 className="mb-0 mt-4">
                    <Link className="button" href="/register-vote" style={{ borderRadius: '10px' }}>Learn More</Link>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <Image src="/Image/2.jpg" width={1920} height={1080} className="d-block w-100" alt="..." style={{ objectFit: 'cover', borderRadius: '10px' }} />
                <div className="carousel-caption d-md-block">
                  <h1 className="font_70 text-uppercase family_1">Track your Your <span className="col_red">Representatives</span></h1>
                  <p className="mt-3 w-50 text-light fs-5">Access verified voting records, policy positions, and tools to hold elected officials accountable to their campaign promises.</p>
                  <h6 className="mb-0 mt-4">
                    <Link className="button" href="/dashboard" style={{ borderRadius: '10px' }}>View Dashboard</Link>
                  </h6>
                </div>
              </div>
              <div className="carousel-item">
                <Image src="/Image/3.jpg" width={1920} height={1080} className="d-block w-100" alt="..." style={{ objectFit: 'cover', borderRadius: '10px' }} />
                <div className="carousel-caption d-md-block">
                  <h1 className="font_70 text-uppercase family_1">Get <span className="col_red">Involved</span></h1>
                  <p className="mt-3 w-50 text-light fs-5">Join our community of engaged citizens working to strengthen democratic institutions through education and accountability.</p>
                  <h6 className="mb-0 mt-4">
                    <Link className="button" href="/get-involved" style={{ borderRadius: '10px' }}>Learn More</Link>
                  </h6>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

{/* Services Section */}
<section id="serv_pg" className="p_3">
        <div className="container-fluid">
          <div className="row serv_pg1">
            {/* Education */}
            <div className="col-md-3 col-sm-6 col-12">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3 col-12">
                    <div className="serv_pg1lil">
                      <span className="font_50 col_red lh-1"><i className="fa fa-graduation-cap"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9 col-12">
                    <div className="serv_pg1lir">
                      <h5>EDUCATION</h5>
                      <h6 className="mb-0">Civic Knowledge</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fact-Checking */}
            <div className="col-md-3 col-sm-6">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 text-warning lh-1"><i className="fa fa-check-circle"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>FACT-CHECKING</h5>
                      <h6 className="mb-0">Verified Information</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Engagement */}
            <div className="col-md-3 col-sm-6">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 text-info lh-1"><i className="fa fa-users"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>ENGAGEMENT</h5>
                      <h6 className="mb-0">Take Action</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accountability */}
            <div className="col-md-3 col-sm-6">
              <div className="serv_pg1l">
                <div className="serv_pg1li row">
                  <div className="col-md-3">
                    <div className="serv_pg1lil">
                      <span className="font_50 col_blue lh-1"><i className="fa fa-balance-scale"></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="serv_pg1lir">
                      <h5>ACCOUNTABILITY</h5>
                      <h6 className="mb-0">Track Progress</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="row serv_pg2 mt-5 text-center mb-4">
            <div className="col-md-12">
              <h6><span className="me-2 col_red fw-bold fs-5 align-middle">|</span> Strengthening Democracy Together</h6>
              <h2 className="mt-3 mb-0">Empowering citizens with knowledge and tools <br /> to hold representatives accountable</h2>
            </div>
          </div>

          {/* Service Items */}
          <div className="row serv_pg3">
            {/* Civic Education */}
            <div className="col-md-4">
              <div className="serv_pg3l">
                <div className="serv_pg3l1 position-relative">
                  <div className="serv_pg3l1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="#">
                          <Image src="/Image/7.jpg" width={500} height={300} className="w-100" alt="Education" />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="serv_pg3l1i1 position-absolute">
                    <h6 className="mb-0">
                      <Link href="/education">
                        <span className="d-inline-block p-2 px-3 font_14 bg_blue text-white">LEARN MORE</span>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="serv_pg3l2 shadow_box p-4">
                  <h3><Link href="#">Civic Education</Link></h3>
                  <p className="font_14 mt-3">Interactive resources and guides to understand democratic processes and your role as a citizen.</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                  <h5 className="font_14 mt-3">
                    GOAL: <span className="fw-normal">10,000 Users</span>
                    <span className="float-end">CURRENT: <span className="fw-normal">7,500 Users</span></span>
                  </h5>
                  <h6 className="mb-0 mt-4 text-center">
                    <Link href="#">
                      <span className="button_2 text-center">View Resources</span>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>

            {/* Fact-Checking */}
            <div className="col-md-4">
              <div className="serv_pg3l">
                <div className="serv_pg3l1 position-relative">
                  <div className="serv_pg3l1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="#">
                          <Image src="/Image/8.jpg" width={500} height={300} className="w-100" alt="Fact Checking" />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="serv_pg3l1i1 position-absolute">
                    <h6 className="mb-0">
                      <Link href="/factcheck">
                        <span className="d-inline-block p-2 px-3 font_14 bg_red text-white">EXPLORE DATA</span>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="serv_pg3l2 shadow_box p-4">
                  <h3><Link href="#">Fact-Checking Platform</Link></h3>
                  <p className="font_14 mt-3">Verified information about elected officials' voting records, statements, and policy positions.</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '82%' }} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">82%</div>
                  </div>
                  <h5 className="font_14 mt-3">
                    OFFICIALS TRACKED: <span className="fw-normal">535</span>
                    <span className="float-end">VERIFIED RECORDS: <span className="fw-normal">12,000+</span></span>
                  </h5>
                  <h6 className="mb-0 mt-4 text-center">
                    <Link href="#">
                      <span className="button text-center">Search Database</span>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>

            {/* Action Center */}
            <div className="col-md-4">
              <div className="serv_pg3l">
                <div className="serv_pg3l1 position-relative">
                  <div className="serv_pg3l1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="#">
                          <Image src="/Image/9.jpg" width={500} height={300} className="w-100" alt="Action Center" />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="serv_pg3l1i1 position-absolute">
                    <h6 className="mb-0">
                      <Link href="/action-center">
                        <span className="d-inline-block p-2 px-3 font_14 bg_blue text-white">TAKE ACTION</span>
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="serv_pg3l2 shadow_box p-4">
                  <h3><Link href="#">Action Center</Link></h3>
                  <p className="font_14 mt-3">Tools and resources to contact representatives, track legislation, and make your voice heard.</p>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                  <h5 className="font_14 mt-3">
                    ACTIONS TAKEN: <span className="fw-normal">25,000</span>
                    <span className="float-end">ACTIVE USERS: <span className="fw-normal">5,000</span></span>
                  </h5>
                  <h6 className="mb-0 mt-4 text-center">
                    <Link href="#">
                      <span className="button_2 text-center">Get Started</span>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="spec" className="bg_blue pt-5 pb-5">
        <div className="container-fluid">
          <div className="row spec_1">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="spec_1i">
                <h1 className="text-white font_60">50,000+</h1>
                <h6 className="mb-0 text-white-50 mt-3"><i className="fa fa-bullhorn fs-3 align-middle col_red me-2"></i> Registered Voters</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="spec_1i">
                <h1 className="text-white font_60">1,200+</h1>
                <h6 className="mb-0 text-white-50 mt-3"><i className="fa fa-clock fs-3 align-middle col_red me-2"></i> Bills Tracked</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="spec_1i">
                <h1 className="text-white font_60">535</h1>
                <h6 className="mb-0 text-white-50 mt-3"><i className="fa fa-user fs-3 align-middle col_red me-2"></i> Officials Monitored</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="spec_1i">
                <h1 className="text-white font_60">25,000+</h1>
                <h6 className="mb-0 text-white-50 mt-3"><i className="fa fa-check fs-3 align-middle col_red me-2"></i> Verified Records</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact Section */}
      <section id="goal" className="p_3">
        <div className="container-fluid">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12 col-12">
              <h1 className="col_blue">Our Mission & Impact</h1>
              <p className="mb-0">MyVoteMyVoice empowers citizens with verified information and tools to make informed decisions and actively participate in democracy.</p>
            </div>
          </div>
          <div className="goal_2 row">
            <div className="col-md-6">
              <div className="goal_2l position-relative">
                <div className="goal_2l1">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <Link href="#"><Image src="/Image/5.jpg" width={360} height={480} className="w-100" alt="Civic Engagement" /></Link>
                    </figure>
                  </div>
                </div>
                {/* <div className="goal_2l2 position-absolute w-100 h-100 top-0 bg_backo text-center">
                  <span><Link href="#"><button className="font_70 col_red"><i className="fa fa-play"></i></button></Link></span>
                </div> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="goal_2r">
                <h3 className="mb-3">Driving Informed Civic Participation</h3>
                <p>Through our comprehensive fact-checking platform and action center, we've helped over 50,000 citizens access verified information about their representatives and take meaningful civic action.</p>
                <p>Our tools have enabled constituents to track legislation, contact officials, and make their voices heard on issues that matter to their communities.</p>
                <Image src="/Image/4.jpg" width={100} height={30} alt="Civic Impact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section id="contri">
        <div className="contri_m bg_back">
          <div className="container-xl">
            <div className="contri_1 row text-center">
              <div className="col-md-12">
                <h1 className="col_red">Make A Difference</h1>
                <h6 className="text-light">Support Informed Democracy</h6>
                <p className="mt-4 mx-auto text-light">Help us continue providing citizens with the tools and information they need for meaningful civic engagement. Your support enables us to maintain and expand our fact-checking platform, develop new civic engagement tools, and ensure accurate, non-partisan information remains freely accessible to all.</p>
                <h6 className="mb-0 mt-4">
                  <Link href="#"><button className="button">Support Our Mission</button></Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about_h" className="p_3 bg-light">
        <div className="container-xl">
          <div className="about_h1 row">
            <div className="col-md-4">
              <div className="about_h1l text-end">
                <h3>Fact-Checking Platform</h3>
                <p>Comprehensive database of verified voting records, statements, and policy positions of elected officials at all levels of government.</p>
                <h3 className="mt-4">Action Center</h3>
                <p>Tools and resources to help citizens contact representatives, track legislation, and participate in democratic processes.</p>
                <h3 className="mt-4">Data Transparency</h3>
                <p className="mb-0">Clear sourcing and verification methods ensure trust and accountability in all our information.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about_h1m">
                <div className="grid clearfix">
                  <figure className="effect-jazz mb-0">
                    <Link href="#"><Image src="/Image/6.jpg" width={500} height={300} className="w-100" alt="Platform Features" /></Link>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about_h1l">
                <h3>Real-Time Updates</h3>
                <p>Stay informed with the latest legislative actions, voting records, and policy developments.</p>
                <h3 className="mt-4">Civic Education</h3>
                <p>Resources to help understand political processes, policy issues, and civic responsibilities.</p>
                <h3 className="mt-4">Community Engagement</h3>
                <p className="mb-0">Connect with other engaged citizens and share insights about local and national issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="work_home" className="p_3">
        <div className="container-xl">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12">
              <h1>How We Work</h1>
              <p className="mb-0">MyVoteMyVoice empowers citizens through a systematic approach to civic engagement. <br /> Here's how we help you make informed decisions and participate effectively in democracy.</p>
            </div>
          </div>
          <div className="work_home_2 row">
            {/* Step 1: Research & Verification */}
            <div className="col-md-3">
              <div className="work_home_2_i text-center">
                <div className="work_home_2_ii text-center">
                  <h1><span className="text-white">1</span></h1>
                </div>
                <h4 className="mt-3 mb-3">Research & Verification</h4>
                <p>We gather data from official sources and verify claims using rigorous fact-checking methods.</p>
              </div>
            </div>
            {/* Step 2: Analysis & Context */}
            <div className="col-md-3">
              <div className="work_home_2_i text-center">
                <div className="work_home_2_ii work_home_2_iio text-center">
                  <h1><span>2</span></h1>
                </div>
                <h4 className="mt-3 mb-3">Analysis & Context</h4>
                <p>Our experts analyze the information and provide essential context for better understanding.</p>
              </div>
            </div>
            {/* Step 3: Civic Education */}
            <div className="col-md-3">
              <div className="work_home_2_i text-center">
                <div className="work_home_2_ii text-center">
                  <h1><span className="text-white">3</span></h1>
                </div>
                <h4 className="mt-3 mb-3">Civic Education</h4>
                <p>We create educational resources to help citizens understand complex political issues.</p>
              </div>
            </div>
            {/* Step 4: Engagement Tools */}
            <div className="col-md-3">
              <div className="work_home_2_i text-center">
                <div className="work_home_2_ii work_home_2_iio text-center">
                  <h1><span>4</span></h1>
                </div>
                <h4 className="mt-3 mb-3">Engagement Tools</h4>
                <p>We provide tools for direct civic action and connecting with representatives.</p>
              </div>
            </div>
          </div>
          <div className="work_home_3 text-center mt-3">
            <h6 className="mb-0"><Link href="#"><span className="button">Learn More</span></Link></h6>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section id="blog_h" className="p_3 bg-light">
        <div className="container-xl">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12">
              <h1>Latest Updates</h1>
              <p className="mb-0">Stay informed with the latest developments in civic engagement and democracy. <br /> Get updates on legislation, fact-checks, and opportunities for civic action.</p>
            </div>
          </div>
          <div className="row blog_h1">
            {/* Blog Post 1 */}
            <div className="col-md-4">
              <div className="blog_h1i shadow_box">
                <div className="blog_h1i1 position-relative">
                  <div className="blog_h1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="#">
                          <Image src="/Image/7.jpg" className="w-100" alt="Voting Rights" width={500} height={300} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                    <span className="d-inline-block">
                      <Link href="#"><i className="fa fa-link"></i></Link>
                    </span>
                  </div>
                </div>
                <div className="blog_h1i2 p-4 bg-white text-center">
                  <ul>
                    <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i> <Link href="#">Fact Check Team</Link> <span className="text-muted mx-2">|</span></li>
                    <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i> <Link href="#">Latest Update</Link></li>
                  </ul>
                  <h4><Link href="#">New Voting Rights Legislation Analysis</Link></h4>
                  <p>Comprehensive analysis of recent voting rights legislation and its potential impact on voters...</p>
                  <h6 className="mb-0 fw-bold"><Link href="#">Read Full Analysis <i className="fa fa-chevron-right ms-1 font_12"></i></Link></h6>
                </div>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="col-md-4">
              <div className="blog_h1i shadow_box">
                <div className="blog_h1i1 position-relative">
                  <div className="blog_h1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="#">
                          <Image src="/Image/8.jpg" className="w-100" alt="Election Security" width={500} height={300} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                    <span className="d-inline-block">
                      <Link href="#"><i className="fa fa-link"></i></Link>
                    </span>
                  </div>
                </div>
                <div className="blog_h1i2 p-4 bg-white text-center">
                  <ul>
                    <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i> <Link href="#">Research Team</Link> <span className="text-muted mx-2">|</span></li>
                    <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i> <Link href="#">Featured Report</Link></li>
                  </ul>
                  <h4><Link href="#">Election Security Measures Explained</Link></h4>
                  <p>Understanding the latest developments in election security and verification processes...</p>
                  <h6 className="mb-0 fw-bold"><Link href="#">Read Full Report <i className="fa fa-chevron-right ms-1 font_12"></i></Link></h6>
                </div>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="col-md-4">
              <div className="blog_h1i shadow_box">
                <div className="blog_h1i1 position-relative">
                  <div className="blog_h1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="#">
                          <Image src="/Image/9.jpg" className="w-100" alt="Civic Engagement" width={500} height={300} />
                        </Link>
                      </figure>
                    </div>
                  </div>
                  <div className="blog_h1i1i1 text-center position-absolute w-100 h-100 bg_backo top-0">
                    <span className="d-inline-block">
                      <Link href="#"><i className="fa fa-link"></i></Link>
                    </span>
                  </div>
                </div>
                <div className="blog_h1i2 p-4 bg-white text-center">
                  <ul>
                    <li className="d-inline-block"><i className="fa fa-user me-1 col_red"></i> <Link href="#">Engagement Team</Link> <span className="text-muted mx-2">|</span></li>
                    <li className="d-inline-block"><i className="fa fa-clock me-1 col_red"></i> <Link href="#">Action Guide</Link></li>
                  </ul>
                  <h4><Link href="#">Guide to Local Civic Engagement</Link></h4>
                  <p>Practical steps for getting involved in your local government and making your voice heard...</p>
                  <h6 className="mb-0 fw-bold"><Link href="#">View Guide <i className="fa fa-chevron-right ms-1 font_12"></i></Link></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Politicians Section */}
      <section id="team_h" className="pt-4 pb-3">
        <div className="container-xl">
          <div className="goal_1 row mb-4 text-center">
            <div className="col-md-12">
              <h1>Popular Politicians</h1>
              <p className="mb-0">Stay informed about key political figures and track their voting records, statements and policy positions. <br /> Get verified information to make informed decisions.</p>
            </div>
          </div>
          <div className="team_1 row">
            {/* Politician 1 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="politician_detail.html"><Image src="/Image/10.jpg" className="w-100" alt="Senator" width={500} height={300} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-facebook"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-pinterest"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block" href="politician_detail.html"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="politician_detail.html">John Smith</Link></h5>
                  <h6 className="mb-0">U.S. Senator</h6>
                </div>
              </div>
            </div>
            {/* Politician 2 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="politician_detail.html"><Image src="/Image/11.jpg" className="w-100" alt="Representative" width={500} height={300} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-facebook"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-pinterest"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block" href="politician_detail.html"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="politician_detail.html">Sarah Johnson</Link></h5>
                  <h6 className="mb-0">House Representative</h6>
                </div>
              </div>
            </div>
            {/* Politician 3 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="politician_detail.html"><Image src="/Image/12.jpg" className="w-100" alt="Governor" width={500} height={300} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-facebook"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-pinterest"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block" href="politician_detail.html"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="politician_detail.html">Michael Davis</Link></h5>
                  <h6 className="mb-0">State Governor</h6>
                </div>
              </div>
            </div>
            {/* Politician 4 */}
            <div className="col-md-3 col-sm-6">
              <div className="team_1i">
                <div className="team_1i1 position-relative">
                  <div className="team_1i1i">
                    <div className="grid clearfix">
                      <figure className="effect-jazz mb-0">
                        <Link href="politician_detail.html"><Image src="/Image/13.jpg" className="w-100" alt="Mayor" width={500} height={300} /></Link>
                      </figure>
                    </div>
                  </div>
                  <div className="team_1i1i1 position-absolute w-100 bottom-0">
                    <ul className="mb-0">
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-facebook"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-twitter"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-pinterest"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block d-none" href="politician_detail.html"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a className="bg_red text-center d-inline-block" href="politician_detail.html"><i className="fa fa-share-alt"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team_1i2 mt-3">
                  <h5><Link href="politician_detail.html">Lisa Wilson</Link></h5>
                  <h6 className="mb-0">City Mayor</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr className="line_1 m-0" />

      <Footer />
    </>
  );
}