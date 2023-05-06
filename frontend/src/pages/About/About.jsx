import React from 'react'
import Header from '../../components/user/jsx/Header'
import AboutBanner2 from '../../components/About/jsx/AboutBanner2'
import Carreer from '../../components/About/jsx/Carreer';
import Join from '../../components/About/jsx/Join';
import Community from '../../components/About/jsx/Community';
import AboutFooter from '../../components/About/jsx/AboutFooter';
import Doubt from '../../components/About/jsx/Doubt';
function About() {
  return (
    <>
    <Header/>
    <AboutBanner2/>
    <Carreer/>
    <Join/>
    <Community/>
    <Doubt/>
    <AboutFooter/>
    </>
  )
}

export default About