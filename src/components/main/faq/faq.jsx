import React from 'react';
import FaqItem from './faqitem';

const FAQ = () => {
    return(
        <section id="faq" className="faq section-bg">
          <div className="container">
    
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
    
            <div className="faq-list">
              <ul>
                <FaqItem delay="0" target="#faq-list-1"
                 question="Non consectetur a erat nam at lectus urna duis?"
                 listcount="faq-list-1"
                 answer="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." />
                <FaqItem delay="100" target="#faq-list-2"
                 question="Feugiat scelerisque varius morbi enim nunc?"
                 listcount="faq-list-2"
                 answer="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui." />
                <FaqItem delay="200" target="#faq-list-3"
                 question="Non consectetur a erat nam at lectus urna duis?"
                 listcount="faq-list-3"
                 answer="Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis" />
                <FaqItem delay="400" target="#faq-list-4"
                 question="Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?"
                 listcount="faq-list-4"
                 answer="Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque." />
                
              </ul>
            </div>
    
          </div>
        </section>
    );
}

export default FAQ;