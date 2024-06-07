import styled from 'styled-components'
import { scadaBody, scadaTitle, mulishTitle, mulishBody } from '../fonts'
import Link from 'next/link'
import ReactFlipCard from 'reactjs-flip-card'

const StyledProjectBar = styled.div`
  font-family: ${mulishBody.style};
  display: flex;
  // border: 1px solid white;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 200px;
  overflow: hidden;
  // margin: 10px;

  h1, h2 {
    opacity: 0%;
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
    cursor: pointer;
  }

`

const StyledImage = styled.div`
  img {
    width: 100vw;
    min-height: 100%;
  }
`

const StyledProjectText = styled.div`
  text-align: center;
  position: absolute;
  // width: 400px;

  h1 {
    font-size: 28px;
    border-bottom: 1px solid black;
  }
  h2 {
    font-size: 14px;
  }

`

const StyledDescription = styled.div`
  font-family: ${mulishBody.style}
  border: 1px solid black;
  height: inherit;
  text-align: center;
  font-family: ${mulishBody}, helvetica, sans-serif;
  padding: 15px;

`


export const StyledSubheader = styled.h1`
  font-family: ${mulishBody.style}
  text-align: center;
  font-size: 18px;
`

export const ProjectBar = (props:
  { title: string, description: string, medium: string, img1: string, img2: string, img3: string}
) => {
  return (
    <StyledProjectBar>
      
      <StyledProjectText>
        <h1>{props.title}</h1>
        <h2>{props.medium}</h2>
      </StyledProjectText>
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

export const ClickableProjectBar = (props:
  { title: string, description: string, medium: string, img1: string, img2: string, img3: string}
) => {
  const styles = {
    card: {
      width: 'inherit',
      height: '200px',
      border: '&:hover: 1px solid black',
      margin: '10px',
    },
}
  return (
    <ReactFlipCard
      containerStyle={styles.card}
      frontComponent={
        <ProjectBar
          title={props.title}
          medium={props.medium}
          description={props.description}
          img1={props.img1}
          img2={props.img2}
          img3={props.img3}/>
      }
      backComponent={<StyledDescription>{props.description}</StyledDescription>}
      flipTrigger={'onClick'}
    />
  )
}