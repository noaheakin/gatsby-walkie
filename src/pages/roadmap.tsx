import React from 'react';
import roadmapImg from '../images/roadmap.png';
import NavBar from '../components/NavBar';

const Roadmap = () => {
    return (
        <>
            <NavBar />
            <img src={roadmapImg} />
        </>
        // <Layout>
        //     <img src={roadmapImg} />
        // </Layout>
    )
}

export default Roadmap;