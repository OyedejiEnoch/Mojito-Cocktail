"use client"
import React, { useRef, useState } from 'react'
import { allCocktails } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Menu = () => {

    const contentRef =useRef()
    const [currentIndex, setCurrentIndex] =useState(0);

    const totalNumberOfCocktails = allCocktails.length

    const goTOSlide =(index)=>{
        const newIndex = (index + totalNumberOfCocktails) % totalNumberOfCocktails;
        setCurrentIndex(newIndex)
    }

    const getCocktailAt =(indexOffset)=>{
        return allCocktails[(currentIndex + indexOffset + totalNumberOfCocktails) % totalNumberOfCocktails]   
    }

    const currentCocktail =getCocktailAt(0)
    const prevcocktail =getCocktailAt(-1)
    const nextcocktail =getCocktailAt(1)

    useGSAP(()=>{
        gsap.fromTo('#title', {opacity:0}, {opacity:1, duration:1})
        gsap.fromTo('.cocktail img', {opacity:0, xPercent:-100}, {xPercent:0, opacity:1, duration:1, ease:'power1.inOut'})
        gsap.fromTo('.details h2', {yPercent:100, opacity:0}, {yPercent:0, opacity:1, duration:1.1, ease:'power1.inOut'})
        gsap.fromTo('.details p', {yPercent:100, opacity:0}, {yPercent:0, opacity:1, duration:1.1, ease:'power1.inOut'})
    }, [currentIndex])

  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <div className='max-w-7xl mx-auto'>
        <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf' />
        <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf' />

        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu
        </h2>


        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {allCocktails.map((cocktail, index)=>{
                const isActive =index === currentIndex
                return(
                <div key={cocktail.id}>
                    <button className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50' }`}
                    onClick={()=>goTOSlide(index)}
                    >
                        {cocktail.name}
                    </button>
                </div>
                )
            })}
        </nav>

        <div className='content'>
            <div className='arrows'>
                <button className='text-left' onClick={()=>goTOSlide(currentIndex -1)}>
                    <span>{prevcocktail.name}</span>
                    <img src='/images/right-arrow.png' alt='right-arrow' aria-hidden='true' />
                </button>
                <button className='text-left' onClick={()=>goTOSlide(currentIndex + 1)}>
                    <span>{nextcocktail.name}</span>
                    <img src='/images/left-arrow.png' alt='left-arrow' aria-hidden='true' />
                </button>
            </div>

            <div className='cocktail' >
                <img src={currentCocktail.image} className='object-contain' />
            </div>

            <div className='recipe'>
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>

                <div className='details'>
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Menu
