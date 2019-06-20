import React, { Component } from 'react';
import {Parallax} from 'react-parallax';
import Fade from 'react-reveal/Fade';

class Contact  extends Component {
  state = {
    username:'',
    email:'',
    textAreaMessage:'',
    message:'',

    errors:{
      username:false,
      email:false,
      textAreaMessage:false,
    }
  } 

  messages = {
    username_incorrect:'Your name should have more than 2 letters!',
    email_incorrect:'You forgot @ in your e-mail!',
    textAreaMessage_incorrect:'The message should containt at least 10 characters!',
  }

  handleChange = (e) => {

    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    })
  }

  handleSubmit = (e) => {

    e.preventDefault()
    const validation = this.formValidation()

    if(validation.correct){
      this.setState({
        username:'',
        email:'',
        textAreaMessage:'',
        message:'The form is currently unavailable. Please send an email.',
    
        errors:{
          username:false,
          email:false,
          textAreaMessage:false,
        }
      })
    } else{
      this.setState({
        errors:{
          username: !validation.username,
          email:!validation.email,
          textAreaMessage:!validation.textAreaMessage,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let email = false;
    let textAreaMessage =false;
    let correct =false;

    if(this.state.username.length > 2){
      username = true
    }

    if(this.state.email.indexOf('@') !== -1){
      email = true
    }

    if(this.state.textAreaMessage.length > 10){
      textAreaMessage = true
    }

    if(username && email && textAreaMessage ){
      correct= true
    }

    return({
      username,
      email,
      textAreaMessage,
      correct 
    })
  }

  componentDidUpdate(){
    if(this.state.message!==''){
      setTimeout(() => this.setState({
        message:''
      }),3000)
    }
  }

  render() { 
    return ( 
      <Parallax bgImage={require('../../../assets/backgrounds/Background_Contact.jpg')} strength={500}>
        <Fade clear duration={3000}>
          <div className='contact' id='Contact'>
            <div className='row d-flex justify-content-center'>
              <div className='contact-title'>
                  Contact 
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='contact-sub-title'>
                Are you interested in my person? Please send me e-mail to: skkarolinav@gmail.com 
                <a href='mailto:skkarolinav@gmail.com'>
                  <i className='fas fa-envelope'></i>
                </a>
              </div>
            </div>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className='row d-flex align-items-center'>
                <div className='col-md-12 hihi'>
                  <div className='form-group d-flex justify-content-center'>
                    <label htmlFor='user'>Name
                      <input className='form-control' type='text' id='user'name='username' placeholder='Your name' value={this.state.username} onChange={this.handleChange}/>
                      {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
                    </label>
                  </div>
                  <div className='form-group d-flex justify-content-center'>
                    <label htmlFor='email'>Email
                      <input className='form-control' type='email' id='email' name='email' placeholder='Your mail' value={this.state.email} onChange={this.handleChange}/>
                      {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                    </label>
                  </div>
                  <div className='form-group d-flex justify-content-center'>
                    <label htmlFor='textArea'>Message
                      <textarea className='form-control' type='textarea' id='textArea' name='textAreaMessage' placeholder='Your message' cols='30' rows='10' value={this.state.textAreaMessage} onChange={this.handleChange}/>
                      {this.state.errors.textAreaMessage && <span>{this.messages.textAreaMessage_incorrect}</span>}
                    </label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-dark contact-button'>Send</button>
                    {this.state.message && <h4>{this.state.message}</h4>}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Parallax>
    )
  }    
}
 
export default Contact;