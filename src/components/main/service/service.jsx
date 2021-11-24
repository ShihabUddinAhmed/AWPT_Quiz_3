import React from 'react';
import ServiceItem from './serviceitems';
const Service = () => {
    return(
        <section id="services" className="services">
        <div className="container">
  
          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="row">
  
            <ServiceItem cls="col-lg-4 col-md-6 d-flex align-items-stretch" aos="zoom-in" delay="100" iconbox="icon-box iconbox-blue" icon="icon" bx="bx bxl-dribbble" title="Lorem Ipsum" details="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
            <ServiceItem cls="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" aos="zoom-in" delay="200" iconbox="icon-box iconbox-orange" icon="icon" bx="bx bx-file" title="Sed Perspiciatis" details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
            <ServiceItem cls="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" aos="zoom-in" delay="300" iconbox="icon-box iconbox-pink" icon="icon" bx="bx bx-tachometer" title="Magni Dolores" details="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"/>
            <ServiceItem cls="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" aos="zoom-in" delay="100" iconbox="icon-box iconbox-yellow" icon="icon" bx="bx bx-layer" title="Nemo Enim" details="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>
            <ServiceItem cls="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" aos="zoom-in" delay="200" iconbox="icon-box iconbox-red" icon="icon" bx="bx bx-slideshow" title="Dele Cardo" details="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"/>
            <ServiceItem cls="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" aos="zoom-in" delay="300" iconbox="icon-box iconbox-teal" icon="icon" bx="bx bx-arch" title="Divera Don" details="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"/>
  
          </div>
  
        </div>
      </section>
    );
}

export default Service;