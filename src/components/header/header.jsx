import React from 'react';
import Navbar from '../navbar/navbar';
const Header = () => {
    return(
       <header id="header" className="fixed-top header-transparent">
        <div className="container d-flex align-items-center justify-content-between">

          <h1 className="logo"><a href="index.html">Baker</a></h1>
          <Navbar/>
        </div>
      </header>
    );
}

export default Header;