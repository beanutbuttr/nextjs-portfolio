'use client'
import styled from 'styled-components'
import LandingPage from './landing'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image'

const HomePage = styled.body`
  margin: 215px 135px;
  background: #161619;
  color: white;
  // display: flex;
`

export default function Home() {
  return (
    <HomePage>
      <LandingPage />
      
    </HomePage>
  )
}


// <script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>