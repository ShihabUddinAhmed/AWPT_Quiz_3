import React from 'react';

const TeamMember = (props) => {
    return(
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <div className="member-img">
                  <img src={props.pic} className="img-fluid" alt=""/>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{props.name}</h4>
                  <span>{props.designation}</span>
                </div>
              </div>
            </div>
    );
}

export default TeamMember;