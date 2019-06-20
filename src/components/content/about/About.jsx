import React , { Component } from 'react';
import Fade from 'react-reveal/Fade';

import photoOfMe from '../../../assets/images/pictures/Photo_of_Me.jpg'
import myCV from '../../../assets/cv/My_CV.pdf' 

class About extends Component {
    state={
        
    }
    render(){
        return (  
            <div className='about' id='About'>
                <Fade clear duration={3000}>
                    <div className='row d-flex justify-content-center'>
                        <div className='about-title'>
                            About Me
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='row '>
                        <div className='col-sm-12 col-lg-5 photo-of-me'>
                            <img src={photoOfMe} alt='My portrait'/>
                        </div>
                        <div className='row col-sm-12 col-lg-6 about-description'>
                            <div className='row col-sm-12 col-md-12'>
                                A lot of people say that they have always wanted to become someone specific, that they have dreamed about it their whole life even 
                                when they were children, like to become an astronaut, a singer or US president. 
                                In my case I knew I didn't have much chances of becoming US president so it was a little bit different for me. 
                                I was discovering for quite a while what kind of work I am best suited for. 
                                Because one thing is to work but the second thing is to work with passion, satisfaction and joy so that you are fulfilled and happy!
                                I was studying electrotechnics and physics and there I have learnt the basics of programming in C#, C++ and Python. 
                                But then I discovered the front-end software development and I knew that was it.
                                What was the factor that drived me into this? I would say that this work ensures constant self-development as anything can change in any time 
                                and except for that... I really enjoy it!
                            </div>
                            <div className='row col-sm-12 col-md-12'>
                                I am looking for junior front-end position or an internship. At the moment I program various applications and websites. I work mainly using React.js.
                            </div>
                            <div className='row col-sm-12 col-md-12'>
                                Please visit links below for more information!
                            </div>
                        </div>
                    </div>
                    <div className='row my-row d-flex justify-content-center'>
                        <a href={myCV} target='_blank'>
                            <button className='btn btn-dark about-button'>
                                Curriculum Vitae
                            </button>
                        </a>
                        <a href='https://github.com/Skkarolinav' target='_blank'>
                            <button className='btn btn-dark about-button'>
                                GitHub Profile
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/karolina-banasiewicz-661a00188/' target='_blank'>
                            <button className='btn btn-dark about-button'>
                            LinkedIn Profile
                            </button>
                        </a>
                    </div>
                </Fade>
            </div>
        );
    }
}
export default About;