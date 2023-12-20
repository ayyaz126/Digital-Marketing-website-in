import React from 'react'

function About() {
  return (
    <div >
        <section className="single-page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>About Us</h2>
                <ol className="breadcrumb header-bradcrumb">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">About Us</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="about-shot-info section-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-20">
                <h2>We Create Designs<br /> and technology</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate molestias, quaerat quo natus dolor harum voluptatibus modi dicta ducimus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quae officia earum dolore est quaerat cupiditate voluptatibus id, magni alias veniam voluptate, libero explicabo, distinctio atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, fugit itaque ratione incidunt voluptas. Quaerat quidem dolor, quisquam amet inventore quas adipisci ea sint qui placeat beatae molestias aut, aperiam!</p>
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="images/company/company-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="company-mission section-sm bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia, perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
                <img src="images/company/company-image-2.jpg" alt="" className="img-fluid mt-30" />
              </div>
              <div className="col-md-6">
                <h3>Our Vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in suscipit voluptatum totam dolores assumenda vel, quia earum voluptatem blanditiis vero accusantium saepe aliquid nulla nemo accusamus, culpa inventore! Culpa nemo aspernatur tenetur, at quam aliquid reprehenderit obcaecati dicta illum mollitia, perferendis hic, beatae voluptates? Ex labore, obcaecati harum nam.</p>
                <img src="images/company/company-image-3.jpg" alt="" className="img-fluid mt-30" />
              </div>
            </div>
          </div>
        </section>
        <section className="promo-video section-sm">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <div className="title text-center">
                  <h2>Our Promo Video</h2>
                  <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu.Sed condimentum iaculis ex,
                    in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
                  <div className="border" />
                </div>
              </div>
              {/* /section title */}
              <div className="col-md-8 mx-auto">
                <iframe src="https://player.vimeo.com/video/51119176" width="100%" height={360} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
              </div>
            </div>
          </div>
        </section>
        {/*
Start Call To Action
==================================== */}
        <section className="call-to-action-2 section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula.</h2>
              </div>
            </div> 		{/* End row */}
          </div>   	{/* End container */}
        </section>   {/* End section */}
        <section className="section grallery">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="title text-center">
                  <h2>Sneak Peak Gallery</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam esse vitae recusandae qui aspernatur, blanditiis, laboriosam dignissimos dolore facere provident ex? Porro, praesentium consectetur tempore. Nulla, error eius dolorem.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="company-gallery">
                  <img src="images/company/gallery-1.jpg" alt="" />
                  <img src="images/company/gallery-2.jpg" alt="" />
                  <img src="images/company/gallery-3.jpg" alt="" />
                  <img src="images/company/gallery-4.jpg" alt="" />
                  <img src="images/company/gallery-5.jpg" alt="" />
                  <img src="images/company/gallery-5.jpg" alt="" />
                  <img src="images/company/gallery-1.jpg" alt="" />
                  <img src="images/company/gallery-2.jpg" alt="" />
                  <img src="images/company/gallery-3.jpg" alt="" />
                  <img src="images/company/gallery-4.jpg" alt="" />
                  <img src="images/company/gallery-5.jpg" alt="" />
                  <img src="images/company/gallery-5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Start Our Team
		=========================================== */}
        <section className="team" id="team">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <div className="title text-center ">
                  <h2>Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis
                    similique quos.</p>
                  <div className="border" />
                </div>
              </div>
              {/* /section title */}
              {/* team member */}
              <div className="col-md-4 col-sm-6 ">
                <div className="team-member text-center">
                  <div className="member-photo">
                    {/* member photo */}
                    <img className="img-fluid" src="images/team/member-1.jpg" alt="Meghna" />
                    {/* /member photo */}
                    {/* member social profile */}
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="#"><i className="tf-ion-social-facebook" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-twitter" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-google-outline" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-dribbble" /></a></li>
                      </ul>
                    </div>
                    {/* /member social profile */}
                  </div>
                  {/* member name & designation */}
                  <div className="member-content">
                    <h3>Michael Jonson</h3>
                    <span>Head Of Marketing</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>
                  {/* /member name & designation */}
                </div>
              </div>
              {/* end team member */}
              {/* team member */}
              <div className="col-md-4 col-sm-6 ">
                <div className="team-member text-center">
                  <div className="member-photo">
                    {/* member photo */}
                    <img className="img-fluid" src="images/team/member-2.jpg" alt="Meghna" />
                    {/* /member photo */}
                    {/* member social profile */}
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="#"><i className="tf-ion-social-facebook" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-twitter" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-google-outline" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-dribbble" /></a></li>
                      </ul>
                    </div>
                    {/* /member social profile */}
                  </div>
                  {/* member name & designation */}
                  <div className="member-content">
                    <h3>Carrick Mollenkamp</h3>
                    <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>
                  {/* /member name & designation */}
                </div>
              </div>
              {/* end team member */}
              {/* team member */}
              <div className="col-md-4 col-sm-6 ">
                <div className="team-member text-center">
                  <div className="member-photo">
                    {/* member photo */}
                    <img className="img-fluid" src="images/team/member-3.jpg" alt="Meghna" />
                    {/* /member photo */}
                    {/* member social profile */}
                    <div className="mask">
                      <ul className="clearfix">
                        <li><a href="#"><i className="tf-ion-social-facebook" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-twitter" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-google-outline" /></a></li>
                        <li><a href="#"><i className="tf-ion-social-dribbble" /></a></li>
                      </ul>
                    </div>
                    {/* /member social profile */}
                  </div>
                  {/* member name & designation */}
                  <div className="member-content">
                    <h3>David Gauthier</h3>
                    <span>Head Of Management</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus ullam, culpa odio.</p>
                  </div>
                  {/* /member name & designation */}
                </div>
              </div>
              {/* end team member */}
            </div> {/* End row */}
          </div> {/* End container */}
        </section> {/* End section */}
        {/*
		Start Counter Section
		==================================== */}
        <section className="counter-wrapper section-sm">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="title">
                  <h2>Award-Winning Agency</h2>
                  <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
                </div>
              </div>
              {/* first count item */}
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item">
                  <i className="tf-ion-ios-alarm-outline" />
                  <div>
                    <span className="counter" data-count={150}>0</span>
                  </div>
                  <h3>Happy Clients</h3>
                </div>
              </div>
              {/* end first count item */}
              {/* second count item */}
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item">
                  <i className="tf-ion-ios-analytics-outline" />
                  <div>
                    <span className="counter" data-count={130}>0</span>
                  </div>
                  <h3>Projects completed</h3>
                </div>
              </div>
              {/* end second count item */}
              {/* third count item */}
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item">
                  <i className="tf-ion-ios-compose-outline" />
                  <div>
                    <span className="counter" data-count={99}>0</span>
                  </div>
                  <h3>Positive feedback</h3>
                </div>
              </div>
              {/* end third count item */}
              {/* fourth count item */}
              <div className="col-md-3 col-sm-6 col-xs-6 text-center ">
                <div className="counters-item kill-border">
                  <i className="tf-ion-ios-bolt-outline" />
                  <div>
                    <span className="counter" data-count={250}>0</span>
                  </div>
                  <h3>Cups of Coffee</h3>
                </div>
              </div>
              {/* end fourth count item */}
            </div> 		{/* end row */}
          </div>   	{/* end container */}
        </section>   {/* end section */}
        {/*
Start Call To Action
==================================== */}
        <section className="call-to-action section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Let's Create Something Together</h2>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, <br /> nisi elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
                <a href className="btn btn-main">Contact Us</a>
              </div>
            </div> 		{/* End row */}
          </div>   	{/* End container */}
        </section>   {/* End section */}
    </div>
  )
}

export default About