'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Popup from 'reactjs-popup'; 
import Link from 'next/link'
import { ProjectBar, StyledSubheader, ClickableProjectBar } from '@/app/Components/ProjectBar';
import Contact from '@/app/Components/Contact';
import ProjectLayout from '@/app/projectLayout';

export default function Code() {
  return (

    <ProjectLayout>


      <Contact/>
    </ProjectLayout>
  )
}