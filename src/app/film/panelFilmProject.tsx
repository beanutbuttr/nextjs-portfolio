'use client'
import styled from 'styled-components'
import Image from 'next/image'
import ReactFlipCard from 'reactjs-flip-card'
import YouTube from "react-youtube"

const StyledContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;

  img {
    width: 200px;
    // min-height: 100%;
    border-radius: 14px;
  }
`

const StyledIframe = styled.div`
  width: 400px;
`

const StyledDescription = styled.div `
  width: 400px;
  max-width: 20%;
`

const StyledProjectBack = styled.div`
  text-align: center;
  border: 1px solid black;
  border-radius: 14px;
  height: inherit;
  padding: 20px;
  background-color: white;
  color: black;

  h1 { // title
    font-size: 18px;
    border-bottom: 1px solid black;
  }

  h2 { // medium
    font-size: 14px;
    margin-bottom: 20px;
  }

  h3 { // description
    font-size: 14px;
  }

`

function CardImage(props: {im_path: string, title: string}) {
  return (
    <img src={props.im_path} alt={"poster for " + props.title}/>
  )
}

function CardBack(props: {title: string, description: string, medium: string}) {
  return (
    <StyledProjectBack>
      <h1>{props.title}</h1>
      <h2>{props.medium}</h2>
      <h3>{props.description}</h3>
    </StyledProjectBack>
  )
}


export default function PanelFilmProject(props: {
    im_path: string,
    title: string,
    description: string,
    medium: string
  }) {

  const styles = {
      width: '400px',
      height: '300px',
      margin: '10px',
  }

  return (
    <StyledContainer>
      <div>
        <Image src={props.im_path} alt="Beatrice 3D scan" width={200} height={300}/>
      </div>
      <StyledDescription>
        {props.description}
      </StyledDescription>
      <StyledIframe>
        <YouTube videoId="3A0HtUywWhI" opts={styles} />
      </StyledIframe>
    </StyledContainer>
  )
}