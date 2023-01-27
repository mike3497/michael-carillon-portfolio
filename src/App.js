import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { ContactMe } from './components/ContactMe';

function App() {
	return (
		<div>
			<Header />
			<AboutMe />
			<Experience />
			{/* <ContactMe /> */}
			<Footer />
		</div>
	);
}

export default App;
