'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Popup from 'reactjs-popup'; 
import Link from 'next/link'
import ProjectLayout from '../projectLayout';
import { ProjectBar, StyledSubheader, ClickableProjectBar } from '../Components/ProjectBar';
import Contact from '../Components/Contact';
import FilmProject from './filmProject';

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export default function Films() {
  return (
    <ProjectLayout>
      <StyledProjectsContainer>
        <FilmProject
          im_path={'../film-stills/J/j-poster2.png'}
          title={'J.'}
          description='I sit around Boston, my favorite city,
                      on a portable ottomon while telling a story about M.
                      I voice over in broken Vietnamese.'
          medium={'VIDEO | 19MINS | 2023'} />

        <FilmProject
          im_path={'../film-stills/Thunderstruck/thunderstruck-poster2.png'}
          title={'THUNDERSTRUCK'}
          description='Flashing lights explode across an apartment as images of a woman in bed
                      flicker in and out. A stop motion out of light paintings and projections'
          medium={'VIDEO | 4MINS | 2023'} />

        <FilmProject
          im_path={'../film-stills/TWPOT/twpot-poster.png'}
          title={'THERE WAS PLENTY OF TIME'}
          description='I read my thoughts from paper as I pace around a chair,
                      and I make a careless attempt at playing the piano.'
          medium={'VIDEO | 12MINS | 2023'} />

        <FilmProject
          im_path={'../film-stills/Dear-Boston/dear-boston-poster.png'}
          title={'DEAR BOSTON'}
          description='A girl’s first trip to Boston, told through voiceover and images of the city.
                      A love letter to my favorite New England city.'
          medium={'VIDEO | 4MINS | 2022'} />

        <FilmProject
          im_path={'../film-stills/Growing-Up/growing-up-poster.png'}
          title={'FOUND FOOTAGE'}
          description='A found footage film about growing up, using scenes from 23 movies.'
          medium={'VIDEO | 4MINS | 2022'} />
      </StyledProjectsContainer>
      
      <StyledSubheader>COMING SOON</StyledSubheader>

      <StyledProjectsContainer>
        <FilmProject
          im_path={'../film-stills/Honors/honors-poster-2.png'}
          title={'Honors Thesis: MY SIGHT IS LINED WITH VISIONS'}
          description='These letters will never be sent, Still I hope you see this.'
          medium={'VIDEO | - MINS | 2024'} />
      </StyledProjectsContainer>
{/*       
      <ClickableProjectBar
        title={'Honors Thesis, Working Title: MY SIGHT IS LINED WITH VISIONS'}
        description={'These letters will never be sent, Still I hope you see this.'}
        medium='VIDEO | -MINS | 2024'
        img1='../film-stills/Honors/Honors-1.jpg'
        img2='../film-stills/Honors/Honors-3.jpg'
        img3='../film-stills/Honors/Honors-2.jpg'
      />

      <StyledSubheader>PREVIOUS WORK</StyledSubheader>
      <ClickableProjectBar
        title='J.'
        medium='VIDEO | 19MINS | 2023'
        description='I sit around Boston, my favorite city,
                     on a portable ottomon while telling a story about M.
                     I voice over in broken Vietnamese.'
        img1='../film-stills/J/J-still-1.jpeg'
        img2='../film-stills/J/J-still-2.jpeg'
        img3='../film-stills/J/J-still-3.png'/>

      <ClickableProjectBar
        title='THUNDERSTRUCK'
        medium='VIDEO | 4MINS | 2023'
        description='An autobiographical re-enactment of Takashi Ito’s Thunder. Flashing lights
                      explode across an apartment as images of a naked woman in bed flicker in and out. Light
                      paintings and projections illuminate a claustrophobic space of confrontation. Thunderstruck 
                      uses Ito’s techniques as a point of departure, deconstructing and queering this assault 
                      on the senses.'
        img1='../film-stills/Thunderstruck/Thunderstruck-still-1.jpg'
        img2='../film-stills/Thunderstruck/Thunderstruck-still-2.jpg'
        img3='../film-stills/Thunderstruck/Thunderstruck-still-3.jpg'/>

      <ClickableProjectBar
        title='THERE WAS PLENTY OF TIME'
        medium='VIDEO | 12MINS | 2023'
        description='I read my thoughts from paper as I pace around a chair and my audio recorder,
                      and I make a careless attempt at playing the piano.
                      Meanwhile, a 3D model modulates to the vocals of There Was Plenty Of Time Before Us by Deem Spencer.'
        img1='../film-stills/TWPOT/TWPOT-1.jpeg'
        img2='../film-stills/TWPOT/TWPOT-2.PNG'
        img3='../film-stills/TWPOT/TWPOT-3.PNG'/>

      <ClickableProjectBar
        title='DEAR BOSTON'
        medium='VIDEO | 4MINS | 2022'
        description='A girl’s first trip to Boston, told through voiceover and images of the city.
                      A love letter to my favorite New England city.'
        img1='../film-stills/Dear-Boston/Dear-Boston-still-1.jpeg'
        img2='../film-stills/Dear-Boston/Dear-Boston-still-2.jpg'
        img3='../film-stills/Dear-Boston/Dear-Boston-still-3.jpg'/>

      <ClickableProjectBar
        title='GROWING UP'
        medium='FOUND FOOTAGE | 4MINS | 2022'
        description='A found footage film about growing up, using scenes from 23 movies.'
        img1='../film-stills/Growing-Up/growingup-still-1.jpg'
        img2='../film-stills/Growing-Up/growingup-still-2.jpg'
        img3='../film-stills/Growing-Up/growingup-still-3.jpg'/> */}

      
      <Contact/>

    </ProjectLayout> 

  )
}