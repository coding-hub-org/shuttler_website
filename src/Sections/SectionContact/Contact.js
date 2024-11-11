import React from 'react'
import { Element } from 'react-scroll'

import './Contact.css'
import Email from '../../assets/email.png'
import Phone from '../../assets/phone.png'
import ThankYou from '../../assets/thankyou-img.png'
import Smile from '../../assets/smile-img.png'

import { firestore } from '../../components/Firebase/firebase'
import Title from '../../components/Title/Title'
import SendButton from '../../components/SendButton/SendButton'
import { collection } from 'firebase/firestore'

class Contact extends React.Component {
  state = {
    email: '',
    emailMessage: '',
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handleChangeMessage = (event) => {
    this.setState({
      emailMessage: event.target.value,
    })
  }

  handleSubmit = (event) => {
    const { email, emailMessage } = this.state
    console.log('LIFE IS GOOD')

    this.setState({
      email: '',
      emailMessage: '',
    })

    collection(firestore, 'ContactShuttler')
      .add({
        email: email,
        emailMesssage: emailMessage,
      })
      .then(function (docRef) {
        console.log('Done')
      })
  }

  render() {
    return (
      <Element name="Contact">
        <div className="Contact-component">
          <Title text={'Contact Us'} />
          <div className="contact-body">
            <div className="contact-description">
              <h3>
                IF YOU HAVE ANY COMMENTS OR SUGGESTIONS PLEASE CALL US OR SEND
                US AN EMAIL
              </h3>

              <div className="phone-sec" id="phoneNumDiv">
                <img className="phone-image" src={Phone} alt="" />
                <p className="labels">(845)-464-3900</p>
              </div>

              <div className="email-sec">
                <img className="email-image" src={Email} alt="" />
                <p className="labels">psucoders@plattsburgh.edu</p>
              </div>
            </div>

            <div className="contact-form">
              <form action="" id="contactForm">
                <p className="email-head">Email address</p>
                <input
                  onChange={this.handleChangeEmail}
                  className="email-input"
                  placeholder="Email Address"
                  type="text"
                  id="email"
                />{' '}
                <br /> <br />
                <p className="message-head">Request</p>
                <textarea
                  onChange={this.handleChangeMessage}
                  className="message-input"
                  type="text"
                  placeholder="Type your request..."
                  id="message"
                />
                <div className="sendButton-contactform">
                  <SendButton click={this.handleSubmit} />
                </div>
              </form>
            </div>
          </div>
          <div className='thankyou-section'>
            <img className='thankyou-section-phone' src={ThankYou} alt="" />
            <h1>
              THANK YOU <img src={Smile} alt="" />
            </h1>
          </div>
        </div>
      </Element>
    )
  }
}

export default Contact
