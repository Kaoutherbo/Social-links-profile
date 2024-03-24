import React from 'react'
import '../styles/output.css'
import Links from './links'

export default function card({image, name, location, description, github, frontendMentor, linkdin, x, insta}) {
  return (
    <div className='flex items-center flex-col bg-dark-grey p-8 rounded-lg text-white w-350'>
        <img src={image} alt="profile" className="rounded-full w-24 h-24 mb-6"/>
        <h1 className='text-3xl font-normal mb-0.5'>{name}</h1>
        <h3 className='text-primary text-sm mb-4'>{location}</h3>
        <p className='font-normal text-sm  mb-3 text-gray-300'>" {description} "</p>
        <Links  
        github={github} 
        frontendMentor={frontendMentor} 
        linkdin={linkdin} 
        x={x} 
        insta={insta} 
        />

    </div>
  )
}
