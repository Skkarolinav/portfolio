import React from 'react';
import {Link} from 'react-scroll';

const titlesNav = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Contact'
]

const Navigation = () => { 

    const tableNav = titlesNav.map(item => (
        <li className='nav-item '>
            <Link className='nav-link' activeClass='active' to={item} spy={true} smooth={true} offset={0} duration={500}>
                {item}
            </Link>
        </li>
    ))
 
    return ( 
        <>
            <div className='navbar navbar-expand-lg navbar-dark container green borderXwidth  '>
                <Link className='navbar-brand ' to='#'>
                    <strong>SKV</strong>
                </Link> 
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {tableNav}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigation;