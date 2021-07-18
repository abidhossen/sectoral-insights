import React from 'react';
import './Header.css'
const Header = () => {
    const date = new Date()
    return (
        <div className="header-container" >
            <i className="fas fa-arrow-left header-icon"></i>
            <div className="header-content">
                <div className="headerTitle-container">
                    <span className="header-title">IND Sectoral Insights</span>
                    <span className="header-date"> ( {date.toDateString('dd/mm/yyyy')} )</span>
                </div>
                <p className="header-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero iste fuga quisquam voluptate totam cum necessitatibus sapiente ipsa aliquam excepturi cupiditate magnam dolorum unde, pariatur, repellendus voluptatum voluptas veritatis.</p>
            </div>
        </div>
    );
};

export default Header;