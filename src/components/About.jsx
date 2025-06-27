import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const About = () => {

    useGSAP(()=>{
        const titleSplit =SplitText.create('#about h2', {type:'chars, words'})
        
        // we are using timeline i.e saying when it should occur
        const scrollTime =gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top center', //we start the animation when the top of the about, reaches the center of the screen
            }
        })

        scrollTime.from(titleSplit.words, {opacity:0, yPercent:100, duration:1.5, stagger:0.07, ease:'expo.out'})
        .from('.top-grid div, .bottom-grid div', {opacity:0, duration:1.3, ease:'power1.inOut', stagger:0.06}, '-=0.5')
    },[])


  return (
    <div id='about'>
        <div className='xl:max-w-7xl mx-auto'>
        <div className='mb-16 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>Where every detail matters <span className='text-white'>-</span>
                    from muddle to garnish
                    </h2>
                </div>

                <div className='sub-content'>
                    <p>Every cocktail we serve is a reflection of our obsession with detail- from the first muddle to the final garnish.
                    That care is what turns a simple drink into something truly memorable.
                    </p>

                    <div className=''>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span>/5
                        </p>
                        <p className=' text-sm text-white-100'>
                            More than +1200 customers
                        </p>
                    </div>
                </div>
            </div>
        </div>

            <div className='top-grid'>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src='/images/abt1.png' alt='grid-img-1' />
                   
                </div>
                <div className='md:col-span-6'>
                    {/* <div className='noisy' /> */}
                        <img src='/images/abt2.png' alt='grid-img-1' />
                </div>
                <div className='md:col-span-3'>
                    <div className='noisy' />
                        <img src='/images/abt5.png' alt='grid-img-1' />
                   
                </div>
            </div>

            <div className='bottom-grid'>
                <div className='md:col-span-8'>
                    {/* <div className='noisy'/> */}
                        <img src='/images/abt3.png' alt='grid-img-1' />
                </div>
                <div className='md:col-span-4'>
                    <div className='noisy' />
                        <img src='/images/abt4.png' alt='grid-img-1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
