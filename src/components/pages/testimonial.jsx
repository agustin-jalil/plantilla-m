import React from 'react';
import Section from "../common/section";
import Carousel from '../common/carousel';

const Testimonial = () => {
    return (
        <Section>
            <div className="testimonial">
                <div className="testimonial__container">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <Carousel/>
            </div>
        </Section>
    );
}

const TestimonialCard = () => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return {
            img: "/test/star.svg"
        };
    });

    return (
        <div className="testimonial-card">
            <div className="testimonial-card__author">
                <p className="testimonial-card__text">"Este es un testimonio increíble de alguien muy satisfecho con el producto."</p>
                <span className="testimonial-card__name">Juan Pérez</span>
                <span className="testimonial-card__role">Cliente Satisfecho</span>
                <span className="testimonial-card__star">
                    {stars.map((star, index) => {
                        return <img key={index} className="testimonial-card__star-img" src={star.img} alt={`Star ${index + 1}`} />;
                    })}
                </span>
            </div>
        </div>
    );
}


export default Testimonial;
