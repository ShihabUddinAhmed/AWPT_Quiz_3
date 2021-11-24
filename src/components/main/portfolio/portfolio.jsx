import React from 'react';
import PortfolioItem from './portfolioitem';

const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio">
        <div className="container">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
  
          <div className="row portfolio-container">
  
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-app" pic="assets/img/portfolio/portfolio-1.jpg"
             title="App 1" type="App" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-web" pic="assets/img/portfolio/portfolio-2.jpg"
             title="Web 3" type="Web" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-app" pic="assets/img/portfolio/portfolio-3.jpg"
             title="App 2" type="App" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-card" pic="assets/img/portfolio/portfolio-4.jpg"
             title="Card 2" type="Card" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-web" pic="assets/img/portfolio/portfolio-5.jpg"
             title="Web 2" type="Web" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-app" pic="assets/img/portfolio/portfolio-6.jpg"
             title="App 3" type="App" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-card" pic="assets/img/portfolio/portfolio-7.jpg"
             title="Card 1" type="Card" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-card" pic="assets/img/portfolio/portfolio-8.jpg"
             title="Card 3" type="Card" />
            <PortfolioItem cls="col-lg-4 col-md-6 portfolio-item filter-web" pic="assets/img/portfolio/portfolio-9.jpg"
             title="Web 3" type="Web" />
  
          </div>
  
        </div>
      </section>
    );
}

export default Portfolio;