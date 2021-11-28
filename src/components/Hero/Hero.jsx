import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
	return (
		<>
			<section className="hero is-large">
				<div className="hero-body">
					<div className="container has-text-centered">
						<h1 className="subtitle">Hello there, I'm</h1>
						<h2 className="title">Dylan</h2>
						<h1 className="subtitle profession">
							A lifelong learner who likes to code
						</h1>
						<div className='is-hidden-mobile'>
						<Link to="/about">
							<button className="button is-outlined is-medium mx-5" data-aos="fade-up">
								About
							</button>
						</Link>
						<Link to="/portfolio">
							<button className="button is-outlined is-medium mx-5" data-aos="fade-down" >
								Portfolio
							</button>
						</Link>
						<Link to="/resume">
							<button className="button is-outlined is-medium mx-5" data-aos="fade-up">
								Resume
							</button>
						</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;