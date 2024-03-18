function Navbar() {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
            <div className="container">
                <a className="navbar-brand" href="#"><span className="text-success"><img src="http://localhost:8000/images/image-1710093179155.PNG" height={40} alt="logo" />ADI</span>BUILDER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">           
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>       
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>       
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>       
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>              
                        <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                        </li>            
                    </ul>     
                </div>
            </div>
        </nav>
        </>

    )
}

export default Navbar;