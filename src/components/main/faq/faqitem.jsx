import React from 'react';

const FaqItem = (props) => {
    return(
        <li data-aos="fade-up" data-aos-delay={props.delay}>
            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target={props.target} className="collapsed">{props.question} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
            <div id={props.listcount} className="collapse" data-bs-parent=".faq-list">
            <p>
                {props.answer}
            </p>
            </div>
        </li>
    );
}

export default FaqItem;