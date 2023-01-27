import React from 'react';
import { Input } from './ui/Input';
import { Label } from './ui/Label';

export const ContactMe = () => {
	return (
		<div id="contact" className="container mt-8">
			<div className="row">
				<div className="col-sm-8">
					<h5 className="mb-2">//Contact Me</h5>
					<p>
						Looking for help for your next project? Look no further! Send me a
						message and we can connect to work together to create the next
						greatest thing!
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<form>
						<div className="row">
							<div className="col-sm-6">
								<Label>Name</Label>
								<Input type="text" />
							</div>
							<div className="col-sm-6">
								<Label>Email</Label>
								<Input type="text" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
