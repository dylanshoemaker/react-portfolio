import React from 'react';
import Project from '../Project';


const Portfolio = (props) => {

    return (
        <section className="project">

        <div className="section-dark my-work" id="my-work">
            <div className="container">
                <div
                    className="columns is-multiline"
                    data-aos="fade-in"
                    data-aos-easing="linear"
                >
                    <div className="column is-12">
                        <h1 className="title has-text-centered section-title">My Work</h1>
                    </div>

                    <Project />

                </div>
            </div>
        </div>

    </section>
    );
};

export default Portfolio;