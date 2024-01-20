import './ContactUs.css';
import contactShake from './../ContactShake.png';



function ContactUsForm() {
  
    return (
      <div className="contact-form-parent">
        <div className='contact-form-card'>
            {/* <img src={contactShake} alt="Articles"/> */}
            <div className="form-overlay">
                <h3>Get in touch, sweetheart</h3>
                <div className='textComp'>
                    <label className='textTitle'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        // style={{ width: '100%' }}
                    />
                </div>
                <div className='textComp'>
                    <label htmlFor="email">Email ID:</label>
                    <input
                        type="email"
                        id="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        // style={{ width: '100%' }}
                    />
                </div>
                <div className='textComp'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                        // style={{ width: '100%' }}
                    />
                </div>
            </div>
        </div>
      </div>
    ); 
  }

export default ContactUsForm;
