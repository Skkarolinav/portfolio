import React from 'react';
import Fade from 'react-reveal/Fade';

import {tableProjectsWeb} from './ProjectsArray';
import {tableProjectsApps} from './ProjectsArray';

const Projects = () => {

    const webMap = tableProjectsWeb.map(item =>(
        <Fade bottom>
            <div className='col-11 col-md-5 my-col-a'>
                <div className='projects-sub-title'>
                    {item.title}
                </div>
                <div className='row d-flex justify-content-center'>
                    <div>
                        <a href={item.address} target='_blank'>
                            {item.photo}
                        </a>
                    </div>
                    <div className='row projects-description my-col-b'>
                        {item.desc}
                    </div>
                </div>
                <a href={item.address} target='_blank'>
                    <button className='row btn btn-dark projects-button'>
                        {item.btn1}
                    </button>
                </a>
            </div>
        </Fade>
    ))

    const appMap = tableProjectsApps.map(item =>(
        <Fade bottom>
            <div className='col-md-5 my-col-a'>
                <div className='projects-sub-title'>
                    {item.title}
                </div>
                <div className='row d-flex justify-content-center'>
                    <div>
                        <a href={item.address2} target='_blank'>   
                            {item.photo}
                        </a>
                    </div>
                    <div className='row projects-description my-col-b'>
                        {item.desc}
                    </div>
                </div>
                <div className='row'>
                    <a href={item.address1} target='_blank'>
                        <button className='btn btn-dark projects-button'>
                            {item.btn1}
                        </button>
                    </a>
                    <a href={item.address2} target='_blank'>
                        <button className='btn btn-dark projects-button'>
                            {item.btn2}
                        </button>
                    </a>
                </div>
            </div>
        </Fade>
    ))
    
    return ( 
        <div className='projects' id='Projects'>
            <Fade clear duration={3000}>
                <div className='row d-flex justify-content-center'>
                    <div className='projects-title'>
                        Projects
                    </div>
                </div>
            </Fade>
            <Fade clear duration={3000}>
                <div className='row projects-sub-title d-flex justify-content-center'>
                    Websites
                </div>
            </Fade>
            <div className='row d-flex justify-content-center'>
                {webMap} 
            </div>
            <Fade clear duration={3000}>
                <div className='row projects-sub-title d-flex justify-content-center'>
                    Applications
                </div>
            </Fade>
            <div className='row d-flex justify-content-center'>
                {appMap}
            </div>
        </div>
     );
}
 
export default Projects;