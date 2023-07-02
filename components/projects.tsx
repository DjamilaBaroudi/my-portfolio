"use client";

import React from 'react'
import Image from 'next/image'

const ProjectsCarousel = () => {
    return (
        <div className='flex items-center justify-around space-x-3'>
            <div className="relative h-80 w-72 rotate-3 text-clip rounded-full  object-cover  align-middle ">
                <Image className='rounded-2xl' src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Mountain" fill />
            </div >
            <div className="relative h-80 w-72 -rotate-3 text-clip rounded-full object-cover align-middle">
                <Image className='rounded-2xl' src="https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" alt="Mountain" fill />
            </div >
            <div className="relative h-80 w-72 -rotate-3 text-clip rounded-full object-cover align-middle">
                <Image className='rounded-2xl' src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Mountain" fill />
            </div >
            <div className="relative h-80 w-72 rotate-3 text-clip rounded-full object-cover align-middle">
                <Image className='rounded-2xl' src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=718&q=80" alt="Mountain" fill />
            </div >
        </div>
    )
}

export default ProjectsCarousel