function Home(){
    return(
        <>
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="pizza-store/4008533-uhd_4096_2160_25fps.mp4"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div class="card" >
              <img src="https://i.pinimg.com/564x/01/13/0b/01130b8c895fc8bd7eec2568a0625932.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  
                </p>
              </div>
            </div>
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Welcome to Pizza Palace
            </h1>
            <p className="lead">
              Indulge into our Exotic range of pizzas. Now available on Swiggy
              and Zomato. Delivered piping hot to your doorstep in a blink in
              our specially designed packaging.
            </p>
           
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="http://localhost:3001/ourmenu"><button type="button" class="btn btn-primary active" >Specials</button></a>
               <a href="http://localhost:3001/contact"><button type="button"  className="btn btn-outline-secondary btn-lg px-4"> Contact</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
    )

}
export default Home;