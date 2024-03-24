import React from 'react'
import '../../styles/output.css'
export default function links({github, frontendMentor, linkdin, x, insta}) {
  return (
    <div  className="">
        <button className='text-gray-300 rounded-lg h-10 w-full bg-grey hover:bg-primary hover:text-grey duration-300 mb-3'><a href={github}>Github</a></button>
        <button className='text-gray-300 rounded-lg h-10 w-full bg-grey hover:bg-primary  hover:text-grey duration-300 mb-3'><a href={frontendMentor}>Frontend Mentor</a></button>
        <button className='text-gray-300 rounded-lg h-10 w-full bg-grey hover:bg-primary  hover:text-grey duration-300 mb-3'><a href={linkdin}>LinkedIn</a></button>
        <button className='text-gray-300 rounded-lg h-10 w-full bg-grey hover:bg-primary  hover:text-grey duration-300 mb-3'><a href={x}>X</a></button>
        <button className='text-gray-300 rounded-lg h-10 w-full bg-grey hover:bg-primary  hover:text-grey duration-300 mb-3'><a href={insta}>Instagram</a></button>
    </div>
  )
}
