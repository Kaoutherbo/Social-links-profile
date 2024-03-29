import React from 'react'
import '../../styles/output.css'
import CustomBtn from './CustomBtn'
export default function links({github, frontendMentor, linkdin, x, insta}) {
  return (
    <div  className="">
        <CustomBtn link={github} linkName="Github" />
        <CustomBtn link={frontendMentor} linkName="Frontend Mentor" />
        <CustomBtn link={linkdin} linkName="LinkedIn" />
        <CustomBtn link={x} linkName="X" />
        <CustomBtn link={insta} linkName="Instagram" />
    </div>
  )
}
