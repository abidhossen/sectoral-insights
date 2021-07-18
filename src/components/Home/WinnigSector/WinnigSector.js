import React from 'react';
import logo from '../Assets/images/logo.png'
import './WinningSector.css'
const WinnigSector = () => {
    return (
        <div className="winningSector-container">
            <div className="winSector-section1">
                <div className="winSector-title">
                    <p>Winning Sector: <span className="winSector-custom">Bank Nifty</span></p>
                </div>
                <div className="winSector-content">
                    <p>
                        <span className="winSector-custom2"> Bank Nifty</span> was the sector which witnessed most gains ( <span className="winSector-custom3"> 2%</span> )  in todays session
                    </p>
                </div>
                <div className="winSector-cards ">
                    <div className="cardContainer ">
                        <p className="cardContent">120 Cr</p>
                        <p className="cardFooter">Market Cap</p>
                    </div>
                    <div className="cardContainer ">
                        <p className="cardContent">10</p>
                        <p className="cardFooter">No of Stocks</p>
                    </div>
                    <div className="cardContainer ">
                        <p className="cardContent">10 %</p>
                        <p className="cardFooter">1 yr Returns</p>
                    </div>
                </div>
            </div>
            <div className="winSector-section2">
                <div className="winSector2-title">
                    Top 3 Stocks by Market Cap
                </div>
                <div className="winSector2-card">
                    <div className="winSectorCard-top row">
                        <div className="cardIconTop col-md-2 col-sm-12 m-auto ">
                            <img src={logo} alt="" />
                        </div>
                        <div className="cardContentTop col-md-8 col-sm-12 m-auto">
                            <p className="cardTop-title1">Reliance Industries Ltd</p>
                            <p className="cardTop-title2">Price: $ 2176.65 <span className="cardTop-title2Custom"> ▲1.14%</span> </p>

                        </div>
                        <div className="cardButton-top col-md-2 col-sm-12 m-auto">
                            <button>BUY</button>
                        </div>
                    </div>
                    <div className="winSectorCard-middle row">
                        <div className="cardMiddle-content col-md-4">

                            <p className="cardMiddle-content1">Exposure</p>
                            <p className="cardMiddle-content2">$ 80000</p>

                        </div>
                        <div className="cardMiddle-content col-md-4">
                            <p className="cardMiddle-content1">LTP</p>
                            <p className="cardMiddle-content2">1394</p>
                        </div>
                        <div className="cardMiddle-content col-md-4">
                            <p className="cardMiddle-content1">Last week Returns</p>
                            <p className="cardMiddle-content2">3%</p>
                        </div>
                    </div>
                </div>
                <div className="winSector2-card">
                    <div className="winSectorCard-top row">
                        <div className="cardIconTop col-md-2 m-auto ">
                            <img src={logo} alt="" />
                        </div>
                        <div className="cardContentTop col-md-8 m-auto">
                            <p className="cardTop-title1">Reliance Industries Ltd</p>
                            <p className="cardTop-title2">Price: $ 2176.65 <span className="cardTop-title2Custom"> ▲1.14%</span> </p>

                        </div>
                        <div className="cardButton-top col-md-2 m-auto">
                            <button>BUY</button>
                        </div>
                    </div>
                    <div className="winSectorCard-middle row">
                        <div className="cardMiddle-content col-md-4">

                            <p className="cardMiddle-content1">Exposure</p>
                            <p className="cardMiddle-content2">$ 80000</p>

                        </div>
                        <div className="cardMiddle-content col-md-4">
                            <p className="cardMiddle-content1">LTP</p>
                            <p className="cardMiddle-content2">1394</p>
                        </div>
                        <div className="cardMiddle-content col-md-4">
                            <p className="cardMiddle-content1">Last week Returns</p>
                            <p className="cardMiddle-content2">3%</p>
                        </div>
                    </div>
                </div>
                <div className="winSector2-card">
                    <div className="winSectorCard-top row">
                        <div className="cardIconTop col-md-2 m-auto ">
                            <img src={logo} alt="" />
                        </div>
                        <div className="cardContentTop col-md-8 m-auto">
                            <p className="cardTop-title1">Reliance Industries Ltd</p>
                            <p className="cardTop-title2">Price: $ 2176.65 <span className="cardTop-title2Custom"> ▲1.14%</span> </p>

                        </div>
                        <div className="cardButton-top col-md-2 m-auto">
                            <button>BUY</button>
                        </div>
                    </div>
                    <div className="winSectorCard-middle row">
                        <div className="cardMiddle-content col-md-4">

                            <p className="cardMiddle-content1">Exposure</p>
                            <p className="cardMiddle-content2">$ 80000</p>

                        </div>
                        <div className="cardMiddle-content col-md-4">
                            <p className="cardMiddle-content1">LTP</p>
                            <p className="cardMiddle-content2">1394</p>
                        </div>
                        <div className="cardMiddle-content col-md-4">
                            <p className="cardMiddle-content1">Last week Returns</p>
                            <p className="cardMiddle-content2">3%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinnigSector;