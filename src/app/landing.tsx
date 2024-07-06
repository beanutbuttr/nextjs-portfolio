// 'use client'
import styled from 'styled-components'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image';
import Link from 'next/link'
import floatingHead from './assets/floating-head-one-rotation-white.gif'

const Landing = styled.div`
  display: flex;
  // min-height: 80vh;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 215px 135px 0px;

  @media (max-width: 480px) {
   margin: 40px;
  }
`

const Name = styled.div`
  font-size: 40px;
  font-family: ${scadaTitle.style};
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
    color: #389012;
    &:hover {
      color: #0d2801;
    }
  }
`

export default function LandingPage() {
  return (
    <Landing>
      <Name>
        Beatrice Hoang
        <ImageContainer>
          <Image src={floatingHead} alt="Loading Beatrice 3D scan" />
        </ImageContainer>
        
      </Name>
      <Description>
        is a software engineer / multimedia artist based in Boston, currently an intern at Microsoft
        and an experimental filmmaker.
        <ParagraphSpace/>
        Beatrice in her last year at Brown University studying Computer Science and Modern Culture &
        Media. Her senior thesis film, working title <i>My Sight is Lined with Visions</i>,
        is currently in-progress. Of course it involves compact cameras, code, and a lot of experimenting.
        <ParagraphSpace/><ParagraphSpace/>
        {/* <Arrow>&darr;</Arrow> */}
        
        
        <PagesBar>
          <PageName>
            <Link href='/film'>Film</Link>
          </PageName>
          
          <PageName>
            <Link href='./'>Code</Link>
          </PageName>

          {/* <PageName>
            <Link href='./'>Art</Link>
          </PageName> */}

          <PageName>
            <Link href='/about'>About</Link>
          </PageName>

        </PagesBar>
      </Description>
      
    </Landing>
  )
}
