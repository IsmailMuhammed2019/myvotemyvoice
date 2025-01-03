import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'; 


function Header() {
  const router = useRouter()

  return (
    <>
         <section id="top" className="bg_blue">
        <div className="container-xl">
          <div className="row top_1">
            <div className="col-md-9">
              <div className="top_1l">
                <ul className="mb-0 font_14">
                  <li className="text-white d-inline-block fw-bold">
                    <i className="fa fa-phone me-1 col_red"></i>
                    Phone: <span className="fw-normal">+1 (651) 200-5560</span>
                  </li>
                  <li className="text-white d-inline-block ms-4 fw-bold">
                    <i className="fa fa-envelope me-1 col_red"></i>
                    Email: <a className="fw-normal text-white" href="mailto:info@myvotemyvoice.us">info@myvotemyvoice.us</a>
                  </li>
                  <li className="text-white d-inline-block ms-4 fw-bold">
                    <i className="fa fa-map-marker me-1 fs-6 align-middle col_red"></i>
                    Address: <span className="fw-normal">2168 7th Ave, Anoka, MN 55303, USA</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_1r float-end">
                <ul className="mb-0 font_14">
                  <li><Link className="d-block text-center" href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                  <li><Link className="d-block text-center" href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                  <li><Link className="d-block text-center" href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                  <li><Link className="d-block text-center" href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                  <li><Link className="d-block text-center" href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light p-0" id="navbar_sticky">
          <div className="container-fluid">
          <Link className="p-0 navbar-brand fw-bold col_blue" href="/">
              <div style={{ position: 'relative', width: '200px', height: '50px' }}> {/* Set width and height for the parent container */}
                <Image 
                  src="/image/logo.jpg" // Path to your logo image
                  alt="MyVote MyVoice Logo" // Alternative text for the image
                  fill // Use fill for responsive images
                  style={{ objectFit: 'contain' }} // Ensure the image maintains its aspect ratio
                />
              <Image src="/Image/1.jpg" width={1920} height={1080} className="d-block w-100" alt="..." style={{ objectFit: 'cover', borderRadius: '10px', maxHeight: '500px' }} />

              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-0 ms-auto">
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === '/' ? 'text-danger' : ''}`} href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === '/about' ? 'text-danger' : ''}`} href="/about">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className={`nav-link dropdown-toggle ${router.pathname === '/news' ? 'text-danger' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    News
                  </Link>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" href="/news">News</Link></li>
                    <li><Link className="dropdown-item border-0" href="/news_details">News Detail</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className={`nav-link dropdown-toggle ${router.pathname === '/team' ? 'text-danger' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Team
                  </Link>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" href="/team">Team</Link></li>
                    <li><Link className="dropdown-item border-0" href="/team_details">Team Detail</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === '/faq' ? 'text-danger' : ''}`} href="/faq">Faq</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${router.pathname === '/contact' ? 'text-danger' : ''}`} href="/contact">Contact</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className={`nav-link dropdown-toggle ${router.pathname === '/services' ? 'text-danger' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                  </Link>
                  <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" href="/services">Services</Link></li>
                    <li><Link className="dropdown-item" href="/donate">Donation</Link></li>
                    <li><Link className="dropdown-item" href="/register">Register</Link></li>
                    <li><Link className="dropdown-item border-0" href="/login">Login</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className={`nav-link dropdown-toggle dropdown_search nav_hide ${router.pathname === '/search' ? 'text-danger' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-search"></i>
                  </Link>
                  <ul className="dropdown-menu drop_2 drop_1 p-3 bg_blue" aria-labelledby="navbarDropdown">
                    <li>
                      <div className="input-group">
                        <input type="text" className="form-control rounded-0 font_14" placeholder="SEARCH HERE" />
                        <span className="input-group-btn">
                          <button className="btn btn-primary bg_red rounded-0 p-2 px-3 border-0 font_14" type="button">
                            SEARCH
                          </button>
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="button font_14" href="/donate" style={{ borderRadius: '10px' }}>CONTRIBUTE</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Header