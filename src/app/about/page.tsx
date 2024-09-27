'use client'
import styled from 'styled-components'
import ProjectLayout from '../projectLayout'
import Image from 'next/image'
import { mulishBody, mulishTitle } from '../fonts'
import Contact from '../Components/Contact'

const StyledAboutPage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  font-family: ${mulishBody.style};
  
  @media (max-width: 480px) {
   flex-direction: column;
  }
  
  a {
    color: blue;
    text-decoration: underline;
  }

`

const StyledImage = styled.div`
  width: 200px;
`

const StyledDescription = styled.div`
  @media (max-width: 480px) {
    max-width: 100%;
  }
  max-width: 80%;
  font-size: 16px;
  text-align: left;
  line-height: 2;
`

const StyledLine = styled.div`
  border-top: 1px solid black;
  margin: 10px 0px 20px;
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

        Beatrice grew up in Texas, where her outdoor explorations sparked a fascination
        with storytelling and visual expression. She currently studies Computer Science and Modern
        Culture & Media at Brown University, where she concentrates in visual computing and film
        production. This unique blend of disciplines allows her to explore the technical and
        creative aspects of media, from intricate image processing algorithms to
         nuanced storytelling techniques in film.
        <br/><br/>

        Her filmmaking is driven by impulse, blurring the lines between autobiography and fiction.
        Beatrice often draws on personal experiences and memories, weaving them into her narratives
        in a way that is both deeply intimate and universally relatable.
        <br/><br/>

        In software engineering, Beatrice is particularly interested in computer graphics and
        image processing, fields that allow her to push the boundaries of storytelling and visual
        art. By merging technology and time-based media, Beatrice is able to craft unique visual
        experiences that captivate and challenge conventional narratives and visual aesthetics.
          
        <StyledLine/>
        I'm happy to chat about anything (especially movies, cool projects, and work opportunities!).
        <br/>
        My favorite movies are <i>Love & Pop, Je tu il elle, Golden Eighties, and D.E.B.S.</i> among many
        others. 
        <br/>
        You can find more of my favorites <i><a href="https://boxd.it/oW1Nc" target="_blank">here.</a></i>
        

        </StyledDescription>

      </StyledAboutPage>

      <Contact/>
    </ProjectLayout>
  )
}