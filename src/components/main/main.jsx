import React from 'react';
import About from './about/about';
import Clients from './clients/client';
import Contact from './contact/contact';
import Counts from './count/count';
import CalltoAction from './cta/cta';
import FAQ from './faq/faq';
import Portfolio from './portfolio/portfolio';
import Pricing from './pricing/pricing';
import Service from './service/service';
import Team from './team/team';
import Testimonial from './testimonial/testimonial';
const Main = () => {
    return(
       <div className="Main">
           <Clients />
           <About />
           <Counts />
           <Service />
           <CalltoAction />
           <Testimonial />
           <Portfolio />
           <Team />
           <Pricing />
           <FAQ />
           <Contact />
       </div>
    );
}

export default Main;