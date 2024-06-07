import styled from 'styled-components'
import { scadaBody, scadaTitle, mulishBody, mulishTitle } from './fonts'
import Link from 'next/link'

const Beatrice = styled.div`
  font-size: 24px;
  font-family: ${mulishTitle.style};
  text-align: center;
  margin: auto;
`
function MyName() {
  return (
    <Beatrice>
      <Link href="/">Beatrice Hoang</Link>
    </Beatrice>
  )
}

const ProjectsPage = styled.div`
  width: auto;
  margin: 10px 10vw;
  text-align: center;
`

const BarDiv = styled.div`
  // width: 100%;
  font-family: ${mulishBody.style}
  justify-content: center;
  display: flex;
  gap: 72px;
  margin: 5px 0 40px;
`

const BarItem = styled.div`
  font-size: 18px;
`

const BarLink = (props:
  { title: string, page: string }
) => {
  return (
    <BarItem>
      <Link href={props.page}>{props.title}</Link>
    </BarItem>
  )
}

function Bar() {
  return (
    <BarDiv>
      <BarLink title='Film' page='/film'/>
      <BarLink title='Code' page='/code'/>
      {/* <BarLink title='Art' page='/art'/> */}
      <BarLink title='About' page='/about'/>
    </BarDiv>
  )
}



export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProjectsPage>
      <MyName/>
      <Bar/>
      {children}
    </ProjectsPage>
  )
}