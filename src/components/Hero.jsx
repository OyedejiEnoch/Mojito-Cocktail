import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {

    const videoRef =useRef()

    const isMobile =useMediaQuery({maxWidth:767})

    useGSAP(()=>{
        const heroSplit =new SplitText('.title', {type:'chars, words'})
        const paragraphSplit =new SplitText('.subtitle', {type:'lines'})

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {opacity:0, yPercent:100, duration:1.8,ease:'expo.out', stagger:0.07})
        gsap.from(paragraphSplit.lines, {opacity:0, yPercent:100, duration:1.8, ease:'expo.out', stagger:0.09, delay:1.2})

        gsap.timeline({scrollTrigger:{
            trigger:'#hero',
            start:'top top',
            end:'bottom top',
            scrub:true,
        }})
        .to('.right-leaf', {y:400}, 0)
        .to('.left-leaf', {y:-200}, 0)

        const startValue =isMobile ? 'top 50%' : 'center 60%'
        // we are saying that, if the top of the video reaches 50% of the screen the video will start(on mobile), 
        // on larger screen, if the center of the video reaches 60% of the screen the video will start
        const endValue =isMobile ? '120% top': 'bottom top'
        // here we are saying, if the video goes 120% of the screen, and reaches the top, we end the video (on mobile)
        //on largerScreen when the bottom of the video reaches the top of the screen

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
            });
            
            videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
            };

        // a gsap timeline created to animate a video as a user scrolls through the page
    },[])

  return (
    <>
    <section id='hero' className='noisy'>
      <h1 className='title'>MOJITO</h1>

      <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf'/>
      <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf'/>

      <div className='body'>
        <div className='content'>
            <div className='space-y-5 hidden md:block'>
                <p>Cool. Crisp. Classic</p>
                <p className='subtitle'>Sip the Spirit <br /> of Summer</p>
            </div>

            <div className='view-cocktails'>
                <p className='subtitle'>
                    Every cocktaill on our menu is a blend of premium ingredients, creative flair and timeless recipes,
                    designed to delight your senses.
                </p>
                <a href='#cocktails'>View Cocktails</a>
            </div>
        </div>
      </div>
    </section>

    <div className='video absolut inset-0'>
        <video ref={videoRef} src='/videos/output.mp4' muted playsInline preload='auto' />
    </div>
    </>
  )
}

export default Hero

// 