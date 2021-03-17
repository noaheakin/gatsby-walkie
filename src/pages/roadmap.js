import React from 'react';
import roadmapImg from '../images/roadmap.png';
import NavBar from '../components/NavBar';

const Roadmap = props => {
    return (
        <div>
            <NavBar />
            <img src={roadmapImg} />
        </div>
    )
}

export default Roadmap;