import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { ContactMe } from './components/ContactMe';
import { Fragment } from 'react';

function App() {
	return (
		<Fragment>
			<Header />
			<AboutMe />
			<Experience />
			{/* <ContactMe /> */}
			<Footer />
		</Fragment>
	);
}

export default App;
