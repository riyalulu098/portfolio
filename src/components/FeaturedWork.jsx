import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FeaturedWork.css';

gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = sectionRef.current.querySelectorAll('.work-card');

            if (cards.length > 0) {
                gsap.from(cards, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });

                // Tilt Effect
                cards.forEach(card => {
                    const imageContainer = card.querySelector('.work-image-wrapper');
                    if (!imageContainer) return;

                    let bounds = { left: 0, top: 0, width: 0, height: 0 };

                    const onMouseEnter = () => {
                        const rect = card.getBoundingClientRect();
                        bounds = {
                            left: rect.left,
                            top: rect.top,
                            width: rect.width,
                            height: rect.height
                        };
                    };

                    const onMouseMove = (e) => {
                        // Performance: Skip tilt if browser is busy (simple heuristic) or throttle
                        if (gsap.isTweening(window)) return;

                        const x = e.clientX - bounds.left;
                        const y = e.clientY - bounds.top;
                        const centerX = bounds.width / 2;
                        const centerY = bounds.height / 2;

                        const rotateX = ((y - centerY) / centerY) * -2; // Max 2deg rotation
                        const rotateY = ((x - centerX) / centerX) * 2;

                        gsap.to(imageContainer, {
                            duration: 0.5,
                            rotationX: rotateX,
                            rotationY: rotateY,
                            ease: "power1.out",
                            transformPerspective: 500,
                            overwrite: "auto"
                        });
                    };

                    const onMouseLeave = () => {
                        gsap.to(imageContainer, {
                            duration: 0.8,
                            rotationX: 0,
                            rotationY: 0,
                            ease: "elastic.out(1, 0.5)",
                            overwrite: "auto"
                        });
                    };

                    card.addEventListener('mouseenter', onMouseEnter);
                    card.addEventListener('mousemove', onMouseMove);
                    card.addEventListener('mouseleave', onMouseLeave);
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" className="section-padding" ref={sectionRef}>
            <div className="container">
                <div className="work-header">
                    <h2 className="work-title">Selected Works</h2>
                    <p className="work-subtitle">A selection of projects that demonstrate my ability to solve complex problems.</p>
                </div>

                <div className="projects-grid">
                    {/* Project 1: Elegance couture */}
                    <div className="project-column">
                        <a href="#" className="work-card">
                            <div className="work-card-header">
                                <div>
                                    <h3>Elegance couture</h3>
                                    <p>Mobile shopping application for women</p>
                                </div>
                                <div className="work-icon">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                            <div className="work-image-wrapper">
                                <img
                                    src="/assets/Image1.jpeg"
                                    alt="Elegance couture - Mobile shopping application for women"
                                    className="work-image"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="600"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Project 2: Zylo fashion style */}
                    <div className="project-column">
                        <a href="#" className="work-card">
                            <div className="work-card-header">
                                <div>
                                    <h3>Zylo fashion style</h3>
                                    <p>Responsive website UI for a customized bridal dress brand</p>
                                </div>
                                <div className="work-icon">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                            <div className="work-image-wrapper">
                                <img
                                    src="/assets/Image2.png"
                                    alt="Zylo fashion style - Bridal dress brand website"
                                    className="work-image"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="600"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Project 3: Fresh Bite */}
                    <div className="project-column">
                        <a href="https://www.figma.com/design/KLNqT1DtgQcf0WVfIkebrb/Untitled?node-id=1-26&t=EOnhOZRhRMJ4rqjh-1" target="_blank" rel="noopener noreferrer" className="work-card">
                            <div className="work-card-header">
                                <div>
                                    <h3>Lingo</h3>
                                    <p>Learning app</p>
                                </div>
                                <div className="work-icon">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                            <div className="work-image-wrapper">
                                <img
                                    src="/assets/learning app moc.png"
                                    alt="Learning app"
                                    className="work-image"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="600"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Project 4: SkyCast */}
                    <div className="project-column">
                        <a href="https://www.figma.com/design/kBB5BC7AIwxj5VMLO7777k/Untitled?node-id=0-1&t=MAl2GCAaRNuT8nsf-1" target="_blank" rel="noopener noreferrer" className="work-card">
                            <div className="work-card-header">
                                <div>
                                    <h3>Daily Do</h3>
                                    <p>React Native Productivity App</p>
                                </div>
                                <div className="work-icon">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                            <div className="work-image-wrapper">
                                <img
                                    src="/assets/dailyyy.png"
                                    alt="Daily Do - Task Management App Application"
                                    className="work-image"
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="600"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
