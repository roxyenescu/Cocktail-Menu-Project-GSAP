import React from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {SplitText} from 'gsap/all';

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

    }, []);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">ONYX</h1>

                <img
                    src="/images/hero-left-leaf.png"
                    alt="left-leaf"
                    className="left-leaf"
                />

                <img
                    src="/images/hero-right-leaf.png"
                    alt="right-leaf"
                    className="right-leaf"
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Refined. Timeless. Seductive.</p>
                            <p className="subtitle">
                                Where Elegance<br />Meets Desire
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Where every blend becomes a story — designed to delight and inspire.
                            </p>

                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;