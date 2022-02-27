import "./contact.css"
import email from "../../img/A1.png"
import address from "../../img/A2.png"
import phone from "../../img/A3.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact=()=>{
    const formRef=useRef()
    const [done,setDone]=useState(false);
    const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_0q01nou', 'template_xxgihih', formRef.current, 'x3i6fmU5h_-5B6cE5')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={phone}
                                alt=""
                                className="c-icon"
                            />
                            +91-7982181039
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={address}
                                alt=""
                                className="c-icon"
                            />
                            D-306 Swarnjayanti Puram, Ghaziabad, Uttar Pradesh, India (201013)
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={email}
                                alt=""
                                className="c-icon"
                            />
                            snigdh27@gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor : darkMode && "#333"}} rows="5"  placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for contacting.....your query is sent successfully"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact