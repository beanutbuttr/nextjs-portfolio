'use client'
import styled from 'styled-components'
import { mulishBody, mulishTitle } from '../fonts'

const StyledContact = styled.div`
  font-family: ${mulishBody.style}
  text-align: left;
  margin: 50px;
  line-height: 1.5;
`

const StyledHeader = styled.div`
  font-family: ${mulishTitle.style}
  font-size: 20px;
`

const StyledInfo = styled.div`
  font-size: 16px;
  a {
    text-decoration: underline;
  }
`

export default function Contact() {
  return (
    <StyledContact>
      <StyledHeader>
        Contact
      </StyledHeader>
      <StyledInfo>
        Beatrice Hoang <br/>
        Letterboxd: <a href="https://letterboxd.com/beanutbuttr/">@beanutbuttr</a> <br/>
        Email: <a href= "mailto: beatricehhoang@gmail.com">beatricehhoang@gmail.com</a> <br/>
        To request access to works, send me an Email.
      </StyledInfo>

    </StyledContact>
  )

}