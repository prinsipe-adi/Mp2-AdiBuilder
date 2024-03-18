function Portfolio() {
    return (
        <>
        <section id="portfolio" className="portfolio section-padding">
            <div className="container">
                <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                <h2>Our Projects</h2>
                                <p>Projects blend innovation, precision, and sustainability for iconic results<br />while prioritizing sustainability and client satisfaction.</p>
                            </div>
                        </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2 h-100">
                            <div className="card-body text-dark">
                                <div className="img-area mb-4">
                                    <img src="http://localhost:8000/images/image-1710099665235.jpg" alt="" className="img-fluid"/>
                                </div>
                                <h3 className="card-title">Modern</h3>
                                <p className="lead">From sleek, modern lines to cozy nooks that exude warmth, each space is meticulously crafted to harmonize aesthetics with everyday living. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2 h-100">
                            <div className="card-body text-dark">
                                <div className="img-area mb-4">
                                    <img src="http://localhost:8000/images/image-1710099853067.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3 className="card-title">Eclectic</h3>
                                <p className="lead">Imagine mornings beginning with a refreshing dip or evenings spent basking in the tranquility of your own aquatic retreat. </p>
                            </div>
                        </div>
                    </div>  

                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-center bg-white pb-2 h-100">
                            <div className="card-body text-dark">
                                <div className="img-area mb-4">
                                <img src="http://localhost:8000/images/image-1710100136986.jpg" alt="" className="img-fluid" />
                                </div>
                                <h3 className="card-title">Smart Homes</h3>
                                <p className="lead">Explore our house designs, where innovation meets comfort in every corner. Our blueprints redefine living spaces, blending modern concepts with timeless elegance. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Portfolio;