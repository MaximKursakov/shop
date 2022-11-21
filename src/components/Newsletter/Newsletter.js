import { useState } from "react";
import validator from "validator";
import { motion} from "framer-motion"
import { AiOutlineSend } from "react-icons/ai";

export function Newsletter() {
    const [emailValid, setEmailValid] = useState(false);
    const [checkedValid, setCheckedValid] = useState(false)
    const [checkedInvalid, setCheckedInvalid] = useState(false)

    const variants = {
        invisible: {opacity: 0, y: -50},
        visible: {opacity: 1, y: -10}
    }
    const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
        setEmailValid(true);
    } else {
        setEmailValid(false);
    }
  };

  function checkEmail() {
          if(emailValid) {
              setCheckedValid(true)
              setCheckedInvalid(false)
          }
          else {
            setCheckedValid(false)
            setCheckedInvalid(true)
          }
  }

    return(
        <div>
            <form className="newsletter-signup">
                    <input 
                        className="email-input"
                        onChange={(e) => validateEmail(e)} 
                        type="email" 
                        placeholder="Your email adress" 
                        required
                    ></input>
                    <motion.span animate={{backgroundColor: emailValid ? "green" : "#3399FF"}} className="focus-animation"></motion.span>
                    <button onClick={checkEmail} type="button"><AiOutlineSend></AiOutlineSend></button>
                </form>
                {checkedValid
                    ? <motion.p variants={variants} initial="invisible" animate="visible" className="email-valid">You have successfully subscribed to out newsletter! </motion.p>
                    : checkedInvalid 
                    && <motion.p variants={variants} initial="invisible" animate="visible" className="email-invalid">The email you entered is not correct</motion.p>
                    
                    }
        </div>
    )
}