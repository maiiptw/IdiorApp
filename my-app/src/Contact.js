import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faGlobe, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = (prop) => {
    return(
        <div className='BookBG' style={{/*height:'100%'*/}}>
            <div className="head-contact">
                <h4 className="pre-title">Got a Question?</h4>
                {/* <h1>Contact</h1> */}
                <h1>Idior Book Store</h1>
                <p>We’re here to help and answer any question you might have. We look forward to hearing from you <span role="img" aria-label="Close">🙂</span></p>
            </div>
            <div className='contact-info-s3 mb-5'>
                <form method='GET' action='/api/customers'>
                    <div className="col mb-4">
                        <div className="">
                            <label htmlFor="name"><b>Name</b>   </label>
                            <input type="text" className="form-control .w-75" id="name"  name="name"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="">
                            <label htmlFor="email"><b>Email</b>   </label>
                            <input type="email" className="form-control .w-75"  name="email"/>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="">
                            <label htmlFor="contactmsg"><b>Message</b></label>
                            <textarea id="contactmsg" name="contactmsg" className="form-control" rows="4"/>                          
                        </div>
                    </div>
                    <div className="col ">
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary w-25">Submit</button>                         
                        </div>
                    </div>
                </form>
            </div>
            <div className="contact-info">
                <h4>Contact Information</h4>
                <div className="mt-4">
                    <div className="">
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' style={{marginRight:'15px'}} />
                            200/214 Pahonyotin82 Kukot Lumlukka Pratumthanee 
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faGlobe} size='1x' style={{marginRight:'15px'}} />
                            Thailand
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhoneAlt} size='1x' style={{marginRight:'15px'}} />
                            089-070-7106
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} size='1x' style={{marginRight:'15px'}} />
                            pongthawat.m@gmail.com
                        </p>
				    </div>
			    </div>
            </div>
            {/* test */}
            <input id='testid'></input>
            <button onClick={()=>{fetch(`/api/customers?id=2`).then(res => res.json).then(customers => console.log(customers))}}>click!</button>
        </div>
    )     
}
export default Contact;