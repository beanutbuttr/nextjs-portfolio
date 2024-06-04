// 'use client'
import styled from 'styled-components'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image'
import Popup from 'reactjs-popup'; 
import Link from 'next/link'

const ProjectsPage = styled.div`
  width: auto;
`

const SectionHeader = styled.div`
  font-family: ${scadaTitle.style};
  font-size: 25px;
`

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 40px;
  flex-wrap: wrap;
  margin: 20px 0;
`

const StyledProject = styled.div`
  width: 300px;
  max-width: 100%;
  // padding: 15px;
  // background: white;
  // border-radius: 15px;
  // box-shadow: 0px 0px 5px white;
`

const ProjectText = styled.div`
  // background: #6DAB5D;
  // border-radius: 0 0 15px 15px;
  // border: 2px solid black;
  border-bottom: 1px solid grey;
  padding: 5px 0px;
  // color: #161619;
  color: #6DAB5D
`

const ProjectTitle = styled.div`
  font-family: ${scadaBody.style};
  font-size: 20px;
  // border-bottom: 1px solid #6DAB5D;
  // color: white;
`

const ProjectDescription = styled.div`
  font-family: ${scadaBody.style};
  font-size: 16px;
  color: grey;

  a {
    &:hover {
      color: white;
    }
  }

  button {
    &:hover {
      color: white;
    }
  }
`

const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(22, 22, 25, .5)
  }

  &-content {
    // padding: 430px 135px;
    // margin: 215px 135px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    padding: 20px;
    font-family: ${scadaBody}
    background: rgba(255, 255, 255, .85);
    color: black;
    border-radius: 5px;
  }

`

const StyledPopupDescription = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  justify-content: space-between;
  width: 600px;
  max-width: 100%;

  h1 {
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
  }

  a {
    &:hover {
      color: green;
    }
  }
`

const StyledIframe = styled.iframe`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`

const StyledImage = styled.img`
  width: 100%;
  // height: 
  border-radius: 10px;
`

const FilmProject = (props:
  { title: string, year: string, description: string, source: string, medium: string }
) => {
    return(
      <StyledProject>

          <StyledImage
              src={props.source}
              alt={"still from " + props.title}
          />

        <ProjectText>
          <ProjectTitle>
            {props.title + " (" + props.year + ")"}
          </ProjectTitle>
          <ProjectDescription>
            <StyledPopup
              trigger={<button>More Info</button>}
              // position="right center"
              modal
              closeOnDocumentClick
              >
                <Image
                width={320}
                height={180}
                src={props.source}
                alt={"still from " + props.title}
                />
                <StyledPopupDescription>
                  <div>
                    <h1>{props.title}</h1>
                    {props.description}
                    </div>
                  <div>{props.year + ". " + props.medium}</div>
                  <a href={"mailto:beatricehhoang@gmail.com?subject=Requesting Access To "+props.title}>Request Access</a>
                </StyledPopupDescription>
                

            </StyledPopup>
            {/* <div>{props.description}</div> */}
            <br/>
            <a href={"mailto:beatricehhoang@gmail.com?subject=Requesting Access To "+props.title}>Request Access</a>
          </ProjectDescription>
        </ProjectText>
        
      </StyledProject>
    )
  
}

const CodeProject = (props:
  { title: string, year: string, source: string, medium: string, linkto: string }
) => {
    return(
      <StyledProject>

          <StyledImage
              src={props.source}
              alt={"still for " + props.title}
          />

        <ProjectText>
          <ProjectTitle>
            {props.title + " (" + props.year + ")"}
          </ProjectTitle>
          <ProjectDescription>
            <StyledPopup
              trigger={<button>More Info</button>}
              // position="right center"
              modal
              closeOnDocumentClick
              >
                <Image
                width={320}
                height={180}
                src={props.source}
                alt={"still from " + props.title}
                />
                <StyledPopupDescription>
                  <div>
                    <h1>{props.title}</h1>
                    </div>
                  <div>{props.year + ". " + props.medium}</div>
                  <a href={"mailto:beatricehhoang@gmail.com?subject=Requesting Access To "+props.title}>Request Access</a>
                </StyledPopupDescription>
                

            </StyledPopup>
            {/* <div>{props.description}</div> */}
            <br/>
            <a href={"mailto:beatricehhoang@gmail.com?subject=Requesting Access To "+props.title}>Request Access</a>
          </ProjectDescription>
        </ProjectText>
        
      </StyledProject>
    )
  
}

export default function Projects() {
  return (
    <ProjectsPage>
      <SectionHeader>Code Works</SectionHeader>
      <Link href={"/Maxpreps"}>amxrpes</Link>
      <ProjectsGrid>

      </ProjectsGrid>

      <SectionHeader>Films</SectionHeader>
      <ProjectsGrid>
        <FilmProject
          title='J.'
          year='2023'
          description='I sit around Boston, my favorite city,
           on a portable ottomon while telling a story about M. I voice over in broken Vietnamese.'
          medium='Digital Video. 20 min.'
          source='/film-stills/J-still-2.jpeg'
          />

        <FilmProject
          title='Thunderstruck'
          year='2023'
          description='An autobiographical re-enactment of Takashi Ito’s Thunder. Flashing lights
          explode across an apartment as images of a naked woman in bed flicker in and out. Light
          paintings and projections illuminate a claustrophobic space of confrontation. Thunderstruck 
          uses Ito’s techniques as a point of departure, deconstructing and queering this assault 
          on the senses.'
          medium='Digital Video. 4 min.'
          source='/film-stills/thunderstruck-still.jpg'
          />

        <FilmProject
          title='Plenty of time'
          year='2023'
          description='I read my thoughts from paper as I pace around a chair and my audio recorder,
          and I make a careless attempt at playing the piano.
          Meanwhile, a 3D model modulates to the vocals of There Was Plenty Of Time Before Us by Deem Spencer.'
          medium='Digital Video. 12 min.'
          source='/film-stills/there-was-plenty-of-time-still.jpeg'
          />

        <FilmProject
          title='Dear Boston'
          year='2022'
          description='A girl’s first trip to Boston, told through voiceover and images of the city.
          A love letter to my favorite New England city.'
          medium='Digital Video. 4 min.'
          source='/film-stills/dear-boston-still.jpeg'
          />

        <FilmProject
          title='Growing Up'
          year='2022'
          description='"Growing Up" is a found footage film about my childhood experience, using 23 
          various films to capture loose events of my childhood and explore my growth.'
          medium='Digital Video. 4 min.'
          source='/film-stills/growingup-still.jpg'
          />


      </ProjectsGrid>

    </ProjectsPage>
    
  )
}
