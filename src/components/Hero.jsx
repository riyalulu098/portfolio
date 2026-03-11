import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const heroTl = gsap.timeline();

            // Hero Content
            heroTl.from(".hero-text-section > *", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Profile Container
            heroTl.from(".profile-container", {
                scale: 0.9, /* Softer load for premium feel */
                opacity: 0,
                y: 30, /* Slide up instead of rotate */
                duration: 1.4,
                ease: "power3.out"
            }, "-=1");

            // Interactive Text (Rubber Band)
            const letters = document.querySelectorAll('.interactive-text span');
            letters.forEach(letter => {
                letter.addEventListener('pointerenter', () => {
                    gsap.to(letter, {
                        scale: 1.25,
                        y: -15,
                        color: "#2563eb",
                        duration: 0.45,
                        ease: "back.out(2)"
                    });
                });
                letter.addEventListener('pointerleave', () => {
                    gsap.to(letter, {
                        scale: 1,
                        y: 0,
                        color: "inherit",
                        duration: 0.70,   // almost instant
                        ease: "none"
                    });
                });
            });

            // Mouse Parallax - Optimized with quickSetter
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;

            const updateWindowDimensions = () => {
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;
            };

            window.addEventListener('resize', updateWindowDimensions);

            const xSetProfile = gsap.quickSetter(".profile-container", "x", "px");
            const ySetProfile = gsap.quickSetter(".profile-container", "y", "px");

            const handleMouseMove = (e) => {
                const x = (e.clientX / windowWidth - 0.5) * 30;
                const y = (e.clientY / windowHeight - 0.5) * 30;

                xSetProfile(-x * 0.5);
                ySetProfile(-y * 0.5);
            };

            const heroSection = heroRef.current;
            if (heroSection) {
                heroSection.addEventListener('mousemove', handleMouseMove);
            }

            return () => {
                window.removeEventListener('resize', updateWindowDimensions);
                if (heroSection) heroSection.removeEventListener('mousemove', handleMouseMove);
            };

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section section-padding" ref={heroRef}>
            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Content */}
                    <div className="hero-text-section">
                        <span className="greeting">I'm</span>
                        <h1 className="interactive-text">
                            <span>R</span><span>i</span><span>y</span><span>a</span>
                            &nbsp;
                            <span>P</span><span>K</span>
                        </h1>
                        <h2 className="role">UI / UX Designer</h2>
                        <p className="bio">
                            User-focused UI/UX Designer with experience building mobile and web interfaces that balance visual appeal with seamless usability. Skilled in <strong>Figma, prototyping and creating responsive layouts</strong>.
                        </p>

                        <div className="cta-group">
                            <a href="/assets/riya_pk_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic-btn" style={{ marginRight: '10px' }}>
                                Download CV
                            </a>
                            <Link to="/contact" className="btn btn-primary1 magnetic-btn">
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    {/* Right Visuals */}
                    <div className="hero-visual-section">
                        <div className="profile-container">
                            <img
                                src="/assets/riya-profile.png"
                                alt="Riya P K - UI/UX Designer"
                                loading="eager"
                                width="350"
                                height="450"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
