import React from 'react'
import Header from './components/Header'
import Footer from './components/footer' 
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

function TeamDetails() {
  return (
    <>
    <Header />
    {/* Center Section */}
    <section id="center" className="center_teamdt">
        <div className="center_om bg_backn1">
          <div className="container-fluid">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">Team Detail</h1>
                <h6 className="col_red mb-0 mt-3 fw-bold">
                  <Link href="#" className="text-light">Home</Link>
                  <span className="mx-2 text-white-50">/</span> Team Detail
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Detail Section */}
      <section id="team_dt" className="p_3">
        <div className="container-fluid">
          <div className="team_dt1 row">
            <div className="col-md-6 col-12">
              <div className="team_dt1l">
                <div className="grid clearfix">
                  <figure className="effect-jazz mb-0">
                    <Link href="#">
                      <Image src="/Image/36.jpg" className="w-100" alt="abc" width={550} height={500} style={{ borderRadius: '10px' }} />
                    </Link>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="team_dt1r">
                <h1>Dolor Porta</h1>
                <h6 className="col_red">Department Head</h6>
                <ul className="mb-0 social_tag mt-4">
                  <li className="text-white d-inline-block"><Link className="d-block text-center" href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                  <li className="text-white d-inline-block"><Link className="d-block text-center" href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                  <li className="text-white d-inline-block"><Link className="d-block text-center" href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                  <li className="text-white d-inline-block"><Link className="d-block text-center" href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                </ul>
                <p className="mt-4 mb-4">Distinctively promote enabled technology and client-focused bandwidth. Objectively impact cross-media materials rather than covalent initiatives. Dynamically pontificate holistic with.</p>
                <h5>Phone Number: <span className="fw-normal float-end">+(123) 456-7890</span></h5>
                <h5 className="mt-3">Email: <span className="fw-normal float-end">info@gmail.com</span></h5>
                <h5 className="mt-3">Website: <span className="fw-normal float-end">info@gmail.com</span></h5>
                <h5 className="mt-3">Address: <span className="fw-normal float-end">12345 MO Road, United States</span></h5>
                <h5 className="mt-3 mb-0">Experience: <span className="fw-normal float-end">14 Years</span></h5>
              </div>
            </div>
          </div>
          <div className="team_dt2 row mt-4">
            <div className="col-md-12">
              <h2 className="mb-3">About Me</h2>
              <p>As of my last knowledge update in January 2022, I don't have specific information about Kristin Watson, as it's a relatively common name and details about individuals may not be readily available in my training data. It's possible that Kristin Watson is not a widely recognized public figure or that any relevant information about them has emerged since my last update.</p>
              <p className="mb-0">If Kristin Watson is a private individual or someone who gained prominence after 2022, I recommend checking more recent sources such as social media profiles, news articles, or other online platforms for the latest information about them. If there's a specific context or field you're referring to, providing additional details may help me provide a more accurate and relevant response.</p>
            </div>
          </div>
          <div className="team_dt3 row mt-4">
            <div className="col-md-6 col-12">
              <div className="team_dt3l">
                <h2 className="mb-3">Personal Skills</h2>
                <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
                <h6 className="mt-4">Fresh News <span className="float-end">96%</span></h6>
                <div className="progress-bar mt-3">
                  <div className="progress" style={{ width: '96%' }}></div>
                </div>
                <h6 className="mt-4">Delicate Care Solutions <span className="float-end">91%</span></h6>
                <div className="progress-bar mt-3">
                  <div className="progress" style={{ width: '91%' }}></div>
                </div>
                <h6 className="mt-4">Stain Master Pro <span className="float-end">88%</span></h6>
                <div className="progress-bar mt-3">
                  <div className="progress" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="team_dt3r">
                <div className="grid clearfix">
                  <figure className="effect-jazz mb-0">
                    <Link href="#">
                      <Image src="/Image/17.jpg" className="w-100" alt="abc" width={500} height={300} style={{ borderRadius: '10px' }} />
                    </Link>
                  </figure>
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

export default TeamDetails
