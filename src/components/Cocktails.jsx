import React from 'react'
import { cocktailLists, mockTailLists } from '../constants'

const Cocktails = () => {
  return (
    <section id='cocktails' className='noisy'>
        <div className='max-w-6xl md:max-w-7xl mx-auto'>
        <img src='/images/cocktail-left-leaf.png' alt='left-leaf' id='c-left-leaf' />
        <img src='/images/cocktail-right-leaf.png' alt='right-leaf' id='c-right-leaf' />

        <div className='list'>
            <div className='popular'>
                <h2>Most Popular Cocktails</h2>

                <ul>
                    {cocktailLists.map((drink)=>(
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>-{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='loved'>
                <h2>Most Loved Cocktails</h2>

                <ul>
                    {mockTailLists.map((drink)=>(
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>-{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Cocktails
