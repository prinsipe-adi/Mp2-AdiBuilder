
import { useState } from "react"; // to capture the details that we are typing in input
import axios from "axios";         // to send data to our server

function Contact() {
    const [credentials, setCredentials] = useState ({
        name: "",
        email: "",
        phone: "",
        formQuery: ""
    })

    const [message, setMessage] = useState("");


    const handleChange = (e) => {     
        setCredentials ((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    //lets define our event handle form wherein if we submit the form, this fuction will be executed
    const handleSubmit = async (e) => {
        e.preventDefault();                  //to prevent the normal way that form is doing

        try{                                    //error handler
            const response = await axios.post("http://localhost:8000/api/contact", credentials); //assiging to response to get the message
            setMessage(response.data.message);
        } catch(e) {
            console.log(e);
        }
    }  
   





return(
    <>
    <footer id="contact" className="bg-dark text-white pt-1 pb-3">
        <div className="row text-center text-md-left me-2">
            <div  className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5>Contact us</h5>
                <form action="#" onSubmit={handleSubmit}>
                <input type="text" className="form-control" required placeholder="Your Name" name="name" id="name" onChange={handleChange}/>
                <input type="email" className="form-control" required placeholder="Your Email Address" name="email" id="email" onChange={handleChange}></input>
                <input type="phone number" className="form-control" required placeholder="Your phone number" name="phone" id="phone" onChange={handleChange}></input>

                <textarea name="formQuery" rows="5" className="form-control" required placeholder="Your Query Here" id="formQuery" onChange={handleChange}></textarea>
                <button className="btn btn-warning " data-bs-toggle="modal" data-bs-target="#exampleModal">Send Now</button>
                {message && <div>{message}</div>}
                </form>
            </div>

            <div  className="col-md-2 col-lg-2 mx-auto col-xl-2 mt-3">
                <h5>Quick Links</h5>  
                <br /><br />
                <p>
                <a className="text-white" href="#">Home</a>
                </p>      
                <p>
                    <a className="text-white" href="#about">About</a>
                </p> 
                <p>
                    <a className="text-white" href="#services">Services</a>
                </p> 
                <p>
                    <a className="text-white" href="#portfolio">Portfolio</a>
                </p> 
                <p>
                    <a className="text-white" href="#team">Team</a>
                </p>              
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <div>
                <h5>Contact</h5>  <br />
                <p>
                <i className="fas fa-home mr-3"></i> Marikina City, Metro Manila, Philippines
                </p>
                <p>
                <i className="fas fa-phone mr-3"></i> +639166956280
                </p>
                <p>
                <i className="fas fa-envelope mr-3"></i> help@adibuilder.ph
                </p>
                </div>
                

                {/* Socials */}
                <div className="contactSocial">
                    <h5>Follow us on Socials</h5><br />
                    <div>
                    <a className="social" href="https://www.youtube.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height={23} viewBox="0 0 448 512"><path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"/></svg></a>


                    <a className="social" href="https://facebook.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height={23} viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg></a>

                    <a className="social" href="https://instagram.com//" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height={23} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>

                    <a href="https://twitter.com/home" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height={23} viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
)
}
export default Contact;