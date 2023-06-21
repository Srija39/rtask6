import React,{useState,useEffect} from "react";
import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

function Contact(){
    const handleClick1=()=>{
        window.location.href='https://www.instagram.com/srijareddy_________0113/';
 }
 const handleClick2=()=>{
    window.location.href='https://www.linkedin.com/in/kancha-srija-7436a3201/';

 }

 const handleClick3=()=>{
    window.location.href='https://discord.com/channels/@me/966390782380605492';

 }
 const handleClick4=()=>{
    window.location.href='https://mail.google.com/mail/u/0/#inbox';

 }
 return(
   <div className="con1">
    <div className="c1">
      <p>
            <h2><b>Let's get Connected</b></h2><pre></pre><pre></pre>
            <form method="post" action="mailto:srijakreddy3113@gmail.com">
                <input type="text" placeholder="Your Name"/><pre></pre>
                <input type="email" placeholder="email"/><pre></pre>
                <input type="text" placeholder="Your message"/><pre></pre>
                <button type="submit">Send Email</button>
                </form>
                </p></div>
                <pre></pre><pre></pre><pre></pre>
            <div className="c2">
               
    <FaInstagram  className="ic1" onClick={handleClick1}/>
     <FaLinkedinIn  className="ic2" onClick={handleClick2}/>
     <FaDiscord  className="ic3" onClick={handleClick3}/>
     <FaEnvelope className="ic5" onClick={handleClick4}/>
    </div></div>
        
        
    )
}
export default Contact;