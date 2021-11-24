import React from 'react';
import TestimonialItem from './testimonialitem';

const Testimonial = () => {
    return(
        <section id="testimonials" className="testimonials">
        <div className="container">
  
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

              <TestimonialItem quote="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
               pic="assets/img/testimonials/testimonials-1.jpg" title="Saul Goodman" designation="Ceo &amp; Founder" />
              <TestimonialItem quote="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
               pic="assets/img/testimonials/testimonials-2.jpg" title="Sara Wilsson" designation="Designer" />
              <TestimonialItem quote="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
               pic="assets/img/testimonials/testimonials-3.jpg" title="Jena Karlis" designation="Store Owner" />
              <TestimonialItem quote="Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
               pic="assets/img/testimonials/testimonials-4.jpg" title="Matt Brandon" designation="Freelancer" />
              <TestimonialItem quote="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
               pic="assets/img/testimonials/testimonials-5.jpg" title="John Larson" designation="Entrepreneur" />
  
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
    );
}

export default Testimonial;