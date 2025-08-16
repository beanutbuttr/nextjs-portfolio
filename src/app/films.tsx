import styled from 'styled-components'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image';

const StyledFilmProject = styled.div`
  display: flex;
  // gap: 40px;
  border-top: 2px solid grey;
  padding: 25px 0 60px;
  div {
  // border: 2px solid green;
  }
  @media (max-width: 480px) {
   display: block;
   justify-content: center;
  }
  flex-wrap: wrap;
  justify-content: space-between;

`

const StyledFilmProjectTextBox = styled.div`
  width: 40%;
  min-width: 200px;
  margin: 0 0 10px;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const StyledFilmProjectDescription = styled.div`
  font-family: ${scadaBody.style};
  font-size: 18px;
`

const StyledFilmProjectTitle = styled.div`
  font-family: ${scadaTitle.style};
  font-size: 18px;
  border-bottom: 1px solid #2d2d32;
  margin: 0 0 10px;
  padding: 0 0 10px;
`

const StyledIframe = styled.div`
  width: 30%;
  min-width: 200px;
  iframe {
    // width: 360px;
    width: 100%;
  }

  @media (max-width: 480px) {
    iframe {
     width: 100%;
     min-width: 200px;
    }
  }
`

const StyledPoster = styled.div`
  width: 15%;
  min-width: 200px;
  margin: 0 0 20px;
  img {
    width: 100%;
    min-width: 200px;
    // height: 100%;
    border-radius: 8px;
  }
`

function FilmProject(props: {
  im_path: string,
  title: string,
  description: string,
  date: string,
  length: string,
  link: string
}) {
  return (
    <StyledFilmProject>
      
      <StyledPoster>
        <img src={props.im_path} alt="Beatrice 3D scan"/>
      </StyledPoster>
      
      <StyledFilmProjectTextBox>
        <StyledFilmProjectTitle>{props.title} | {props.date} | {props.length}</StyledFilmProjectTitle>
        <StyledFilmProjectDescription>{props.description}</StyledFilmProjectDescription>
      </StyledFilmProjectTextBox>
      <StyledIframe>
        <iframe width="400" height="300" src={props.link} title="Memory of our betters — 2024 Short Film" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </StyledIframe>
      
      
      
    </StyledFilmProject>
  )
}

const StyledFilmSectionTitle = styled.div`
  font-size: 32px;
  font-family: ${scadaTitle.style};
  margin: 20px 0;
`

export default function FilmsSection() {
  return (
    <div>
      <StyledFilmSectionTitle>Film/Video</StyledFilmSectionTitle>

      <FilmProject
        im_path={'/film-stills/Honors/poster.png'}
        title={'My Sight is Lined with Visions'}
        description={"A girl attempts to complete a to-do list. She never does. Instead, she " + 
          "reflects on memories of her first love, recounts dreams, writes letters, and spends " + 
          "time with her cats. After the first 13 days go by in a depressive episode, a hypomanic " + 
          "episode takes over the 14th day and it all spins out of control. " + 

          "\"My Sight is Lined with Visions\" is a tale about first loves, the joys of living with " +
          "cats, a perspective on living with bipolar disorder, and dreams. " +
          "I write about my first love. I hope she writes back. " + "\n" + 
          "Find contact at bottom to request password."}
        date={'December 2024'}
        length={'30m'}
        link={'https://player.vimeo.com/video/1047054886?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} />

      <FilmProject
        im_path={'/film-stills/Homo-movie/poster.png'}
        title={'A Homo Movie'}
        description={"I started this essay film in November 2023. I was reading Countervisions, a book of " + 
          "essays on Asian American film and video, which left me with the desire to show the side of Asian " +
          "American film/video that has evaded the mainstream public eye. I felt the need to explain or justify " +
          "this exploration in some way, so I took the approach of a video essay. Through candid voiceovers and " +
          "kitschy overlays, I tell a story. One that I realized I was not able to tell, which was why I stopped " +
          "making it the following month. I realized that the story I was trying to tell -- that I was trying to " +
          "tell something at all about a group larger than me -- was against my guiding values. I thought I was " +
          "trying to speak for the larger Asian American community, and though I believe in voicing my thoughts, " +
          "I hate telling other people how to interpret my media." + "\n" + 
          "A year later, I think I'm getting over the impossibility in my mind of making something truly \"Asian American.\" " + 
          "In truth, what I am making and what I am speaking about is not Asian America. No, Asian America " + 
          "implies a belief in something else. This is a homo movie." + "\n" + "Find contact at bottom to request password."}
        date={'October 2024'}
        length={'11m'}
        link={'https://player.vimeo.com/video/933989698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} />

      <FilmProject
        im_path={'/film-stills/Memories-of-our-betters/poster.png'}
        title={'Memory of our betters'}
        description={'For the past 8 years I\'ve had a memory jar that I fill with little notes whenever a good thing happens. It kept me going. Now I don’t put things in it as often - now and then I add a club wristband, a movie ticket, a letter. When the good didn’t last I would find them and throw them away. 8 years in 1 jar is a lot. Thought I’d scan them and turn it into something.'}
        date={'September 2024'}
        length={'2m'}
        link={'https://www.youtube.com/embed/WKa08b2IEus?si=kaOCYI9qsopxdLFA'} />

      <FilmProject
        im_path={'/film-stills/Thunderstruck/thunderstruck-poster-pointed.png'}
        title={'Thunderstruck'}
        description={'Flashing lights explode across an apartment as images of a woman in bed flicker in and out. A stop motion of light paintings and projections. Find contact at bottom to request password.'}
        date={'September 2023'}
        length={'4m'}
        link={'https://player.vimeo.com/video/868960183?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} />

      <FilmProject
        im_path={'/film-stills/22/poster.png'}
        title={'22'}
        description={'At 12 I couldn\'t imagine my future. I was too young.'}
        date={'March 2024'}
        length={'2m'}
        link={'https://player.vimeo.com/video/1006212959?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} />
        
      <FilmProject
        im_path={'/film-stills/J/j-poster-pointed.png'}
        title={'J.'}
        description={'I sit around Boston, my favorite city,on a portable ottoman while telling a story about M. I voice over in broken Vietnamese.'}
        date={'December 2023'}
        length={'20m'}
        link={'https://www.youtube.com/embed/KALgleyNE_o?si=nN4Msm08E_mjTpt4'} />

      <FilmProject
        im_path={'/film-stills/TWPOT/twpot-poster.png'}
        title={'There Was Plenty of Time'}
        description={'I read my thoughts from paper as I pace around a chair and I make a careless attempt at playing the piano.'}
        date={'October 2023'}
        length={'12m'}
        link={'https://player.vimeo.com/video/1006213867?h=a2a80c1073'} />
    </div>
  )
}