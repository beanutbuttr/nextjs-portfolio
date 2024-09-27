'use client'
import styled from 'styled-components'
import Image from 'next/image'
import ProjectLayout from '@/app/projectLayout'
import { mulishBody, mulishTitle } from '@/app/fonts'
import Link from 'next/link'

const LeftAlignText = styled.div`
  text-align: left;
  margin-bottom: 100px;
`

const StyledFlexParent = styled.div`
  display: flex;
  flex-direction: row;  
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    display: block;
  }

  .5050 {
    color: blue;
    border: 2px solid blue;
  }

  div {
    width: 100%;
  }

  img {
    border-radius: 10px;
  }
`

const StyledTitle = styled.div`
  font-size: 24px;
  font-family: ${mulishTitle.style};
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`

const StyledSubheader = styled.div`
  font-size: 20px;
  font-family: ${mulishTitle.style}
  // width: 100px;
  border-bottom: 1px solid black;
  margin: 20px 0;
`

const StyledIntro = styled.div`
  font-size:  16px;
`

const StyledTopImage = styled.div`
  img {
    width: 800px;
    max-width: 100%;
  }
`

export default function VRPiano() {

  return (
    <ProjectLayout>
      <LeftAlignText>
        <StyledTitle>VR Piano Visualizer</StyledTitle>
        
        <StyledFlexParent>
          <StyledIntro>
            As a piano teacher at the ripe old age of 22 (at least, that's what most of my 7-year-old
            students think), I hear one thing more often than I thought I would - <em>"I learned the notes
            by looking at a video on YouTube!"</em> <br/><br/>
            Who knew the technological generation gap was real, hm?<br/><br/> 
            Either way, I appreciate that these videos motivate my students to learn notes, but how to play
            the notes is a different question. What's loud, what's soft? That's harder to tell visually.
          </StyledIntro>
          <StyledTopImage>
            <img src="../project-stills/vr-piano-pointing.png"/>
          </StyledTopImage>
        </StyledFlexParent>

        <StyledFlexParent>
          <div className='5050'>
            <StyledSubheader><i>tl;dr</i></StyledSubheader>
            <StyledIntro>My final project I created for the VR for Data Viz course I took was a MIDI piano visualizer,
                in virtual reality. Most 2D piano visualizers on YouTube are able to
                tell you which notes to press and for how long, but I wanted to take
                this to VR in order to show how loud the note should be played. <br/><br/>
                After all, that's what determines whether Clair de Lune will sound like la lune (the moon)
                or le soleil (the sun)! <br/><br/>
                Made in Unity.
            </StyledIntro>
          </div>
          <div className='5050'>
            <StyledSubheader>features</StyledSubheader>
              <ul>
                  <li>- choose from 5 MIDI file songs</li>
                  <li>- see what notes to play on a virtual piano</li>
                  <li>- know how loud/soft to play the note based on its height</li>
                  <li>- pause/play</li>
                  <li>- change speed</li>
                  <li>- move around!</li>
              </ul>
            </div>
        </StyledFlexParent>

        <StyledSubheader>Background</StyledSubheader>
        <StyledFlexParent>
          <div>
            
            <em>What makes a good Virtual Reality app?</em> <br/><br/>
            <div>
                That's what I had to answer before I could start. So, I used the example of
                looking into existing VR software that allow users to mask (erase material from) models.
                Not inherently related to a piano, but exploring this helped me come up with metrics
                to keep in mind when creating my own application.
            </div>
            <br/><br/>
            <em>So given this, why did I decide to create a piano in virtual reality?</em>
            <br/><br/>
            Kids learn in different ways, and one of those is visually. On a normal piano, or even in 2D,
            you can see what notes to play, but it is harder to distinguish volume just by looking at the notes.
            Sure, one could differentiate the volumes by ear but not everyone has perfect pitch!

          </div>
          <div>
            <img src="../project-stills/vr-eval.png"/>
          </div>
        </StyledFlexParent>
        
        <br/>
        <StyledSubheader/>
        <StyledSubheader>
          So, an app that's easy to understand, allows multiple people to be in the same
          room, and has a clear menu system. That was the goal. Now let's see what I did.<br/><br/>
        </StyledSubheader>
        <br/>
        
        <StyledSubheader>Before you can start the piano... you have to choose a piece!</StyledSubheader>
        <StyledFlexParent>

          <div>
            <img src="../project-stills/vr-piano-menu.jpeg"/>
          </div>
          <div>
          So first, I had to choose an input. Where is this piano music coming from? <br/><br/>
          My answer: MIDI files. MIDI files include information on note pitch, volume, duration, modulation, etc. Exactly what I need!<br/><br/>
          I loaded a few MIDI files to the app for the user to choose from. Of course, with a classic play/pause button and some speed options, all on a simple menu attached to the left joystick - you can't lose it!
          <br/><br/>
          pssssst - I used a Unity asset called Maestro Midi Player Tool Kit to translate the MIDI data into something I could use to control the piano model I made. I wrote a tutorial here on how to use it!
          </div>
        </StyledFlexParent>

        <StyledSubheader>Using Normcore's Unity plugin, I was able to bring multiple people in the same room!</StyledSubheader>
        <StyledFlexParent>
          <img src="../project-stills/vr-piano-normcore.png"/>
        </StyledFlexParent>

        <StyledSubheader>Looking back, and to the future</StyledSubheader>
        <StyledFlexParent>
          Now, despite the features I was able to implement smoothly, there were also a few things
          that I wish I had spent more time on to debug. For example, I was able to get everyone 
          in the same room using Normcore but, I didn't have time to make synced collaboration! 
          Two people could be in the same room but would not be able to hear the other person's piano. 
          I know, I want this to happen in the future too, since I could see this being a useful
          tool in my studio!<br/><br/>
          
          There are also a handful of other features I would love to see in this app: 
          loading your own MIDI files, notes being different colors based on which hand is 
          playing it, synced sheet music, note letter names, seeing what notes you'll have to 
          play next, etc. While I wasn't able to implement all of these in the month I had for 
          this project, I hope to see them in the future!
        </StyledFlexParent>
        
      
      </LeftAlignText>
      
    </ProjectLayout>
  )
}