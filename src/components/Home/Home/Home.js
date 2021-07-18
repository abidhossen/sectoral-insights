import React from 'react';
import Header from '../Header/Header';
import LoosingSector from '../LoosingSector/LoosingSector';
import WinnigSector from '../WinnigSector/WinnigSector';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <WinnigSector></WinnigSector>
            <LoosingSector></LoosingSector>
        </div>
    );
};

export default Home;