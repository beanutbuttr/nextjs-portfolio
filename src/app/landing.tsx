'use client'
import styled from 'styled-components'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image'

const Landing = styled.div`
  display: flex;
  // margin: 215px 135px;
`

const Name = styled.div`
  font-size: 40px;
  font-family: ${scadaTitle.style};
  width: 600px;
`

const Description = styled.div`
  font-family: ${scadaBody.style};
  font-size: 20px;
  padding: 20px 0px;
  width: 760px;
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
  width: 50%; 
  height: 100%;
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

export default function LandingPage() {
  return (
    <Landing>
      <Name>
        Beatrice Hoang

        <YoutubeContainer>
          <YoutubeFrame
            width="255"
            height="454"
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
        She's in her last year at Brown University studying Computer Science and Modern Culture &
        Media. Her senior thesis film is in-progress, and you can bet it involves compact cameras,
        multiple screens, coding, and a lot of experimenting.
        <ParagraphSpace/><ParagraphSpace/>

        <PagesBar>
          <PageName>
            Projects
            <Image
              src="/white-down-arrow.png"
              width={25}
              height={20}
              alt="white down arrow"
            />
            </PageName>
          
          <PageName>
            More about me
            <Image
              src="/white-down-arrow.png"
              width={25}
              height={20}
              alt="white down arrow"
            />  
          </PageName>

          <PageName>
            Contact
            <Image
                src="/white-down-arrow.png"
                width={25}
                height={20}
                alt="white down arrow"
              />
          </PageName>
        </PagesBar>
      </Description>
      
    </Landing>
  )
}
