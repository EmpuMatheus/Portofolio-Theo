import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import TechMarquee from '../sections/TechMarquee'
import About from '../sections/About'
import Skills from '../sections/Skills'
import WhatIBuild from '../sections/WhatIBuild'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Philosophy from '../sections/Philosophy'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <WhatIBuild />
      <Projects />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </>
  )
}
