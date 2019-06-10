import React from 'react';

import kitPhotography from '../../../assets/images/projects/Kit_Photography_Website.png'
import kitDentistry from '../../../assets/images/projects/Kit_Dentistry_Website.png'
import kitInteriorFinishing from '../../../assets/images/projects/Kit_Interior_Finishing_Website.png'

import kitWeather from '../../../assets/images/projects/Kit_Weather_Application.png'
import kitExchangeCurrency from '../../../assets/images/projects/Kit_Exchange_Currency_Application.png'
import kit2DHistogram from '../../../assets/images/projects/Kit_2D_Histogram_Application.png'

export const tableProjectsWeb = [
    {
        title: 'Website for a Photographer', 
        photo: <img src={kitPhotography} alt='Photography Website'/>, 
        desc: 'Currently I am working on a commercial multi page website for a photographer.', 
        btn1: 'Soon!'
    },
    {
        title: 'Website for a Dental Clinic', 
        photo: <img src={kitDentistry} alt='Dentistry Website'/>, 
        desc: 'Commercial single page website created for a dental clinic.', 
        btn1: <i class="fas fa-globe"> www </i>, 
        address: 'http://dentimaleki.pl/#/'
    },
    {
        title: 'Website for a Building Company', 
        photo: <img src={kitInteriorFinishing} alt='Interior Finishing Website'/>, 
        desc: 'Commercial single page website created for an interior finishing company.', 
        btn1: <i class="fas fa-globe"> www </i>,
        address: 'http://walldone-remonty.pl/#/'
    },
]

export const tableProjectsApps = [
    {
        title: 'Exchange Curency Converter', 
        photo: <img src= {kitExchangeCurrency} alt='Exchange Currency Converter'/>, 
        desc: 'Application designed for converting one currency into another out of more than 30 currencies. Based on the daily exchange ratios. ', 
        btn1: <i className="fab fa-github"> Code </i>,
        btn2: <i className="fab fa-github"> Live </i>,
        address1: 'https://github.com/Skkarolinav/exchange-currency-app',
        address2: 'https://skkarolinav.github.io/exchange-currency-app/'
    },
    {
        title: 'Weather Check', 
        photo: <img src={kitWeather} alt='Weather Check'/>, 
        desc: 'Application presenting current temperature, time of sunrise and sunset, pressure and wind velocity of a city you want to check.', 
        btn1: <i className="fab fa-github"> Code </i>,
        btn2: <i className="fab fa-github"> Live </i>,
        address1: 'https://github.com/Skkarolinav/weather-app',
        address2: 'https://skkarolinav.github.io/weather-app/'
    },
    {
        title: '2D Histogram Generator', 
        photo: <img src={kit2DHistogram} alt='2D Histogram Generator'/>, 
        desc: 'One of my first application. Developed for the university purpose. It loads two txt files with measurements data and based on that it creates 2D histograms. See readme if you want to make it work!', 
        btn1: <i className="fab fa-github"> Code </i>,
        btn2: <i className="fab fa-github"> Live - soon </i>,
        address1: 'https://github.com/Skkarolinav/2d-histogram',
    },
]