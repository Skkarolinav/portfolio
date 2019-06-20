import React from 'react';
import ReactSVG from 'react-svg'

import icon_html from '../../../assets/icons/SVG_HTML.svg'
import icon_css from '../../../assets/icons/SVG_CSS.svg'
import icon_js from '../../../assets/icons/SVG_JS.svg'
import icon_git from '../../../assets/icons/SVG_Git.svg'
import icon_npm from '../../../assets/icons/SVG_NPM.svg'
import icon_photoshop from '../../../assets/icons/SVG_Photoshop.svg'
import icon_xd from '../../../assets/icons/SVG_Xd.svg'
import icon_teamwork from '../../../assets/icons/SVG_Teamwork.svg'

import icon_es6 from '../../../assets/icons/SVG_ES6.svg'
import icon_react from '../../../assets/icons/SVG_React.svg'
import icon_router from '../../../assets/icons/SVG_Router.svg'
import icon_bootstrap from '../../../assets/icons/SVG_Bootstrap.svg'

import icon_redux from '../../../assets/icons/SVG_Redux.svg'
import icon_sass from '../../../assets/icons/SVG_Sass.svg'
import icon_vue from '../../../assets/icons/SVG_Vue.svg'

export const skillsArray = [
    {
        title:'HTML', 
        photo:<ReactSVG src={icon_html} alt='HTML'/>, 
        desc:'I try to make semantic pages using the latest standards of HTML5 and BEM methodology. '
    },
    {
        title:'CSS', 
        photo:<ReactSVG src={icon_css} alt='CSS'/>, 
        desc:'When using CSS I am trying to provide the most aesthetic projects. I am well aware of concepts as responsive web design, flexbox and grid.'
    },
    {
        title:'JS', 
        photo:<ReactSVG src={icon_js} alt='JS'/>, 
        desc:'I know the basics of JavaScript and one of its framework which is React.js. It allows me to create simple and advanced applications and web sites.'
    },
    {   title:'Git', 
        photo:<ReactSVG src={icon_git} alt='Git'/>, 
        desc:'I am well aware of the core basics of Git. It is my essential tool when working in group projects but I use it also when I am doing projects on my own.'
    },
    {
        title:'NPM', 
        photo:<ReactSVG src={icon_npm} alt='NPM'/>, 
        desc:'I am aware of how to deal with the largest software registry. I use it to install various libraries.'
    },
    {
        title:'Photoshop', 
        photo:<ReactSVG src={icon_photoshop} alt='Photoshop XD'/>, 
        desc:'I started using photoshop many years ago even before learning front end development. I am able to deal with the basics concept of graphic managament.'
    },
    {
        title:'Adobe Xd', 
        photo:<ReactSVG src={icon_xd} alt='Adobe XD'/>, 
        desc:'When preparing a website or an application, I use Adobe Xd for better a planning of my website. '
    },    
    {
        title:'Teamwork', 
        photo:<ReactSVG src={icon_teamwork} alt='Teamwork'/>, 
        desc:'I am positive, open and social person. I really enjoy working as a member of a team who could provide some useful contribution.'
    },
]


export const technologiesArray= [
    {
        title:'ES6', 
        photo:<ReactSVG src={icon_es6} alt='ES6'/>, 
        desc:'I started learning JS when ES6 was already out and because of that I am up to date.'
    },
    {
        title:'React', 
        photo:<ReactSVG src={icon_react} alt='React'/>, 
        desc:'React.js is my first framework which is user-friendly and allows me to create simple and advanced projects. '
    },
    {
        title:'React Router', 
        photo:<ReactSVG src={icon_router} alt='React Router'/>, 
        desc:'Because of the react router I am able to create multi-page applications and websites with the modern techiques.'
    },
    {
        title:'Bootstrap', 
        photo:<ReactSVG src={icon_bootstrap} alt='Bootstrap'/>, 
        desc:'Bootstrap is a great tool which allows me to create a responsive website or an application. I like to use it because of its transparency and simplicity.'
    },
]

export const futureTechnologiesArray= [
    {
        title:'Redux', 
        photo:<ReactSVG src={icon_redux} alt='React Redux'/>, 
        desc:'Redux is a great extension tool for React.js which allows to write applications that behave consistently. It is definitely worth time to learn it.'
    },
    {
        title:'Sass', 
        photo:<ReactSVG src={icon_sass} alt='Sass'/>, 
        desc:'When developing complex websites I found out that there is a postprocessor called Sass which improves CSSing expotentially.'
    },
    {
        title:'Vue', 
        photo:<ReactSVG src={icon_vue} alt='Vue'/>, 
        desc:'I would really like to learn the next powerful framework which is Vue.'
    },
]