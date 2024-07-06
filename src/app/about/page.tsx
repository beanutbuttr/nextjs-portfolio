'use client'
import styled from 'styled-components'
import ProjectLayout from '../projectLayout'
import Image from 'next/image'
import { mulishBody, mulishTitle } from '../fonts'

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  font-family: ${mulishBody.style};
  
  @media (max-width: 480px) {
   flex-direction: column;
  }
  

`

const StyledImage = styled.div`
  width: 200px;

`

const StyledDescription = styled.div`
  @media (max-width: 480px) {
    max-width: 100%;
  }
  max-width: 60%;
  font-size: 16px;
  text-align: left;
  line-height: 2;
`

export default function About() {
  return (
    <ProjectLayout>
      <StyledAboutPage>
        <StyledImage>
          <img src={'../me.jpg'} alt={'portrait of beatrice'} />
        </StyledImage>

        <StyledDescription>

        Boston-based artist Beatrice Hoang crafts digital spaces, from VR applications and
        websites to kitschy vfx and auto-fictive films.
        <br/><br/>

        Beatrice grew up in Texas, where her early desire to explore sparked a lifelong fascination
        with storytelling and visual expression. She currently studies Computer Science and Modern
        Culture & Media at Brown University, where she concentrates on visual computing and film
        production. This unique blend of disciplines allows her to explore the technical and
        creative aspects of media, from the intricate algorithms behind computer graphics to
        the nuanced storytelling techniques in film.
        <br/><br/>

        Her filmmaking is driven by impulse, blurring the lines between autobiography and fiction.
        Beatrice often draws on personal experiences and memories, weaving them into her narratives
        in a way that is both deeply intimate and universally relatable.
        <br/><br/>

        In software engineering, Beatrice is particularly interested in computer graphics and
        image processing, fields that allow her to push the boundaries of storytelling and visual
        art. By merging technology with time-based media, Beatrice is able to craft unique visual
        experiences that captivate and challenge conventional narratives and visual aesthetics.
          
          

        </StyledDescription>

      </StyledAboutPage>
    </ProjectLayout>
  )
}
 
// function Dashboard() {
//   fetch('https://lb-embed-content.bokonon.dev?username=beanutbuttr')
//     .then(response => response.text())
//     .then(data => {
//     document.getElementById('letterboxd-embed-wrapper-tc').innerHTML = data;
//   });

//   return (
//     <>
//       <Script src="https://example.com/script.js" />
//     </>
//   )
// }