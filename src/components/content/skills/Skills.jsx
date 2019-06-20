import React from 'react';
import Fade from 'react-reveal/Fade';

import {skillsArray} from './SkillsArrays'
import {technologiesArray} from './SkillsArrays'
import {futureTechnologiesArray} from './SkillsArrays'

const Skills = () => {

    const skillsMap = skillsArray.map(item =>(
        <div className='row'>
            <Fade left>
                <div className='col-md-2 images'>
                    {item.photo}
                    {item.title}
                </div>
                <div className='col-md-10 skills-description'>
                    {item.desc}
                </div>
            </Fade>
        </div>
    ))

    const technologiesMap = technologiesArray.map(item=>(
        <div className='row'>
            <Fade right>
                <div className='col-md-2'>
                    {item.photo}
                    {item.title}
                </div>
                <div className='col-md-10 skills-description'>
                    {item.desc}
                </div>
            </Fade>
        </div>
    ))

    const futureTechnologiesMap = futureTechnologiesArray.map(item=>(
        <div className='row'>
            <Fade right>
                <div className='col-md-2'>
                    {item.photo}
                    {item.title}
                </div>
                <div className='col-md-10 skills-description'>
                    {item.desc}
                </div>
            </Fade>
        </div>
    ))

    return ( 
        <div className='skills' id='Skills'>
            <div className='row d-flex justify-content-center'>
                <Fade clear duration={3000}>
                    <div className='skills-title' >
                        Skills
                    </div>
                </Fade>
            </div>
            <div className='row '>
                <div className='col col-12 col-lg-6'>
                    <Fade clear duration={3000}>
                        <div className='skills-sub-title'>
                            Skills
                        </div>
                    </Fade>
                    <div className='skills-my-col'>
                        {skillsMap}
                    </div>
                </div>
                <div className='col col-12 col-lg-6 '>
                    <Fade clear duration={3000}>
                        <div className='skills-sub-title'>
                            Technologies
                        </div>
                    </Fade>
                    <div className='skills-my-col '>
                        {technologiesMap}
                        <div className='row'>
                            <div className='col'>
                                <Fade clear duration={3000}> 
                                    <p className='skills-future'>
                                        In the near future I am going to learn:
                                    </p>
                                </Fade>
                                {futureTechnologiesMap}
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Skills;