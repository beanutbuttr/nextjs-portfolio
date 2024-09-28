import styled from 'styled-components'
import { scadaBody, scadaTitle } from './fonts'
import Image from 'next/image';

const StyledFilmProject = styled.div`
  display: flex;
  gap: 40px;
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
  // justify-content: space-between;

`

const StyledFilmProjectTextBox = styled.div`
  width: 500px;
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
  // width: 200px;
  // max-width: 200px;
  iframe {
    width: 360px;
  }

  @media (max-width: 480px) {
    iframe {
     width: 100%;
    }
  }
`

const StyledPoster = styled.div`
  width: 200px;
  margin: 0 0 20px;
  img {
    width: 200px;
    height: 300px;
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
        <iframe width="400" height="300" src={props.link} title="Memory of our betters — 2024 Short Film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
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
        im_path={'/film-stills/Memories-of-our-betters/poster.png'}
        title={'Memory of our betters'}
        description={'For the past 8 years l’ve had a memory jar that I fill with little notes whenever a good thing happens. It kept me going. Now I don’t put things in it as often - now and then I add a club wristband, a movie ticket, a letter. When the good didn’t last I would find them and throw them away. 8 years in 1 jar is a lot. Thought I’d scan them and turn it into something.'}
        date={'September 2024'}
        length={'2m'}
        link={'https://www.youtube.com/embed/WKa08b2IEus?si=kaOCYI9qsopxdLFA'} />

      <FilmProject
        im_path={'/film-stills/Honors/MSILWV-sidebar-poster.png'}
        title={'My Sight is Lined with Visions'}
        description={'These letters will never be sent; still I hope you see this.'}
        date={'December 2024'}
        length={''}
        link={'https://www.youtube.com/embed/3A0HtUywWhI?si=2ndlxqW27cJUGDP4'} />

      <FilmProject
        im_path={'/film-stills/Thunderstruck/thunderstruck-poster-pointed.png'}
        title={'Thunderstruck'}
        description={'Flashing lights explode across an apartment as images of a woman in bed flicker in and out. A stop motion of light paintings and projections. Find contact at bottom to request access.'}
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
        im_path={'/film-stills/Homo-movie/poster.png'}
        title={'A Homo Movie'}
        description={'An unfinished essay film on asian american film. Find contact at bottom to request access.'}
        date={'November 2023'}
        length={'7m'}
        link={'https://player.vimeo.com/video/933989698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} />

      <FilmProject
        im_path={'/film-stills/TWPOT/twpot-poster.png'}
        title={'There Was Plenty of Time'}
        description={'I read my thoughts from paper as I pace around a chair and I make a careless attempt at playing the piano.'}
        date={'October 2023'}
        length={'12m'}
        link={'https://player.vimeo.com/video/1006213867?h=a2a80c1073'} />

      <FilmProject
        im_path={'/film-stills/Growing-Up/growing-up-poster-pointed.png'}
        title={'Growing Up'}
        description={'A found footage film about growing up, using scenes from 23 movies.'}
        date={'May 2022'}
        length={'4m'}
        link={'https://player.vimeo.com/video/717016230?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'} />



    </div>
  )
}