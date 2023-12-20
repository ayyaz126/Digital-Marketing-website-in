import React from 'react'

function Home() {
  return (
    <div >
      <div className="hero-slider">
          <div className="slider-item th-fullpage hero-area" style={{backgroundImage: 'url(images/slider/slider-bg-1.jpg)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">Crafting Digital <br />
                    Experience</h1>
                  <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, <br /> veritatis tempore nostrum id
                    officia quaerat eum corrupti, <br /> ipsa aliquam velit.</p>
                  <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn btn-main" href="service.html">Explore Us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item th-fullpage hero-area" style={{backgroundImage: 'url(images/slider/slider-bg-2.jpg)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".1">We Combine Design <br /> and
                    Creativity</h1>
                  <p data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".5">Create just what you need
                    for your Perfect Website. Choose from a wide range
                    <br /> of Elements &amp; simply put them on our Canvas.</p>
                  <a data-duration-in=".3" data-animation-in="fadeInDown" data-delay-in=".8" className="btn btn-main" href="service.html">Explore Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
Start About Section
==================================== */}
        <section className="service-2 section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* section title */}
                <div className="title text-center">
                  <h2>What Do We Offer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Voluptates, earum. </p>
                  <div className="border" />
                </div>
                {/* /section title */}
              </div>
              <div className="col-md-4 text-center">
                <img src="images/about/member.jpg" className="inline-block" alt="" />
              </div>
              <div className="col-md-8">
                <div className="row text-center">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-item">
                      <i className="tf-ion-ios-alarm-outline" />
                      <h4>Time Management</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                    </div>
                  </div>{/* END COL */}
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-item">
                      <i className="tf-ion-ios-briefcase-outline" />
                      <h4>Marketing Ideas</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                    </div>
                  </div>{/* END COL */}
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-item">
                      <i className="tf-ion-ios-email-outline" />
                      <h4>Mail Support</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                    </div>
                  </div>{/* END COL */}
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="service-item">
                      <i className="tf-ion-ios-locked-outline" />
                      <h4>Secure System</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis.</p>
                    </div>
                  </div>{/* END COL */}
                </div>
              </div>
            </div> {/* End row */}
          </div> {/* End container */}
        </section> {/* End section */}
        {/*
Start About Section
==================================== */}
        <section className="about-2 section" id="about">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <div className="title text-center">
                  <h2>We Are Bingo Agency</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam reprehenderit accusamus labore iusto,
                    aut, eum itaque illo totam tempora eius.</p>
                  <div className="border" />
                </div>
              </div>
              {/* /section title */}
              <div className="col-md-6">
                <img src="images/about/about-2.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md-6">
                <ul className="checklist">
                  <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                  <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                  <li>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                  <li>Etiam porta sem multipage evint landing magna mollis euismod a pharetra augue.</li>
                  <li>Aenean quam. Pellentesque ornare sem laca quam venenatis vestibulum.</li>
                </ul>
                <a href="#" className="btn btn-main mt-20">Learn More</a>
              </div>
            </div> {/* End row */}
          </div> {/* End container */}
        </section> {/* End section */}
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
        {/* Start Testimonial
=========================================== */}
        <section className="testimonial section" id="testimonial">
          <div className="container">
            <div className="row">				
              <div className="col-lg-12">
                {/* testimonial wrapper */}
                <div className="testimonial-slider">
                  {/* testimonial single */}
                  <div className="item text-center">
                    <i className="tf-ion-chatbubbles" />
                    {/* client info */}
                    <div className="client-details">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                    </div>
                    {/* /client info */}
                    {/* client photo */}
                    <div className="client-thumb">
                      <img src="images/client-logo/clients-1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="client-meta">
                      <h3>William Martin</h3>
                      <span>CEO , Company Name</span>
                    </div>
                    {/* /client photo */}
                  </div>
                  {/* /testimonial single */}
                  {/* testimonial single */}
                  <div className="item text-center">
                    <i className="tf-ion-chatbubbles" />
                    {/* client info */}
                    <div className="client-details">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                    </div>
                    {/* /client info */}
                    {/* client photo */}
                    <div className="client-thumb">
                      <img src="images/client-logo/clients-2.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="client-meta">
                      <h3>Emma Harrison</h3>
                      <span>CEO , Company Name</span>
                    </div>
                    {/* /client photo */}
                  </div>
                  {/* /testimonial single */}
                  {/* testimonial single */}
                  <div className="item text-center">
                    <i className="tf-ion-chatbubbles" />
                    {/* client info */}
                    <div className="client-details">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla, soluta dolorum. Eos earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                    </div>
                    {/* /client info */}
                    {/* client photo */}
                    <div className="client-thumb">
                      <img src="images/client-logo/clients-3.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="client-meta">
                      <h3>Alexander Lucas</h3>
                      <span>CEO , Company Name</span>
                    </div>
                    {/* /client photo */}
                  </div>
                  {/* /testimonial single */}
                </div>
              </div> 		{/* end col lg 12 */}
            </div>	    {/* End row */}
          </div>       {/* End container */}
        </section>    {/* End Section */}
        {/*
		Start Blog Section
		=========================================== */}
        <section className="blog" id="blog">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <div className="title text-center ">
                  <h2> Latest <span className="color">Posts</span></h2>
                  <div className="border" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus, reprehenderit libero
                    inventore nam.</p>
                </div>
              </div>
              {/* /section title */}
              {/* single blog post */}
              <article className="col-md-4 col-sm-6 col-xs-12 clearfix ">
                <div className="post-item">
                  <div className="media-wrapper">
                    <img src="images/blog/post-1.jpg" alt="amazing caves coverimage" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3><a href="single-post.html">Reasons to Smile</a></h3>
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                      moon officia aute, non skateboard dolor brunch.</p>
                    <a className="btn btn-main" href="single-post.html">Read more</a>
                  </div>
                </div>
              </article>
              {/* /single blog post */}
              {/* single blog post */}
              <article className="col-md-4 col-sm-6 col-xs-12 ">
                <div className="post-item">
                  <div className="media-wrapper">
                    <img src="images/blog/post-2.jpg" alt="amazing caves coverimage" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3><a href="single-post.html">A Few Moments</a></h3>
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                      moon officia aute, non skateboard dolor brunch.</p>
                    <a className="btn btn-main" href="single-post.html">Read more</a>
                  </div>
                </div>
              </article>
              {/* end single blog post */}
              {/* single blog post */}
              <article className="col-md-4 col-sm-6 col-xs-12 ">
                <div className="post-item">
                  <div className="media-wrapper">
                    <img src="images/blog/post-3.jpg" alt="amazing caves coverimage" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h3><a href="single-post.html">Hints for Life</a></h3>
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                      moon officia aute, non skateboard dolor brunch.</p>
                    <a className="btn btn-main" href="single-post.html">Read more</a>
                  </div>
                </div>
              </article>
              {/* end single blog post */}
            </div> {/* end row */}
          </div> {/* end container */}
        </section> {/* end section */}
    </div>
  )
}

export default Home;