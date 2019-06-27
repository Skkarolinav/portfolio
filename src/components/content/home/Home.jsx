import React from 'react';
import {Parallax} from 'react-parallax';
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return ( 
        <>
            <div className='home' id='Home'>
                <Parallax bgImage={require('../../../assets/backgrounds/Background_Home.jpg')} strength={500}>
                    <div className='row home-my-row'>
                        <div className='col-sm-12 col-md-7'>
                            <Fade clear duration={2000}>
                                <div className='home-title'>
                                    Hi! I'm Karolina
                                </div>
                                <div className='home-sub-title'>
                                    Junior Front-End Developer
                                </div>
                                <div className='home-description'>
                                    I am very happy to see you here! I hope you find my porfolio interesting.
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Parallax>
            </div>
            <Link className='arrow jump' activeClass='active' to={'About'} spy={true} smooth={true} offset={0} duration={500}>
                <i className='fas fa-arrow-alt-circle-down'></i>
            </Link>
        </>
     );
}

export default Home;