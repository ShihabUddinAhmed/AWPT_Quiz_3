import React from 'react';

const ServiceItem = (props) => {
    return(
        <div className={props.cls} data-aos={props.aos} data-aos-delay={props.delay}>
        <div className={props.iconbox}>
          <div className={props.icon}>
            <i className={props.bx}></i>
          </div>
          <h4><a href="">{props.title}</a></h4>
          <p>{props.details}</p>
        </div>
      </div>
    );
}

export default ServiceItem;