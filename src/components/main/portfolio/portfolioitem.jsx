import React from 'react';

const PortfolioItem = (props) => {
    return(
        <div className={props.cls}>
            <img src={props.pic} className="img-fluid" alt=""/>
            <div className="portfolio-info">
            <h4>{props.title}</h4>
            <p>{props.type}</p>
            <a href={props.pic} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
            <a href="" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox details-link" title="Portfolio Details"><i className="bx bx-link"></i></a>
            </div>
        </div>
    );
}

export default PortfolioItem;