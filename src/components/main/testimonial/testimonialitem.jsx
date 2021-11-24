import React from 'react';

const TestimonialItem = (props) => {
    return(
        <div className="swiper-slide">
            <div className="testimonial-item">
                <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {props.quote}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={props.pic} className="testimonial-img" alt=""/>
                <h3>{props.title}</h3>
                <h4>{props.designation}</h4>
            </div>
        </div>
    );
}

export default TestimonialItem;