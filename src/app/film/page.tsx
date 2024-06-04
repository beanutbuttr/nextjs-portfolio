'use client'
import styled from 'styled-components'
import { scadaBody, scadaTitle } from '../fonts'
import Image from 'next/image'
import Popup from 'reactjs-popup'; 
import Link from 'next/link'
import ProjectLayout from '../projectLayout';
import { ProjectBar, StyledSubheader } from '../Components/ProjectBar';



export default function Films() {
  return (
    <ProjectLayout>
      <StyledSubheader>Coming Soon</StyledSubheader>
      <ProjectBar
        title='Untitled Honors Thesis'
        description='VIDEO | -MINS | 2024'
        img1='../film-stills/Honors/Honors-1.jpg'
        img2='../film-stills/Honors/Honors-3.jpg'
        img3='../film-stills/Honors/Honors-2.jpg'/>

      <StyledSubheader>Previous Work</StyledSubheader>
      <ProjectBar
        title='J.'
        description='VIDEO | 19MINS | 2023'
        img1='../film-stills/J/J-still-1.jpeg'
        img2='../film-stills/J/J-still-2.jpeg'
        img3='../film-stills/J/J-still-3.png'/>

      <ProjectBar
        title='THUNDERSTRUCK'
        description='VIDEO | 4MINS | 2023'
        img1='../film-stills/Thunderstruck/Thunderstruck-still-1.jpg'
        img2='../film-stills/Thunderstruck/Thunderstruck-still-2.jpg'
        img3='../film-stills/Thunderstruck/Thunderstruck-still-3.jpg'/>

      <ProjectBar
        title='THERE WAS PLENTY OF TIME'
        description='VIDEO | 12MINS | 2023'
        img1='../film-stills/TWPOT/TWPOT-1.jpeg'
        img2='../film-stills/TWPOT/TWPOT-2.PNG'
        img3='../film-stills/TWPOT/TWPOT-3.PNG'/>

      <ProjectBar
        title='DEAR BOSTON'
        description='VIDEO | 4MINS | 2022'
        img1='../film-stills/Dear-Boston/Dear-Boston-still-1.jpeg'
        img2='../film-stills/Dear-Boston/Dear-Boston-still-2.jpg'
        img3='../film-stills/Dear-Boston/Dear-Boston-still-3.jpg'/>

      <ProjectBar
        title='GROWING UP'
        description='FOUND FOOTAGE | 4MINS | 2022'
        img1='../film-stills/Growing-Up/growingup-still-1.jpg'
        img2='../film-stills/Growing-Up/growingup-still-2.jpg'
        img3='../film-stills/Growing-Up/growingup-still-3.jpg'/>

      
    </ProjectLayout> 

  )
}