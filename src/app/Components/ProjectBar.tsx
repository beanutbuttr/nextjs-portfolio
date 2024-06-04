import styled from 'styled-components'
import { scadaBody, scadaTitle } from '../fonts'
import Link from 'next/link'

const StyledProjectBar = styled.div`
  font-family: ${scadaTitle.style};
  display: flex;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 200px;
  overflow: hidden;
  margin: 8px;

  h1, h2{
    text-align: center;
    position: absolute;
    opacity: 0;
    width: 400px;
  }
  h1 {
    border-bottom: 1px solid black;
  }
  h2 {
    margin-top: 50px;
    font-family: ${scadaBody.style};
  }

  &: hover {
    
    img {
      opacity: 0;
      transition: .25s;
    }

    h1, h2 {
      opacity: 100%;
    }
    border: 1px solid black;
  }

`

const StyledImage = styled.div`
  img {
    width: 100vw;
    min-height: 100%;
  }
`

export const StyledSubheader = styled.h1`
  text-align: center;
  font-size: 18px;
`

export const ProjectBar = (props:
  { title: string, description: string, img1: string, img2: string, img3: string}
) => {
  return (
    <StyledProjectBar>
      
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <StyledImage>
        <img
              src={props.img1}
              alt={"still for " + props.title}
          />
      </StyledImage>
        
      <StyledImage>
        <img
              src={props.img2}
              alt={"still for " + props.title}
          />
      </StyledImage>
      
      <StyledImage>
        <img
              src={props.img3}
              alt={"still for " + props.title}
          />
      </StyledImage>
      
    </StyledProjectBar>
  )
}