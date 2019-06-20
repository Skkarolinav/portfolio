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
        <li class='nav-item '>
            <Link className='nav-link' activeClass='active' to={item} spy={true} smooth={true} offset={0} duration={500}>
                {item}
            </Link>
        </li>
    ))
 
    return ( 
        <>
            <div class='navbar navbar-expand-lg navbar-dark container green borderXwidth  '>
                <Link class='navbar-brand ' to='#'>
                    <strong>SKV</strong>
                </Link> 
                <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarNav'>
                    <ul class='navbar-nav'>
                        {tableNav}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigation;