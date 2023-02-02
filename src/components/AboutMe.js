import React from 'react';

export const AboutMe = () => {
	return (
		<div id="about" className="container mt-8">
			<div className="row">
				<div className="col-sm-8">
					<h5 className="mb-2">//About Me</h5>
					<p>Hey, I am Michael Carillon.</p>
					<p>
						I am a passionate full-stack web developer based in Cleveland, OH.
					</p>
					<p>
						I got into web development after exploring video game development
						when I was younger. I attended The University of Akron majoring in
						Computer Information Systems. There I learned the basics of
						programming and used that knowledge to help me learn web
						development.
					</p>
					<p>
						In my spare time, I love to be with my fiancée Katherine and
						explore. We both love to travel and go to new places like museums,
						parks, and breweries.
					</p>
					<p>
						I also have a 3 year old bluetick coonhound mix named Brutus who I
						love to go on hikes and walks with.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<img
						src="/imgs/RDPMC_7864.jpeg"
						className="img-fluid mb-1"
						alt="Michael Carillon Headshot"
					/>
				</div>
				<div className="col-sm-4">
					<img
						src="/imgs/michael-and-katherine.jpeg"
						className="img-fluid mb-1"
						alt="Michael & Katherine"
					/>
				</div>
				<div className="col-sm-4">
					<img
						src="/imgs/IMG_0978.jpeg"
						className="img-fluid"
						alt="Brutus the Coonhound"
					/>
				</div>
			</div>
		</div>
	);
};
