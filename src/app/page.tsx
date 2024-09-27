'use client'
import styled from 'styled-components'
import LandingPage from './landing'
import FilmsSection from './films'
import Contact from './Components/Contact'


export default function Home() {
  return (
    <body>
      <LandingPage />
      {/* <Projects/> */}
      <FilmsSection />
      <Contact />
    </body>
  )
}


// <script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>