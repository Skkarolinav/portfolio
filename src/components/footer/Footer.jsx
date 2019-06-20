import React from 'react';

const Footer = () => {
  return ( 
    <div className='footer d-flex justify-content-between'>
      <span>
        Karolina Banasiewicz 
      </span>
      <span>
        <a href='mailto:skkarolinav@gmail.com'>
          <i className='fas fa-envelope'></i>
        </a>
        <a href='https://github.com/Skkarolinav' target='_blank'>
          <i class='fab fa-github-square'></i> 
        </a>
        <a href='https://www.linkedin.com/in/karolina-banasiewicz-661a00188/' target='_blank'>
          <i class='fab fa-linkedin'></i>
        </a>
        <a href='https://www.facebook.com/banasiewicz.karolina' target='_blank'>
          <i class='fab fa-facebook-square'></i>
        </a>
      </span>
    </div>
  );
}
 
export default Footer;