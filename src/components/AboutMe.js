import React from 'react';

export const AboutMe = () => {
	return (
		<div id="about" className="container mt-8">
			<div className="row">
				<div className="col-sm-8">
					<h5 className="mb-2">//About Me</h5>
					<p>Hey, I am Michael Carillon.</p>
					<p>
						I am a passionate full stack web developer based in Cleveland, OH. I
						have experience developing and maintaing web applications on both
						the front and back end. I also dabble in UI/UX design and am working
						on improving my skills in the field.
					</p>
					<p>
						I am dedicated to providing high-quality work that meets your
						expectations. I take pride in my attention to detail and am
						constantly updating my knowledge and skills to stay ahead of
						industry trends and to provide the best work possible.
					</p>
					<p>
						I got into web development after trying to make video games when I
						was younger. I attended The University of Akron majoring in Computer
						Information Systems. There I learned the basics of programming and
						used that knowledge to help me learn web development.
					</p>
					<p>
						In my spare time, I love to be with my fiancée Katherine and
						explore. We both love to travel and go to new places like museums,
						parks, and breweries.
					</p>
					<p>
						I also have a 3 year old bluetick coonhound mix named Brutus who is
						the best boy ever.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-4">
					<img
						src="/imgs/headshot.jpeg"
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
						src="/imgs/brutus.jpeg"
						className="img-fluid"
						alt="Brutus the Coonhound"
					/>
				</div>
			</div>
		</div>
	);
};
