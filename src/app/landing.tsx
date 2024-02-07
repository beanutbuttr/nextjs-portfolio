'use client'
import styled from 'styled-components'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image'

const Landing = styled.div`
  display: flex;
  // height: 80vh;
  flex-wrap: wrap;
  justify-content: space-between;
  // margin: 215px 135px;
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

const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */  
  padding-top: 25px;
  margin-left: 15px;
  // width: 300%; /* enlarge beyond browser width */
  // left: -100%; /* center */
`

const YoutubeFrame = styled.iframe`
  position: absolute; 
  clip-path: inset(10px);
  top: 0; 
  left: 0; 
  // width: 50%; 
  // height: 100%;
`

const PagesBar = styled.div`
  display: flex;
  // width: 60%;
  // justify-content: space-between;
`

const PageName = styled.div`
  // width: 150px;
  margin-right: 40px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
`

const Arrow = styled.h1`
  font-size: 30px;
  font-weight: 700;
`

export default function LandingPage() {
  return (
    <Landing>
      <Name>
        Beatrice Hoang

        <YoutubeContainer>
          <YoutubeFrame
            width="255"
            height="300"
            src="https://www.youtube.com/embed/9IjCsnUrxmY?autoplay=1&showinfo=0&controls=0&loop=1&mute=1&playlist=9IjCsnUrxmY"
            title="rotating head"
            frameBorder="0"
            allow="autoplay">
          </YoutubeFrame>
        </YoutubeContainer>
        
      </Name>
      <Description>
        is a software engineer / multimedia artist based in Boston, an incoming intern at Microsoft
        and an experimental filmmaker.
        <ParagraphSpace/>
        I'm in my last year at Brown University studying Computer Science and Modern Culture &
        Media. My senior thesis film is in-progress, and you can bet it involves compact cameras,
        multiple screens, coding, and a lot of experimenting.
        <ParagraphSpace/><ParagraphSpace/>
        <Arrow>&darr;</Arrow>
        {/* <PagesBar>
          <PageName>
            Work &darr;
            </PageName>
          
          <PageName>
            More about me &darr;
          </PageName>

          <PageName>
            Contact &darr;
          </PageName>
        </PagesBar> */}
      </Description>
      
    </Landing>
  )
}
