'use client'
import styled from 'styled-components'
import Image from 'next/image'
import ReactFlipCard from 'reactjs-flip-card'

const StyledContainer = styled.div`
  // max-width: 100%;
  
  // width: 500px;
  // margin: 10px;
  // width: 500px;

  img {
    width: 100%;
    min-height: 100%;
    border-radius: 14px;

  }

  &: hover {
      cursor: pointer;
    }
`

const StyledProject = styled.div`

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


export default function FilmProject(props: {
    im_path: string,
    title: string,
    description: string,
    medium: string
  }) {

  const styles = {
    card: {
      width: '300px',
      height: '450px',
      margin: '10px',
      "&:hover": {
      cursor: "pointer"
      },
    },
  }


  return (
    <StyledContainer>
      <ReactFlipCard
        containerStyle={styles.card}
        frontComponent={<CardImage im_path={props.im_path} title={props.title} />}
        backComponent={<CardBack title={props.title} description={props.description} medium={props.medium} />}
        flipTrigger={'onClick'}
      />
    </StyledContainer>
  )
}