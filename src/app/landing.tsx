// 'use client'
import styled from 'styled-components'
import { scadaBody, scadaTitle, scadaTitleItalic } from './fonts'
import Image from 'next/image';
import Link from 'next/link'
import floatingHeadWhite from './assets/floating-head-one-rotation-white.gif'
import floatingHeadBlack from './assets/floating-head-one-rotation.gif'

const Landing = styled.div`
  display: flex;
  // min-height: 80vh;
  flex-wrap: wrap;
  justify-content: space-between;

`

const Name = styled.div`
  font-size: 40px;
  font-family: ${scadaTitleItalic.style};
  width: 400px;
  max-width: 100%;
  height: 400px;
`

const Description = styled.div`
  font-family: ${scadaBody.style};
  font-size: 20px;
  padding: 20px 0px;
  width: 600px;
  max-width: 100%;

  a {
    text-decoration: underline;
  }
`

const ParagraphSpace = styled.div`
  height:20px;
`

const ImageContainer = styled.div`
  img {
    width: 255px;
    height: 300px;
    margin: auto;
  }
`

const Arrow = styled.div`
  font-size: 30px;
`

const PagesBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  // width: 60%;
  // justify-content: space-between;
`

const PageName = styled.div`
  // width: 150px;
  // margin-right: 40px;
  border-bottom: 1px dotted grey;
  display: flex;
  justify-content: space-between;

  a {
    // color: #389012;
    color: #7fde57;
    &:hover {
      color: #d2f2c4;
    }
  }
`

export default function LandingPage() {
  return (
    <Landing>
      <Name>
        Beatrice Hoang
        <ImageContainer>
          <Image src={floatingHeadBlack} alt="Beatrice 3D scan" />
        </ImageContainer>
        
      </Name>
      <Description>
        is 
        <a href="https://64.media.tumblr.com/d3b17f7991ff224000ec15be8c2f3dd8/74297cf98aab5969-a3/s1280x1920/f9683182e5cb6ac21c71c8fcf391f09d91d00d0f.png"> looking for an angel
        </a>
        , watching <a href="https://lh4.googleusercontent.com/proxy/ieuB0CVpCzXl1ntvZyTAfgif3lmZni87lPVKLWJ3f8EpdQCSLd5S0YOSaDuIGvN2UlInaQnxkoqg6V_mouk-FEA7dkGvhPmjqX8MdYYpYmXF_6pB2U20gVkVamoHlNdaigiT">
           Love & Pop
        </a>, a DC AU devotee and 
        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:aa0fbc29-d84d-4c0e-8f67-4a09655bb271"> 360p 90s/00s Asian video</a> lover.
        {/* is a multimedia artist / software engineer based in Boston, an incoming software engineer at Microsoft
        and an experimental filmmaker. */}
        {/* <ParagraphSpace/>
        Beatrice is finishing her studies at Brown University in Computer Science and Modern Culture &
        Media. Her thesis film, <i>My Sight is Lined with Visions</i>,
        is currently in-progress. Of course it involves compact cameras, surveillance aesthetics, code, and a lot of experimenting. */}
        <ParagraphSpace/><ParagraphSpace/>
        <Arrow>&darr;</Arrow>
        
        
        {/* <PagesBar>
          <PageName>
            <Link href='/film'>Film</Link>
          </PageName>
          
          <PageName>
            <Link href='./'>Code</Link>
          </PageName>

          <PageName>
            <Link href='/about'>About</Link>
          </PageName>

        </PagesBar> */}

      </Description>
      
    </Landing>
  )
}
