import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: "mail",
          name: "Mail",
          icon:"far fa-envelope",
          url: "kantillo0683[at]gmail.com",
          href: "mailto:kantillo0683@gmail.com"
        },
        {
          id: "github",
          name: "GitHub",
          icon:"fab fa-github",
          url: "yasmro",
          href: "https://github.com/yasmro"
        },
        {
          id: "fb",
          name: "Facebook",
          icon:"fab fa-facebook-f",
          url: "yu.ohno.16",
          href: "https://www.facebook.com/yu.ohno.16"
        },
        {
          id: "insta",
          name: "Instagram",
          icon:"fab fa-instagram",
          url: "yasmro1226",
          href: "https://www.instagram.com/yasmro1226"
        }
      ]
    };
  }

  render(){
    const contacts = this.state.contacts.map( contact =>
      <a href={contact.href} className="contact-box nav-link col-md-5 mr-md-2 col-12 mb-3 bg-light text-dark">
        <div className="cover-img pt-2 pr-md-2" Style="background-image:url('../images/shodo/1.png');">
          <div className="mb-2">
            <i className={contact.icon + " fa-2x"}></i>
            <span className="header h3 position-absolute" Style="left: 56px;">{contact.name}</span>
          </div>
          <p>{contact.url}</p>
        </div>
      </a>
    )

    return(
      <motion.div
      animate={{
        y: 0,
        opacity: 1
      }}
      initial={{
        y: 100,
        opacity: 0
      }}
      exit={{
        y: -100,
        opacity: 0
      }}
      transition={{
        duration: 0.2
      }}
   >
      <div className="container mt-5">
        <h1 className="mb-5 text-center text-md-left">Contact</h1>
      
        <div className="row">
          {contacts}
        </div>   
      </div>
      </motion.div>
    )
  }
}
export default Contact;