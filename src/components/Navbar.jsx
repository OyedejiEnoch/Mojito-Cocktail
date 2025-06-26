import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(()=>{
       const navTween = gsap.timeline({
        scrollTrigger:{
            trigger:'nav',
            start:'bottom top', //when the bottom of the nav reaches the top of the view port (bottom is the positon of the nav, top is the positon of the viewport)
            
        }
       })
       
       navTween.fromTo('nav', {backgroundColor:'transparent'}, {backgroundColor:'#00000050', 
        backgroundFilter:'blur(10px)',
        duration:1, ease:'power1.inOut'
       })
    },[])


  return (
    <nav className=''>
    <div className='max-w-6xl lg:max-w-7xl mx-auto'>
      <div className='flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto
      '>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='image' />
            <p>Velvet Pour</p>
        </a>

        <ul>
           {navLinks.map((link)=>(
            <li key={link.id}>
                <a href={`#${link.id}`}>
                    {link.title}
                </a>
            </li>
           ))} 
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
