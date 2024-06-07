'use client'
import styled from 'styled-components'
import ProjectLayout from '../projectLayout'
import Image from 'next/image'
import { mulishBody, mulishTitle } from '../fonts'
import Script from 'next/script'
import { useState, useEffect } from 'react';

const StyledAboutPage = styled.div`
  display: flex;
  gap: 40px;

  font-family: ${mulishBody.style};

`

const StyledImage = styled.div`
  width: 200px;
`

const StyledDescription = styled.div`
  font-size: 16px;
  text-align: left;
  line-height: 2;
`

// const LBContent = () => {fetch('https://lb-embed-content.bokonon.dev?username=beanutbuttr')
//   const [LB, setLB] = useState([]);
//   useEffect(() => {
//     fetch('https://lb-embed-content.bokonon.dev?username=beanutbuttr')
//       .then((res) => {
//         console.log('res' + res.text());
//         return res.text();
//       })
//       .then((data) => {
//         console.log('data' + data);
//         setLB(data);
//       });
//   }, []);

//   const [photos, setPhotos] = useState([]);
//   return(
//     {LB}
//   )
// }

export default function About() {
  // const filmReviews = LBContent();
  // console.log('in func' + filmReviews)
  return (
    <ProjectLayout>
      <StyledAboutPage>
        <StyledImage>
          <img src={'../me.jpg'} alt={'portrait of beatrice'} />
        </StyledImage>

      <StyledDescription>

        I'm dynamic, eclectic, and a movie-lover who's seen over 1000 movies. <br/>
        "Beatrice, you've seen over 1000 movies, do you even remember what happens in any of them?" <br/>
        Well yes... most of the time.

      </StyledDescription>

      <div id="letterboxd-embed-wrapper-tc">

        {/* {filmReviews} */}
      </div>

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